import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Tag,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
// Importando Swiper React componentes e estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Projeto A',
    description: 'Descrição genérica do Projeto A. Em breve mais informações.',
    tags: ['React', 'Chakra UI', 'Vite'],
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Projeto B',
    description: 'Descrição genérica do Projeto B. Em breve mais informações.',
    tags: ['React', 'Chakra UI', 'Vite'],
    image: 'https://images.unsplash.com/photo-1761198845185-461286392ac2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Projeto C',
    description: 'Descrição genérica do Projeto C. Em breve mais informações.',
    tags: ['React', 'Chakra UI', 'Vite'],
    image: 'https://plus.unsplash.com/premium_photo-1661338803969-61af8ef4fc79?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function Projects() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" py={20} id="projects">
      <Stack spacing={4} as={Box} textAlign={'center'} mb={10}>
        <Heading fontSize={'3xl'} fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>
          Meus Projetos
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
          Explore alguns modelos de projetos. Deslize para ver mais.
        </Text>
      </Stack>

      <Box>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Padrão mobile
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            // Quando a tela for >= 768px (Desktop)
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3, // Mais flexível em telas maiores
            },
          }}
          style={{
            paddingBottom: '40px',
            "--swiper-navigation-color": "#38B2AC", // cor de navegação
            "--swiper-pagination-color": "#38B2AC", // cor de paginação
          }}
        >
          {PROJECTS_DATA.map((project) => (
            <SwiperSlide key={project.id}>
              <Box
                bg={bgColor}
                boxShadow={'lg'}
                rounded={'xl'}
                p={6}
                m={4}
                border="1px solid"
                borderColor={borderColor}
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              >
                <Box
                  h={'200px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                  borderRadius={'lg'}
                  overflow={'hidden'}
                >
                  <Image
                    src={project.image}
                    h="100%"
                    w="100%"
                    objectFit={'cover'}
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                  />
                </Box>
                <Stack>
                  <HStack spacing={2}>
                    {project.tags.map((tag) => (
                      <Tag key={tag} colorScheme="teal" size="sm" borderRadius="full" fontWeight="medium">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <Heading fontSize={'xl'} fontWeight="semibold" pt={2} color={useColorModeValue('gray.800', 'white')}>
                    {project.title}
                  </Heading>
                  <Text color={'gray.500'} noOfLines={3} fontSize={'md'}>
                    {project.description}
                  </Text>
                </Stack>
                <Button
                  mt={6}
                  w={'full'}
                  colorScheme={'teal'}
                  bg={'teal.400'}
                  _hover={{ bg: 'teal.500' }}
                  transition="background-color 0.3s ease"
                >
                  Ver Detalhes
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}