import { Container, Heading, Text, Stack, Box, Image, SimpleGrid, Tag, Wrap, useColorModeValue, Flex } from '@chakra-ui/react';

export default function About() {
  // Ajuste opcional para o fundo dos cards no Dark Mode
  const cardBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Container id="about" maxW="container.lg" py={16}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
        {/* Coluna esquerda: imagem */}
        <Box flex="0 0 auto">
          <Image
            src="/pedrolucas.jpeg"
            alt="Pedro Lucas"
            h={{ base: '200px', md: '260px' }}
            w="auto"
            maxW={{ base: '80%', md: '260px' }}
            border="4px solid"
            borderColor="teal.400"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>

        {/* Coluna direita: conteúdo */}
        <Box flex="1">
          <Heading mb={4}>Sobre mim</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} mb={6}>
            Sou desenvolvedor frontend com experiência em React, construção de interfaces
            acessíveis e aplicações responsivas. Tenho foco em entregar código limpo,
            performático e com boa experiência do usuário.
          </Text>

          <Box mb={6}>
            <Heading size="md" mb={3} textAlign="left">Principais habilidades</Heading>
            <Wrap justify={{ base: 'center', md: 'left' }}>
              <Tag colorScheme="teal" variant="subtle">React</Tag>
              <Tag colorScheme="teal" variant="subtle">Chakra UI</Tag>
              <Tag colorScheme="teal" variant="subtle">JavaScript</Tag>
              <Tag colorScheme="teal" variant="subtle">TypeScript</Tag>
              <Tag colorScheme="teal" variant="subtle">UI/UX</Tag>
              <Tag colorScheme="teal" variant="subtle">Performance</Tag>
            </Wrap>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
            <Box bg={cardBg} p={6} rounded="md" boxShadow="sm">
              <Heading size="sm" mb={2} textAlign="left">Experiência</Heading>
              <Stack spacing={1} align="start">
                <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                  Desenvolvimento de projetos em React com Vite em JavaScript e TypeScript, usando ferramentas de UI e integração com APIs.
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                  Estágio em desenvolvimento de sistemas na Open7.
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                  Desenvolvedor web frontend na Avante Tech Jr.
                </Text>
                <Text fontWeight="bold" color="teal.500" textAlign="left">
                  Atualmente: Gerente de projetos na Avante Tech Jr.
                </Text>
              </Stack>
            </Box>
            <Box bg={cardBg} p={6} rounded="md" boxShadow="sm">
              <Heading size="sm" mb={2} textAlign="left">Formação</Heading>
              <Stack spacing={3} align="start">
                <Stack spacing={0} align="start">
                  <Text fontSize="md" fontWeight="bold" color="teal.500" textAlign="left">
                    Cursando Ciência da Computação — Universidade Federal do Ceará (UFC)
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                    Conhecimentos em Engenharia de Software, Fundamentos de Banco de Dados,
                    Estruturas de Dados e Inteligência Artificial.
                  </Text>
                </Stack>

                <Stack spacing={0} align="start">
                  <Text fontSize="md" fontWeight="semibold" textAlign="left">
                    Técnico em Informática — EEEP de Baturité
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                    Conhecimentos em gestão do tempo, programação web e outras competências
                    práticas desenvolvidas no curso técnico.
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
}