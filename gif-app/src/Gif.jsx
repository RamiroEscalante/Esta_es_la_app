
import { delay } from "motion";
import { motion, useInView } from "motion/react"
import { useRef } from "react";

const variants = {
    inicial: {
      opacity: 0, scale: 0
    },
    animacion:({index}) => ({
      opacity: 1, scale: 1, transition: {
        duration: 1,
        delay: index * 1
      }
    })
}

export const Gif = ({gif, index}) => {

  const ref = useRef(null)
  const estaVitso = useInView(ref, {
    once: true
  })
  
  return (
    <>
      <motion.img 
      drag
      ref={ref}
      initial="inicial"
      animate={estaVitso ? "animacion" : "" }
      variants={variants}
      custom={{index}}
      whileHover={{
        scale: 1.1
      }}
      className="gif" 
      src={gif.images.original.url} 
      alt={gif.title} 
      />

    </>
  );
};
