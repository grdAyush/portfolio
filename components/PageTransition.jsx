"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
          }}
          className="fixed top-0 left-0 w-screen h-screen bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
