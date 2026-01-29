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
    title: 'E-commerce App',
    description: 'Um site de vendas completo com carrinho de compras e integração com API.',
    tags: ['React', 'Chakra UI', 'Vite'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Dashboard de Finanças',
    description: 'Interface administrativa para controle financeiro com gráficos interativos.',
    tags: ['React', 'Chart.js', 'Context API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'Plataforma para compartilhamento de fotos e mensagens em tempo real.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
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
          Explore alguns dos meus projetos recentes. Deslize para ver mais.
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