import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import MotionSection from './MotionSection';

export default function Contact() {
  // 1. Lógica de Estado
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  // 2. Lógica de Envio
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${name || 'visitante'}`);
    const body = encodeURIComponent(`Nome: ${name}%0AEmail: ${email}%0A%0A${message}`);
    
    // Abre o cliente de e-mail do usuário com destinatário e conteúdo já preenchidos
    window.location.href = `mailto:spedrolucas740@gmail.com?subject=${subject}&body=${body}`;

    toast({ 
      title: 'Abrindo cliente de e-mail...', 
      description: 'Envie a mensagem pelo seu aplicativo de e-mail.',
      status: 'info', 
      duration: 3000, 
      isClosable: true 
    });
  };

  return (
    <Container maxW="container.lg" py={20} centerContent overflow="hidden" id="contact">
      <MotionSection>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.700', 'white')}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          boxShadow="xl"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box p={4} flex="1">
            <Heading color="teal.400" fontSize={{ base: '2xl', md: '3xl' }}>Contato</Heading>
            <Text mt={3} color="gray.500" fontSize="lg">
              Preencha o formulário abaixo para entrar em contato comigo.
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={4} align="flex-start">
                <Button
                  as="a"
                  href="https://wa.me/5585998058739"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="ghost"
                  color="teal.400"
                  leftIcon={<FaWhatsapp size="20px" />}
                >
                  +55 (85) 998058739
                </Button>
                <Button
                  as="a"
                  href="mailto:spedrolucas740@gmail.com"
                  size="md"
                  variant="ghost"
                  color="teal.400"
                  leftIcon={<MdEmail size="20px" />}
                >
                  spedrolucas740@gmail.com
                </Button>
              </VStack>
            </Box>
          </Box>

          <Box bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg" p={8} color={useColorModeValue('gray.800', 'white')} flex="1">
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <FormControl id="name" isRequired>
                  <FormLabel>Nome</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.500" />
                    </InputLeftElement>
                    <Input 
                      type="text" 
                      size="md" 
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>E-mail</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.500" />
                    </InputLeftElement>
                    <Input 
                      type="email" 
                      size="md" 
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl id="message" isRequired>
                  <FormLabel>Mensagem</FormLabel>
                  <Textarea
                    placeholder="Olá, gostaria de falar sobre..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>

                <Button
                  type="submit"
                  variant="solid"
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: 'teal.500' }}
                  width="full"
                  transition="background-color 0.3s ease"
                >
                  Enviar Mensagem
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </MotionSection>
    </Container>
  );
}