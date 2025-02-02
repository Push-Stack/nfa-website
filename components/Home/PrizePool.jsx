import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { blurTransition, viewPort } from "../../constants/animations";
import PrizePoolBg from "../../public/static/prizepool-background.png";
import GradientBg from "../../public/static/prizepool-gradient.png";
import PrizePoolCharacter from "../../public/static/prizepool-character.png";

const PrizePool = () => {
  return (
    <motion.section
      className="relative text-white flex items-center justify-center lg:justify-around max-w-full overflow-hidden"
      id="prizepool-section"
      initial={blurTransition.initialState}
      whileInView={blurTransition.viewTransition}
      viewport={viewPort}
    >
      <Image
        src={PrizePoolBg}
        fill
        alt="prizepool-background"
        className="z-10 object-cover"
        priority
      />

      <Image
        src={GradientBg}
        fill
        alt="prizepool-gradient "
        className="z-10 object-cover "
      />

      <div className="px-6  lg:px-6 w-full lg:w-3/5 max-w-2xl mx-auto py-16  flex flex-col gap-4 relative z-20 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary tracking-wider">
          Win the Prize Pool
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl lg:max-w-sm">
            Show off your skills,earn tickets,
            <span className="block">and dominate the leader board</span>
          </h2>
          <h3 className=" text-xl sm:text-2xl text-secondary font-bold lg:max-w-xs uppercase">
            Benefits of the Prize <span className="lg:block">Pool:</span>
          </h3>
          <div className=" text-secondary text-xl sm:text-2xl  lg:max-w-sm">
            <p>1. Skill based winners</p>
            <p>2. Fair chance for all gamers to win</p>
            <p>3. Leaderboard updates in real time</p>
          </div>
          <div className="uppercase flex flex-col gap-2 mt-3 text-xl sm:text-2xl tracking-wider ">
            <p className="bg-secondary font-bold max-w-lg rounded text-black  p-2 ">
              1. The Prize Pool
            </p>
            <p>2. We host it</p>
            <p>3. You get paid</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-2/5 pt-16 z-20 self-end ">
        <Image
          src={PrizePoolCharacter}
          alt="prizepool-character"
          width={578}
          height={661}
        />
      </div>
    </motion.section>
  );
};

export default PrizePool;
