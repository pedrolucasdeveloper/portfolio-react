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
import { MdPhone, MdEmail, MdOutlineEmail } from 'react-icons/md';
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
    
    // Altere para o seu e-mail real aqui
    window.location.href = `mailto:seu-email@exemplo.com?subject=${subject}&body=${body}`;

    toast({ 
      title: 'Abrindo cliente de e-mail...', 
      description: 'Envie a mensagem pelo seu aplicativo de e-mail.',
      status: 'info', 
      duration: 3000, 
      isClosable: true 
    });
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" id="contact">
      <MotionSection>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.700', 'white')}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          boxShadow="2xl"
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              {/* Lado Esquerdo: Informações */}
              <WrapItem>
                <Box>
                  <Heading color="teal.400">Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Preencha o formulário para falar comigo.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} align="flex-start">
                      <Button
                        size="md"
                        variant="ghost"
                        color="teal.400"
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +55 (XX) XXXXX-XXXX
                      </Button>
                      <Button
                        size="md"
                        variant="ghost"
                        color="teal.400"
                        leftIcon={<MdEmail size="20px" />}
                      >
                        seu-email@exemplo.com
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>

              {/* Lado Direito: Formulário Funcional */}
              <WrapItem>
                <Box bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg" p={8} color={useColorModeValue('gray.800', 'white')}>
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
                      >
                        Enviar Mensagem
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </MotionSection>
    </Container>
  );
}