import {
  Box,
  Divider,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
// Custom components
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import SwapAndBuyToken from 'components/SwapAndBuyToken';
import { useEffect, useState } from 'react';
import { FaHotel } from 'react-icons/fa';
import { MdAttachMoney, MdBarChart } from 'react-icons/md';
import logo_like_favicon from 'assets/New RP Fevicon.svg';

export default function UserReports() {
  const [endTime, setEndTime] = useState(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());
  const [selectedOption, setSelectedOption] = useState('Daily');
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const datesArray = [];
      if (selectedOption === 'Daily') {
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(today.getDate() + i);
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            isToday: i === 0,
          });
        }
      } else if (selectedOption === 'Monthly') {
        for (let i = 0; i < 7; i++) {
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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [endTime]);

  const formatTimeLeft = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{
          base: 2,
          md: 2,
        }}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
      >
        <Text className="time-part" color={'#ff5800'} fontSize={'2xl'}>
          {days}d
        </Text>
        <Text className="time-part" color={'#ff5800'} fontSize={'2xl'}>
          {hours}h
        </Text>
        <Text className="time-part" color={'#ff5800'} fontSize={'2xl'}>
          {minutes}m
        </Text>
        <Text className="time-part" color={'#ff5800'} fontSize={'2xl'}>
          {seconds}s
        </Text>
      </Box>
    );
  };

  // Chakra Color Mode
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', '2xl': 'repeat(6,1fr)' }}
        // columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
        gap="20px"
        mb="20px"
      >
        <GridItem>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Realproton Price"
            value="$ 1"
          />
        </GridItem>
        <GridItem>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={MdAttachMoney}
                    color={brandColor}
                  />
                }
              />
            }
            name="Realproton ROI"
            value="8 %"
          />
        </GridItem>
        <GridItem>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Image w="28px" h="28px" src={logo_like_favicon} />}
              />
            }
            name="Realproton Supply"
            value="$ 2 M"
          />
        </GridItem>
        <GridItem>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="28px" h="28px" as={FaHotel} color={brandColor} />
                }
              />
            }
            name="Properties"
            value="15"
          />
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 2, '2xl': 2 }}
          boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
          borderRadius="20px"
        >
          <Box p={'20px'} bg={'white'} rounded={'2xl'}>
            <Box
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              gap={4}
              alignItems="center"
            >
              <Box
                width={{ base: '80%', md: '20%', xl: '20%' }}
                bgcolor="rgba(255, 255, 255, 0.05)"
                alignItems="center"
                borderRadius="4px"
              >
                <Text textAlign="center">Round 1</Text>
                <Divider />
                <Text textAlign="center">Day 1</Text>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Text>Time Left :</Text>
                <Text
                  className="timer"
                  display={'flex'}
                  alignItems={'flex-end'}
                >
                  {formatTimeLeft(timeLeft)}
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      {/* <SimpleGrid
        w={'60%'}
        mx={'auto'}
        bg={'#ffffff'}
        p={10}
        borderRadius={'20px'}
        boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
      > */}
      <SwapAndBuyToken />
      {/* </SimpleGrid> */}
    </Box>
  );
}
