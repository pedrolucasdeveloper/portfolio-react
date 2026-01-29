import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion.create(Box);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MotionSection({ children, as = 'section', ...props }) {
  const reduce = useReducedMotion();

  if (reduce) return <Box as={as} {...props}>{children}</Box>;

  return (
    <MotionBox
      as={as}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUpVariant}
      {...props}
    >
      {children}
    </MotionBox>
  );
}