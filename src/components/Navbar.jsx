import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  HStack,
  useColorMode,
  Container,
  Heading,
  IconButton,
  Stack,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(17,24,39,0.6)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      w="100%"
      bg={bg}
      css={{ backdropFilter: 'saturate(180%) blur(6px)' }}
      zIndex="sticky"
      borderBottomWidth={1}
      borderColor={borderColor}
    >
      <Container maxW="container.lg">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={4} alignItems="center">
            <Heading size="sm" color="teal.400" as="a" href="#top">
              Dev.PedroLucas
            </Heading>
            <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }}>
              {NAV_LINKS.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.100', 'gray.800') }}
                >
                  {nav.label}
                </Link>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems="center">
            <HStack spacing={3} mr={2}>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                as="a"
                href="https://github.com/pedrolucasdeveloper"
                target="_blank"
                size="sm"
                variant="ghost"
              />

              <IconButton
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                size="sm"
                variant="ghost"
              />

              <Button
                as="a"
                href="#contact"
                display={{ base: 'none', md: 'inline-flex' }}
                colorScheme="teal"
                size="sm"
              >
                Contato
              </Button>
            </HStack>

            <IconButton
              display={{ base: 'inline-flex', md: 'none' }}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
            />
          </Flex>
        </Flex>
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing={4} mt={10}>
              {NAV_LINKS.map((nav) => (
                <Link key={nav.href} href={nav.href} onClick={onClose} fontSize="lg">
                  {nav.label}
                </Link>
              ))}

              <Button as="a" href="#contact" colorScheme="teal" onClick={onClose}>
                Contato
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}