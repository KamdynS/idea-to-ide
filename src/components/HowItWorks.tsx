
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Your Project",
    description: "Describe your project requirements and architecture needs.",
  },
  {
    number: "02",
    title: "Generate Files",
    description: "Our AI generates all necessary project files with proper structure.",
  },
  {
    number: "03",
    title: "Customize & Deploy",
    description: "Fine-tune the generated code and deploy your project.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground font-mono">
            Simple steps to transform your idea into production-ready code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-black/5 hover:border-black/10 transition-all duration-300">
                <span className="text-4xl font-mono font-bold text-black/10 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-mono font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-black/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
