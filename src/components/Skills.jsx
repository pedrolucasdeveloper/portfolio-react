import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs 
} from 'react-icons/fa';
import { SiChakraui, SiVite, SiTypescript } from 'react-icons/si';

const SKILLS_DATA = [
  { name: 'React JS', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
];

export default function Skills() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW="container.lg">
        <Stack spacing={4} as={Box} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Minhas Habilidades</Heading>
          <Text color={'gray.500'} fontSize={'xl'}>
            As tecnologias que utilizo para dar vida a projetos incríveis.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
          {SKILLS_DATA.map((skill) => (
            <Flex
              key={skill.name}
              align={'center'}
              justify={'center'}
              direction={'column'}
              p={5}
              bg={useColorModeValue('white', 'gray.800')}
              rounded={'xl'}
              boxShadow={'md'}
              transition={'all 0.3s ease'}
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
                borderColor: 'teal.400',
              }}
              border="1px solid transparent"
            >
              <Icon as={skill.icon} w={10} h={10} color={skill.color} mb={3} />
              <Text fontWeight={600}>{skill.name}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}