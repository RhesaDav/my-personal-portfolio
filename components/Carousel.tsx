import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ images }:{images: string[]}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <AnimatePresence initial={false} custom={activeIndex}>
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Project Image ${activeIndex + 1}`}
          className="w-full h-64 object-cover rounded-lg m-4 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute top-1/2 left-0 w-full flex justify-between">
        <button
          className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 text-white px-3 py-1 rounded-md ml-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
