import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ModalSmall({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-hidden z-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-[50vw] mx-auto mb-[3vh] border-2 border-semiSemiGrey rounded-3xl overflow-hidden shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="flex bg-primaryGrey h-[12vh] items-center drop-shadow-none pl-[2vw]">
            <div className="w-[10vw]">
              <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
            </div>
          </div>
          <div className="h-[30vh] mx-auto drop-shadow-none bg-white">
            {children}
          </div>
          <div className="bg-primaryGrey h-[12vh] drop-shadow-none" />
        </div>
      </motion.div>
    </div>
  );
}
