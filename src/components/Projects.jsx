import { Container, Heading, SimpleGrid, Box, Text, Stack, Link, Button } from '@chakra-ui/react';

const sampleProjects = [
	{ id: 1, title: 'Projeto A', desc: 'Uma app React com foco em UI e performance.' },
	{ id: 2, title: 'Projeto B', desc: 'Aplicação fullstack com API e autenticação.' },
	{ id: 3, title: 'Projeto C', desc: 'Pequeno jogo ou ferramenta interativa.' },
];

export default function Projects() {
	return (
		<Container maxW="container.lg" py={12}>
			<Heading mb={6} size="lg">Projetos</Heading>

			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
				{sampleProjects.map((p) => (
					<Box key={p.id} p={4} borderWidth={1} borderRadius="md" boxShadow="sm">
						<Stack spacing={3}>
							<Heading size="sm">{p.title}</Heading>
							<Text color="gray.600">{p.desc}</Text>
							<Link href="#"><Button size="sm" colorScheme="teal">Ver projeto</Button></Link>
						</Stack>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
}
