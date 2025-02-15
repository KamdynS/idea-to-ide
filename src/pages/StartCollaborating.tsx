
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Code, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const patterns = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "New Project Setup",
    description: "Create comprehensive documentation for your new project from scratch.",
    details: (
      <div className="space-y-2">
        <p className="font-medium">Perfect for starting fresh! This pattern will help you:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Define project architecture and tech stack</li>
          <li>Create initial documentation structure</li>
          <li>Set up Jira project templates</li>
          <li>Define team roles and responsibilities</li>
          <li>Establish documentation standards</li>
        </ul>
        <p className="pt-2 text-sm text-muted-foreground">Coming soon in beta release</p>
      </div>
    ),
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Feature Addition",
    description: "Document new features for your existing project with full context.",
    details: (
      <div className="space-y-2">
        <p className="font-medium">Add new features with full context! This pattern includes:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Integration with existing codebase</li>
          <li>Impact analysis on current features</li>
          <li>Technical requirements breakdown</li>
          <li>Automatic Jira epic creation</li>
          <li>PM-friendly feature summaries</li>
        </ul>
        <p className="pt-2 text-sm text-muted-foreground">Coming soon in beta release</p>
      </div>
    ),
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Single Ticket",
    description: "Generate a well-structured Jira ticket with perfect alignment between PM and dev needs.",
    details: (
      <div className="space-y-2">
        <p className="font-medium">Create perfectly structured tickets! You'll get:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Business context translation</li>
          <li>Technical requirement breakdown</li>
          <li>Acceptance criteria generation</li>
          <li>Story point estimation help</li>
          <li>Direct Jira synchronization</li>
        </ul>
        <p className="pt-2 text-sm text-muted-foreground">Coming soon in beta release</p>
      </div>
    ),
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
              <Popover key={index}>
                <PopoverTrigger asChild>
                  <motion.div
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
                </PopoverTrigger>
                <PopoverContent className="w-96 bg-white p-6 shadow-xl border border-[#123524]/10">
                  <div>
                    <h4 className="text-lg font-mono font-semibold mb-4">{pattern.title}</h4>
                    {pattern.details}
                  </div>
                </PopoverContent>
              </Popover>
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
