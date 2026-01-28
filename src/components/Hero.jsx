import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Image,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container id="top" maxW={'6xl'} minH={'calc(100vh - 64px)'} display="flex" alignItems="center">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          >
            <Text as={'span'}>Olá, eu sou</Text>
            <br />
            <Text
              as={'span'}
              position={'relative'}
              color={'teal.400'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'teal.900',
                zIndex: -1,
              }}
            >
              Pedro Lucas
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Sou um <strong>Desenvolvedor Frontend</strong> apaixonado por criar interfaces 
            digitais impecáveis. Com experiência em React JS, transformo ideias complexas 
            em experiências de usuário simples e intuitivas.
          </Text>
          
          <Stack direction={'row'} spacing={4}>
            <Badge colorScheme="teal" variant="subtle" px={3} py={1} rounded="full">
              #ReactJS
            </Badge>
            <Badge colorScheme="blue" variant="subtle" px={3} py={1} rounded="full">
              #Vite
            </Badge>
            <Badge colorScheme="purple" variant="subtle" px={3} py={1} rounded="full">
              #UI/UX
            </Badge>
          </Stack>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              as="a"
              href="#projects"
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={8}
              colorScheme={'teal'}
              bg={'teal.400'}
              _hover={{ bg: 'teal.500' }}
            >
              Meus Projetos
            </Button>
            <Button
              as="a"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={8}
              variant={'outline'}
              borderColor={'teal.400'}
              color={useColorModeValue('gray.900', 'white')}
              _hover={{ bg: useColorModeValue('teal.50', 'gray.800') }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'350px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}