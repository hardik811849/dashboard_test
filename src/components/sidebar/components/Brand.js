import React from 'react';

// Chakra imports
import { Flex, Image, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import realproton_logo from 'assets/final_logo.svg';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align="center" direction="column">
      <Image src={realproton_logo} alt="logo" mb={'20px'} w={'80%'} />
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
