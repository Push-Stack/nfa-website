import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { blurTransition, viewPort } from "../../constants/animations";
import OurExperienceBg from "../../public/static/ourexperience-bg.png";
import Logos from "../../public/static/our-experience.png";

const OurExperience = () => {
  return (
    <motion.section
      className="py-28 flex flex-col items-center gap-10 relative max-w-full overflow-hidden"
      id="our-partners"
      initial={blurTransition.initialState}
      whileInView={blurTransition.viewTransition}
      viewport={viewPort}
    >
      <Image
        src={OurExperienceBg}
        alt="ourexperience-background"
        fill
        className="z-10 object-cover"
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/50" />
      <div className="relative z-20 flex flex-col gap-6 items-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider uppercase ">
          Our <span className="text-secondary ">Experience</span>
        </h1>
        <p className="text-white uppercase text-center text-lg sm:text-2xl tracking-wide ">
          {"Here are a few of the brands that we've worked with:"}
        </p>
      </div>

      <div className="relative px-4  z-20  text-white max-w-full overflow-hidden">
        <Image src={Logos} alt="our-experience" className="object-cover" />
      </div>
    </motion.section>
  );
};

export default OurExperience;
