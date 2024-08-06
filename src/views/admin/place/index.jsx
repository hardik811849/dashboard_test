import {
  Box,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Button,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import pro1 from '../../../assets/pro1.svg';
import pro3 from '../../../assets/pro3.svg';

export default function Marketplace() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Box>
        <Box pb={'3rem'}>
          <Box>
            <Box w={'100%'} m={'auto'} className="slider-container">
              <Grid
                m={'auto'}
                gridTemplateColumns={{
                  base: 'repeat(1,1fr)',
                  sm: 'repeat(2,1fr)',
                  md: 'repeat(2,1fr)',
                  lg: 'repeat(3,1fr)',
                  xl: 'repeat(3,1fr)',
                  '2xl': 'repeat(3,1fr)',
                }}
                gap={2}
              >
                <GridItem>
                  <Box
                    bg={'#fff'}
                    rounded={'2xl'}
                    fontSize={'17px'}
                    fontWeight={'semibold'}
                    p={5}
                    mr={2}
                    border={'1px solid #ff5800'}
                  >
                    <Image
                      src={pro1}
                      alt="pro1"
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <Text color={'#000'} textAlign={'center'} mt={2}>
                      Residential Leased Property
                    </Text>
                    <Box
                      mt={'17px'}
                      display={'flex'}
                      flexDirection={{
                        base: 'column',
                        lg: 'row',
                        '2xl': 'row',
                      }}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Stack textAlign={'center'}>
                        <Text color={'#000'} fontSize={'20px'} opacity={0.5}>
                          Saffron Appartments
                        </Text>
                      </Stack>
                      <Box
                        w={{
                          lg: '-webkit-fill-available',
                          xl: 'fit-content',
                        }}
                        fontSize={'15px'}
                        bg={'rgba(255, 255, 255, 0.05)'}
                        textAlign={'center'}
                        p={'20px'}
                        rounded={'md'}
                        color={'#000'}
                      >
                        1st of 4 Properties
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                          color={'#000'}
                        >
                          Annual Rental Return
                        </Text>
                        <Text color={'#000'}>18%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                          color={'#000'}
                        >
                          Projected Value Growth
                        </Text>
                        <Text color={'#000'}>15%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                          color={'#000'}
                        >
                          Leased since
                        </Text>
                        <Text color={'#000'}>April, 2022</Text>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    bg={'#fff'}
                    rounded={'2xl'}
                    fontSize={'17px'}
                    fontWeight={'semibold'}
                    p={5}
                    mr={2}
                    border={'1px solid #ff5800'}
                  >
                    <Image
                      src={pro3}
                      alt="pro1"
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <Text textAlign={'center'} mt={2}>
                      Yield Bearing Hotel
                    </Text>
                    <Box
                      mt={'17px'}
                      display={'flex'}
                      flexDirection={{
                        base: 'column',
                        lg: 'row',
                        '2xl': 'row',
                      }}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Stack textAlign={'center'}>
                        <Text fontSize={'20px'} opacity={0.5}>
                          Linking Park Motels
                        </Text>
                      </Stack>
                      <Box
                        w={{
                          lg: '-webkit-fill-available',
                          xl: 'fit-content',
                        }}
                        fontSize={'15px'}
                        bg={'rgba(255, 255, 255, 0.05)'}
                        textAlign={'center'}
                        p={'20px'}
                        rounded={'md'}
                      >
                        2nd of 4 Properties
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Annual Rental Return
                        </Text>
                        <Text>21%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Projected Value Growth
                        </Text>
                        <Text>12%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Operational since
                        </Text>
                        <Text>September, 2021</Text>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    bg={'#fff'}
                    rounded={'2xl'}
                    fontSize={'17px'}
                    fontWeight={'semibold'}
                    p={5}
                    mr={2}
                    border={'1px solid #ff5800'}
                  >
                    <Image
                      src={pro1}
                      alt="pro1"
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <Text textAlign={'center'} mt={2}>
                      Commercials Retail Building on Lease
                    </Text>
                    <Box
                      mt={'17px'}
                      display={'flex'}
                      flexDirection={{
                        base: 'column',
                        lg: 'row',
                        '2xl': 'row',
                      }}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Stack textAlign={'center'}>
                        <Text fontSize={'20px'} opacity={0.5}>
                          Crown Towers
                        </Text>
                      </Stack>
                      <Box
                        w={{
                          lg: '-webkit-fill-available',
                          xl: 'fit-content',
                        }}
                        fontSize={'15px'}
                        bg={'rgba(255, 255, 255, 0.05)'}
                        textAlign={'center'}
                        p={'20px'}
                        rounded={'md'}
                      >
                        3rd of 4 Properties
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Annual Rental Return
                        </Text>
                        <Text>16%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Projected Value Growth
                        </Text>
                        <Text>18%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Leased since
                        </Text>
                        <Text>January, 2018</Text>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem mt={4}>
                  <Box
                    bg={'#fff'}
                    rounded={'2xl'}
                    fontSize={'17px'}
                    fontWeight={'semibold'}
                    p={5}
                    mr={2}
                    border={'1px solid #ff5800'}
                  >
                    <Image
                      src={pro1}
                      alt="pro1"
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <Text textAlign={'center'} mt={2}>
                      Residential Leased Property
                    </Text>
                    <Box
                      mt={'17px'}
                      display={'flex'}
                      flexDirection={{
                        base: 'column',
                        lg: 'row',
                        '2xl': 'row',
                      }}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Stack textAlign={'center'}>
                        <Text fontSize={'20px'} opacity={0.5}>
                          Hemingway Appartments
                        </Text>
                      </Stack>
                      <Box
                        w={{
                          lg: '-webkit-fill-available',
                          xl: 'fit-content',
                        }}
                        fontSize={'15px'}
                        bg={'rgba(255, 255, 255, 0.05)'}
                        textAlign={'center'}
                        p={'20px'}
                        rounded={'md'}
                      >
                        4th of 4 Properties
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Annual Rental Return
                        </Text>
                        <Text>25%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Projected Value Growth
                        </Text>
                        <Text>20%</Text>
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mt={5}
                      >
                        <Text
                          fontSize={'26px'}
                          opacity={0.5}
                          fontWeight={'thin'}
                        >
                          Leased since
                        </Text>
                        <Text>July, 2023</Text>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
