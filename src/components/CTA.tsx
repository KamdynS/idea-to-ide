
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-[#123524]/5 rounded-2xl p-12 backdrop-blur-sm"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
          Ready to Transform Your Ideas?
        </h2>
        <p className="text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
          Start building your next project with our AI-powered development assistant.
          No more boilerplate code, just pure innovation.
        </p>
        <Button size="lg" className="font-mono">
          Get Started Now
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
