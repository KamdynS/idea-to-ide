
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

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
          Join ThoughtWeave Beta
        </h2>
        <p className="text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
          Be among the first to experience how ThoughtWeave transforms development ideas into powerful documentation.
          Help us shape the future of AI-assisted development.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
