
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
          <span className="px-4 py-2 rounded-full bg-[#123524]/5 text-sm font-mono mb-4 inline-block">
            Weaving Ideas into Development Reality
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-mono font-bold leading-tight"
        >
          Transform Your Thoughts Into
          <br />
          <span className="text-primary">Seamless Documentation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto"
        >
          ThoughtWeave intertwines your development ideas into comprehensive documentation 
          that AI coding assistants understand perfectly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button size="lg" className="font-mono">
            Start Weaving
          </Button>
          <Button size="lg" variant="outline" className="font-mono">
            See Examples
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
