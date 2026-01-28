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
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Container maxW="container.lg" py={20} id="projects">
      <Stack spacing={4} as={Box} textAlign={'center'} mb={10}>
        <Heading fontSize={'3xl'}>Meus Projetos</Heading>
        <Text color={'gray.500'} fontSize={'xl'}>
          Arraste para o lado para conferir meus trabalhos.
        </Text>
      </Stack>

      <Box pb={10}>
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
          }}
          style={{
            paddingBottom: '40px',
            "--swiper-navigation-color": "#4FD1C5",
            "--swiper-pagination-color": "#4FD1C5",
          }}
        >
          {PROJECTS_DATA.map((project) => (
            <SwiperSlide key={project.id}>
              <Box
                bg={bgColor}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                m={2}
                border="1px solid"
                borderColor={borderColor}
              >
                <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                  <Image src={project.image} h="100%" w="100%" objectFit={'cover'} roundedTop={'lg'} />
                </Box>
                <Stack>
                  <HStack spacing={2}>
                    {project.tags.map((tag) => (
                      <Tag key={tag} colorScheme="teal" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <Heading fontSize={'2xl'} pt={2}>
                    {project.title}
                  </Heading>
                  <Text color={'gray.500'} noOfLines={2}>
                    {project.description}
                  </Text>
                </Stack>
                <Button
                  mt={6}
                  w={'full'}
                  colorScheme={'teal'}
                  bg={'teal.400'}
                  _hover={{ bg: 'teal.500' }}
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