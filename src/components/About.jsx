import { Container, Heading, Text, Stack, Box, Avatar, SimpleGrid, Tag, Wrap } from '@chakra-ui/react';

export default function About() {
  return (
    <Container id="about" maxW="container.lg" py={16}>
      <Stack spacing={8} align="center" textAlign="center">
        <Avatar name="Dev Portfólio" size="2xl" />
        <Heading>Sobre mim</Heading>
        <Text color="gray.600" maxW="3xl">
          Sou desenvolvedor frontend com experiência em React, construção de interfaces
          acessíveis e aplicações responsivas. Tenho foco em entregar código limpo,
          performático e com boa experiência do usuário.
        </Text>

        <Box w="100%">
          <Heading size="md" mb={4} textAlign="left">Principais habilidades</Heading>
          <Wrap>
            <Tag colorScheme="teal">React</Tag>
            <Tag colorScheme="teal">Chakra UI</Tag>
            <Tag colorScheme="teal">JavaScript (ES6+)</Tag>
            <Tag colorScheme="teal">TypeScript</Tag>
            <Tag colorScheme="teal">Accessible UI</Tag>
            <Tag colorScheme="teal">Performance</Tag>
          </Wrap>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
          <Box bg="gray.50" p={6} rounded="md" boxShadow="sm">
            <Heading size="sm" mb={2}>Experiência</Heading>
            <Text color="gray.600">Desenvolvimento de SPAs com integração a APIs REST e componentes reutilizáveis.</Text>
          </Box>
          <Box bg="gray.50" p={6} rounded="md" boxShadow="sm">
            <Heading size="sm" mb={2}>Formação</Heading>
            <Text color="gray.600">Formação em desenvolvimento web com projetos práticos em React.</Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
