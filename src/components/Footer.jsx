import {
  Box,
  Container,
  Stack,
  Text,
  IconButton,
  useColorModeValue,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={2} align={'center'}>
          <Heading size="sm" color="teal.400">Dev.Portfólio</Heading>
          <Text fontSize="sm">| © {currentYear} Todos os direitos reservados</Text>
        </Stack>

        <Stack direction={'row'} spacing={6}>
          <IconButton
            as="a"
            href="https://github.com/seu-usuario"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
            variant="ghost"
            _hover={{ color: 'teal.400' }}
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
            variant="ghost"
            _hover={{ color: 'teal.400' }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="20px" />}
            variant="ghost"
            _hover={{ color: 'teal.400' }}
          />
        </Stack>
      </Container>
    </Box>
  );
}