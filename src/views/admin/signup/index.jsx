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

export default function Signup() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'94vh'}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Box
        width={'50%'}
        height={'200px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box>
          <Text
            textAlign={'center'}
            fontSize={{
              base: '30px',
              sm: '35px',
              md: '35px',
              lg: '40px',
              xl: '40px',
              '2xl': '40px',
            }}
          >
            Please Connect your wallet
          </Text>
          <Text
            fontSize={{
              base: '16px',
              sm: '16px',
              md: '18px',
              lg: '18px',
              xl: '18px',
              '2xl': '18px',
            }}
            textAlign={'center'}
          >
            To use Proton Marketplace you need to connect your wallet first.
          </Text>
          <Box mt={5} display={'flex'} justifyContent={'center'}>
            <Button p={'30px'}>
              <Text
                fontSize={{
                  base: '22px',
                  sm: '24px',
                  md: '24px',
                  lg: '26px',
                  xl: '26px',
                  '2xl': '26px',
                }}
              >
                SignUp
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
