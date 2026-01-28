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
              <Tag colorScheme="teal" variant="subtle">JavaScript (ES6+)</Tag>
              <Tag colorScheme="teal" variant="subtle">TypeScript</Tag>
              <Tag colorScheme="teal" variant="subtle">Accessible UI</Tag>
              <Tag colorScheme="teal" variant="subtle">Performance</Tag>
            </Wrap>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
            <Box bg={cardBg} p={6} rounded="md" boxShadow="sm">
              <Heading size="sm" mb={2} textAlign="left">Experiência</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                Desenvolvimento de SPAs com integração a APIs REST e componentes reutilizáveis.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} rounded="md" boxShadow="sm">
              <Heading size="sm" mb={2} textAlign="left">Formação</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="left">
                Formação em desenvolvimento web com projetos práticos em React.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
}