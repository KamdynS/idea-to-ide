
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ViewIntegration = () => {
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
              ThoughtWeave + Jira Integration
            </h1>
            <p className="text-xl text-muted-foreground font-mono">
              Seamlessly connect your product discussions with Jira workflows
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 shadow-lg"
            >
              <h2 className="text-2xl font-mono font-semibold mb-4">How It Works</h2>
              <div className="space-y-4 text-muted-foreground font-mono">
                <p>1. Connect your Jira workspace through our secure OAuth integration</p>
                <p>2. Select your project and customize ticket templates</p>
                <p>3. ThoughtWeave automatically creates perfectly formatted tickets</p>
                <p>4. Each ticket includes both business context and technical requirements</p>
                <p>5. Updates sync bidirectionally between ThoughtWeave and Jira</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-white/50 backdrop-blur-sm border border-[#123524]/10 shadow-lg"
            >
              <h2 className="text-2xl font-mono font-semibold mb-4">Key Features</h2>
              <div className="space-y-4 text-muted-foreground font-mono">
                <p>• Automatic ticket creation with proper Jira formatting</p>
                <p>• Smart field mapping between ThoughtWeave and Jira</p>
                <p>• Custom ticket templates for different project needs</p>
                <p>• Bidirectional sync for real-time updates</p>
                <p>• Role-based views that maintain context for all team members</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center space-x-4"
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

export default ViewIntegration;
