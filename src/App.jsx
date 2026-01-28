import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;