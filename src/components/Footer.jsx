import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<Box as="footer" bg="gray.50" py={6} mt={12}>
			<Container maxW="container.lg">
				<Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
					<Text fontSize="sm">© {year} Dev.Portfólio. Todos os direitos reservados.</Text>
					<Stack direction="row" spacing={4}>
						<Link href="#" color="teal.400">GitHub</Link>
						<Link href="#" color="teal.400">LinkedIn</Link>
						<Link href="#" color="teal.400">Contato</Link>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
