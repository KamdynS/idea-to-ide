
import { motion } from "framer-motion";
import { Terminal, FileCode, Workflow, Zap } from "lucide-react";

const features = [
  {
    icon: <FileCode className="h-10 w-10" />,
    title: "Contextual File Generation",
    description: "Automatically generate all necessary project files with consistent formatting and structure.",
  },
  {
    icon: <Terminal className="h-10 w-10" />,
    title: "IDE Integration",
    description: "Seamlessly works with your favorite IDE, providing a familiar development environment.",
  },
  {
    icon: <Workflow className="h-10 w-10" />,
    title: "Project Scaffolding",
    description: "Quick setup of project architecture with best practices and modern development patterns.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Instant Development",
    description: "Start coding immediately with pre-configured development environments and tooling.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">Features</h2>
          <p className="text-muted-foreground font-mono">
            Everything you need to transform ideas into production-ready code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-black/5 hover:border-black/10 transition-all duration-300"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-mono font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-mono text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
