
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Intent",
    description: "Describe what you want to build or the ticket you're working on.",
  },
  {
    number: "02",
    title: "Choose Documentation",
    description: "Select which specialized AI assistant you need for your specific documentation.",
  },
  {
    number: "03",
    title: "Generate & Use",
    description: "Get AI-ready documentation to supercharge your development with tools like Cursor or Cody.",
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
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 hover:border-[#123524]/20 transition-all duration-300">
                <span className="text-4xl font-mono font-bold text-[#123524]/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-mono font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#123524]/20" />
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
