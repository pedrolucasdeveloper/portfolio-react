import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          Desenvolvedor <br />
          <Text as={'span'} color={'teal.400'}>
            Frontend React
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          Especialista em criar interfaces modernas com React JS e Chakra UI. 
          Focado em performance, acessibilidade e design responsivo.
        </Text>
        <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
          <Button colorScheme={'teal'} bg={'teal.400'} rounded={'full'} px={6} _hover={{ bg: 'teal.500' }}>
            Ver Meus Projetos
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}