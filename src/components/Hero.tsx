
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-black/5 text-sm font-mono mb-4 inline-block">
            Bridging Ideas and IDEs
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-mono font-bold leading-tight"
        >
          Transform Your Ideas Into
          <br />
          <span className="text-primary">Production-Ready Code</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto"
        >
          Generate all the necessary contextual files for your project in a consistent format.
          From concept to codebase, seamlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button size="lg" className="font-mono">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="font-mono">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
