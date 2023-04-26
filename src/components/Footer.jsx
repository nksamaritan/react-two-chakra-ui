import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineSend,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} py="4" alignItems={'stretch'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get updates...
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights reserved!</Text>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a
              href="https://www.youtube.com/@NihalKapadia"
              target={'_blank'}
              rel="noreferrer"
            >
              <AiOutlineYoutube />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a
              href="https://www.instagram.com/nehal_nk"
              target={'_blank'}
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a
              href="https://www.github.com/nksamaritan"
              target={'_blank'}
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;