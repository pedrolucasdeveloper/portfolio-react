import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MotionSection from './components/MotionSection';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Navbar />
      <Box pt={16}>
        <MotionSection><Hero /></MotionSection>
        <MotionSection><About /></MotionSection>
        <MotionSection><Skills /></MotionSection>
        <MotionSection><Projects /></MotionSection>
        <MotionSection><Contact /></MotionSection>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;