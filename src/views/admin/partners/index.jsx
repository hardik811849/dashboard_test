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
import anchoreg from '../../../assets/partners/partner/anchoreg.png';
import avalanche from '../../../assets/partners/partner/avalanche.png';
import base from '../../../assets/partners/partner/base.png';
import binance from '../../../assets/partners/partner/binance.png';
import metamask from '../../../assets/partners/partner/metamask.png';
import polygon from '../../../assets/partners/partner/polygon.png';
import solana from '../../../assets/partners/partner/solana.png';
import tron from '../../../assets/partners/partner/tron.png';
import trustwallet from '../../../assets/partners/partner/trustwallet.jpg';
import { FaEthereum } from 'react-icons/fa';

export default function Partners() {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        pt={{ base: '130px', md: '80px', xl: '80px' }}
      >
        <Grid
          w={'100%'}
          m={'auto'}
          gridTemplateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(3,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(3,1fr)',
            '2xl': 'repeat(3,1fr)',
          }}
          gap={6}
        >
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={anchoreg}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />
            <Text>Anchorage</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={avalanche}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />{' '}
            <Text mt={3}>Avalanche</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={base}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />{' '}
            <Text mt={3}>Base</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={binance}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />{' '}
            <Text mt={3}>Binance</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={metamask}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />
            <Text mt={3}>Metamask</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={polygon}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />{' '}
            <Text mt={3}>Ploygon</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image
              src={solana}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />{' '}
            <Text mt={3}>Solana</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            flexDir={'column'}
            alignItems={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
          >
            <Image
              src={tron}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />
            <Text mt={3}>Ton</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
          >
            <Image
              src={trustwallet}
              alt="pro1"
              width={'60px'}
              height={'60px'}
              className="w-full"
            />
            <Text mt={3}>TrustWallet</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            p={10}
            bg={'white'}
            rounded={'3xl'}
            flexDirection={'column'}
            boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
          >
            <FaEthereum size={60} />
            <Text mt={3}>Ethereum</Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
