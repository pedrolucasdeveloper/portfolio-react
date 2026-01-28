import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      bg={useColorModeValue('gray.50', 'gray.900')} 
      px={4} 
      position="fixed" 
      w="100%" 
      zIndex="sticky"
      boxShadow="sm"
    >
      <Container maxW="container.lg">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading size="md" color="teal.400">
            Dev.Portfólio
          </Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* Botão de Dark/Light Mode */}
              <Button onClick={toggleColorMode} variant="ghost">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'teal.400'}
                _hover={{
                  bg: 'teal.500',
                }}>
                Contato
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}