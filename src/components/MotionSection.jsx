import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

export default function MotionSection({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionBox>
  );
}