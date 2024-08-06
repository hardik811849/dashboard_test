import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  Divider,
  Grid,
  GridItem,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState, useEffect } from 'react';
import {
  checkBalanceProton,
  checkTodayBalance,
  getProtonCalulate,
  investNow,
} from './blockchain/commonFunction';
import { useAccount } from 'wagmi';
import fav from '../../src/assets/New RP Fevicon.svg';
import usa from '../../src/assets/usa 1.svg';

export default function SwapAndBuyToken() {
  const [tabIndex, setTabIndex] = useState(0);
  const [advance, setAdvance] = useState(false);
  const [usdAmount, setUsdAmount] = useState('');
  const [protonAmount, setProtonAmount] = useState('');
  const [todayInvestment, setTodayInvestment] = useState();
  const [protonBal, setProtonBal] = useState();
  const { address } = useAccount();
  const [selectedOption, setSelectedOption] = useState('Daily');
  const [dates, setDates] = useState([]);
  const [endTime, setEndTime] = useState(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  const handleAdvanced = () => {
    setAdvance(!advance);
  };
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUsd = async (e) => {
    let { value } = e.target;
    const protonValue = await getProtonCalulate(value);
    setUsdAmount(value);
    if (value > 0) {
      setProtonAmount(protonValue);
    } else {
      setProtonAmount(value);
    }
  };

  useEffect(() => {
    (async () => {
      let bal = await checkTodayBalance();
      setTodayInvestment(bal);
      let protonBal = await checkBalanceProton(address);
      console.log('proton bal==>', protonBal);
      setProtonBal(protonBal);
    })();
  }, []);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const datesArray = [];
      if (selectedOption === 'Daily') {
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            isToday: i === 0,
          });
        }
      } else if (selectedOption === 'Monthly') {
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setMonth(today.getMonth() + i);
          date.setDate(today.getDate());
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            isToday: i === 0,
          });
        }
      }
      setDates(datesArray);
    };
    generateDates();
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    if (usdAmount !== '') {
      let getInvest = await investNow(usdAmount);
      return null;
    }
  };

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const today = new Date();

  // Extract the day, month, and year
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <>
      <Box
        bg={'#ffffff'}
        p={10}
        w={'50%'}
        mx={'auto'}
        borderRadius={'20px'}
        boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
      >
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          isFitted
          variant="enclosed"
          colorScheme="green"
          mx={'auto'}
        >
          <TabList border={'none'}>
            <Tab
              _selected={{
                color: '#FF5800',
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
              fontWeight={'semibold'}
              _hover={{
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
              fontSize={{
                base: '14px',
                sm: '14px',
                md: '16px',
                lg: '18px',
                xl: '18px',
                '2xl': '18px',
              }}
              borderTopRadius={'10px'}
            >
              Buy with Crypto
            </Tab>
            <Tab
              _selected={{
                color: '#FF5800',
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
              fontWeight={'semibold'}
              _hover={{
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
              fontSize={{
                base: '14px',
                sm: '14px',
                md: '16px',
                lg: '18px',
                xl: '18px',
                '2xl': '18px',
              }}
              borderTopRadius={'10px'}
            >
              Buy with FIAT
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  bg="rgb(247, 248, 250)"
                  p="1rem 1rem 1.1rem"
                  borderRadius="1.25rem"
                  border="0.06rem solid rgb(237, 238, 242)"
                  _hover={{ border: '0.06rem solid rgb(211, 211, 211)' }}
                >
                  <Box>
                    <Text color="gray">Sell</Text>
                    <Input
                      p={'20px'}
                      width={'100%'}
                      onChange={(e) => handleUsd(e)}
                      placeholder="0.0"
                      fontWeight="500"
                      fontSize="1.5rem"
                      size="19rem"
                      bg="rgb(247, 248, 250)"
                      outline={'none'}
                      border={'none'}
                      focusBorderColor={'none'}
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield',
                      }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Image src={usa} w="3rem" />
                  </Box>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  bg="rgb(247, 248, 250)"
                  pos="relative"
                  p="1rem 1rem 1.1rem"
                  borderRadius="1.25rem"
                  mt="0.25rem"
                  border="0.06rem solid rgb(237, 238, 242)"
                  _hover={{ border: '0.06rem solid rgb(211, 211, 211)' }}
                >
                  <Box>
                    <Text color="gray">Buy</Text>
                    <Input
                      p={'20px'}
                      value={protonAmount}
                      placeholder="0.0"
                      fontSize="1.5rem"
                      width="100%"
                      size="19rem"
                      bg="rgb(247, 248, 250)"
                      outline="none"
                      border="none"
                      readOnly={true}
                      focusBorderColor="none"
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield',
                      }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Image src={fav} width="4rem" />
                  </Box>
                </Flex>

                <Box mt="0.5rem">
                  <Button
                    onClick={() => handleSubmit()}
                    bg="#ff5800"
                    _hover={{ cursor: 'pointer' }}
                    width="100%"
                    p={'2rem'}
                    borderRadius="1.25rem"
                    color="#fff"
                  >
                    Invest Now
                  </Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
                <Box bg="rgb(247, 248, 250)" rounded="3xl" p="2rem">
                  <Text pt="0.5rem" pl="0.5rem">
                    You're Buying
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Input
                      placeholder="$0.0"
                      fontWeight="500"
                      fontSize="5rem"
                      width="100%"
                      size="19rem"
                      textAlign="center"
                      bg="rgb(247, 248, 250)"
                      outline="none"
                      border="none"
                      focusBorderColor="none"
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield',
                      }}
                    />
                  </Box>
                  <Text
                    textAlign="center"
                    fontSize="1.5rem"
                    opacity="0.2"
                    fontWeight="500"
                  >
                    USDT
                  </Text>
                </Box>

                <Box mt="0.5rem">
                  <Button
                    onClick={() => handleSubmit()}
                    bg="#ff5800"
                    width="100%"
                    p="1.62rem"
                    borderRadius="1.25rem"
                    _hover={{ cursor: 'pointer' }}
                    color="#fff"
                  >
                    Invest Now
                  </Button>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box display={'flex'} justifyContent={'center'}>
          <Box mt={2}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              _hover={{ cursor: 'pointer' }}
              onClick={() => handleAdvanced()}
            >
              <span style={{ color: '#ff5800' }}>Advanced View</span>
              {advance ? (
                <IoIosArrowDown style={{ color: '#ff5800' }} />
              ) : (
                <IoIosArrowUp style={{ color: '#ff5800' }} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {advance && (
        <Box mt={6} display={'flex'} justifyContent={'center'}>
          <Box>
            <Box borderRadius={'20px'} width={'100%'} p={8} bgColor={'#fff'}>
              <Grid
                gridTemplateColumns={{
                  base: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(6, 1fr)',
                  xl: 'repeat(6, 1fr)',
                  '2xl': 'repeat(6, 1fr)',
                }}
                alignItems={'center'}
              >
                <GridItem>
                  <Box
                    bg={'#ff5800'}
                    borderRadius={'20px'}
                    p={4}
                    color={'#fff'}
                    textAlign={'center'}
                  >
                    <Box style={{ fontSize: '20px', marginBottom: '10px' }}>
                      {day}
                    </Box>
                    <Box style={{ fontSize: '20px', marginBottom: '10px' }}>
                      {month}
                    </Box>
                    <Box style={{ fontSize: '24px' }}>{year}</Box>
                  </Box>
                </GridItem>
                <GridItem ps={2} borderRight={'2px solid #e4e4e4'}>
                  <Box>
                    <Text textAlign={'center'} color={'secondaryGray.600'}>
                      Today’s RealProton Supply
                    </Text>
                    <Text
                      fontSize={{
                        base: '25px',
                        sm: '25px',
                        md: '30px',
                        lg: '35px',
                        xl: '40px',
                        '2xl': '40px',
                      }}
                      textAlign={'center'}
                      color={'#ff5800'}
                    >
                      2.00M
                    </Text>
                  </Box>
                </GridItem>
                <GridItem ps={2} borderRight={'2px solid #e4e4e4'}>
                  <Box>
                    <Text textAlign={'center'} color={'secondaryGray.600'}>
                      Today’s Total Investment
                    </Text>
                    <Text
                      fontSize={{
                        base: '25px',
                        sm: '25px',
                        md: '30px',
                        lg: '35px',
                        xl: '40px',
                        '2xl': '40px',
                      }}
                      textAlign={'center'}
                      color={'#ff5800'}
                    >
                      ${todayInvestment}
                    </Text>
                  </Box>
                </GridItem>
                <GridItem ps={2} borderRight={'2px solid #e4e4e4'}>
                  <Box>
                    <Text textAlign={'center'} color={'secondaryGray.600'}>
                      Current Auction cost
                    </Text>
                    <Text
                      fontSize={{
                        base: '25px',
                        sm: '25px',
                        md: '30px',
                        lg: '35px',
                        xl: '40px',
                        '2xl': '40px',
                      }}
                      textAlign={'center'}
                      color={'#ff5800'}
                    >
                      $0
                    </Text>
                  </Box>
                </GridItem>
                <GridItem ps={2} borderRight={'2px solid #e4e4e4'}>
                  <Box>
                    <Text textAlign={'center'} color={'secondaryGray.600'}>
                      Your total investment Today
                    </Text>
                    <Text
                      fontSize={{
                        base: '25px',
                        sm: '25px',
                        md: '30px',
                        lg: '35px',
                        xl: '40px',
                        '2xl': '40px',
                      }}
                      textAlign={'center'}
                      color={'#ff5800'}
                    >
                      ${protonBal}
                    </Text>
                  </Box>
                </GridItem>
                <GridItem ps={2}>
                  <Box>
                    <Text textAlign={'center'} color={'secondaryGray.600'}>
                      RealProton | Your Potential ROI
                    </Text>
                    <Text
                      fontSize={{
                        base: '25px',
                        sm: '25px',
                        md: '30px',
                        lg: '35px',
                        xl: '40px',
                        '2xl': '40px',
                      }}
                      textAlign={'center'}
                      color={'#ff5800'}
                    >
                      8%
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
            <Box
              borderRadius={'20px'}
              width={'100%'}
              mt={10}
              p={8}
              bgColor={'#fff'}
            >
              <Box display={'flex'} justifyContent={'end'}>
                <Box width={'20%'}>
                  <Select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    placeholder="Select option"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                  </Select>
                </Box>
              </Box>
              <Box mt={5}>
                <Box display={'flex'} justifyContent={'space-between'}>
                  {dates.map((date, index) => (
                    <Box
                      borderRadius={'10px'}
                      key={index}
                      className={`rounded-xl text-center p-5 ${
                        date.isToday
                          ? 'bg-[#FF5800] text-white'
                          : 'bg-gray bg-opacity-5'
                      }`}
                      color={date.isToday ? 'white' : 'black'}
                      bgColor={date.isToday ? '#FF5800' : 'rgba(0,0,0,0.05)'}
                    >
                      <Box padding={5}>
                        <Text textAlign={'center'}>{date.day}</Text>
                        <Text textAlign={'center'}>{date.month}</Text>
                        <Text textAlign={'center'}>{date.year}</Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
