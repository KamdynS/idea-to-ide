
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Context",
    description: "Describe your project, feature, or task in natural language - whether you're starting fresh or adding to existing work.",
  },
  {
    number: "02",
    title: "Choose Your Path",
    description: "Select your documentation pattern: new project setup, feature addition, or single ticket creation.",
  },
  {
    number: "03",
    title: "Review Project Context",
    description: "ThoughtWeave analyzes your codebase and existing documentation to understand the technical landscape.",
  },
  {
    number: "04",
    title: "Get Role-Perfect Docs",
    description: "Receive documentation tailored to your role - business outcomes for PMs, technical specs for engineers.",
  },
  {
    number: "05",
    title: "Sync with your team",
    description: "Watch as your conversation transforms into well-structured documentation that both teams understand.",
  }
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
          className="text-center mb-24"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground font-mono">
            From conversation to collaboration in five simple steps
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 === 0 ? 'lg:ml-0 lg:mr-auto' : 'lg:ml-auto lg:mr-0'} lg:w-2/3`}
            >
              <div className="p-8 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 hover:border-[#123524]/20 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-mono font-bold text-[#123524]/20 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-mono font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground font-mono text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <ArrowDown className="w-8 h-8 text-[#123524]/20" />
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
