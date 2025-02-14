
import { motion } from "framer-motion";
import { FileCode, GitBranch, MessageSquare, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "Unified Communication",
    description: "Bridge the gap between product vision and engineering implementation through clear, context-rich documentation.",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Natural Language to Tickets",
    description: "Convert product discussions into well-structured Jira tickets that maintain business context while providing technical clarity.",
  },
  {
    icon: <GitBranch className="h-10 w-10" />,
    title: "Seamless Jira Integration",
    description: "Automatically create and update Jira tickets that speak both PM and engineering languages.",
  },
  {
    icon: <FileCode className="h-10 w-10" />,
    title: "Role-Based Views",
    description: "Get documentation tailored to your role - business outcomes for PMs, technical specs for engineers.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-[#123524]/5">
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
            Transform how your product and engineering teams collaborate
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
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 hover:border-[#123524]/20 transition-all duration-300"
            >
              <div className="mb-4 text-[#123524]">{feature.icon}</div>
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
