
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Code, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const patterns = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "New Project Setup",
    description: "Create comprehensive documentation for your new project from scratch.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Feature Addition",
    description: "Document new features for your existing project with full context.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Single Ticket",
    description: "Generate a well-structured Jira ticket with perfect alignment between PM and dev needs.",
  },
];

const StartCollaborating = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#123524]/5 to-gray-50">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-mono font-bold mb-4">
              Choose Your Documentation Pattern
            </h1>
            <p className="text-xl text-muted-foreground font-mono">
              Select the pattern that best matches your current needs
            </p>
          </motion.div>

          <div className="space-y-6">
            {patterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 hover:border-[#123524]/20 transition-all duration-300 shadow-lg group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="text-[#123524] p-3 bg-[#123524]/5 rounded-lg group-hover:bg-[#123524]/10 transition-colors">
                    {pattern.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-mono font-semibold mb-2">{pattern.title}</h3>
                    <p className="text-muted-foreground font-mono">{pattern.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#123524]/20 group-hover:text-[#123524]/40 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link to="/">
              <Button variant="outline" className="font-mono">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartCollaborating;
