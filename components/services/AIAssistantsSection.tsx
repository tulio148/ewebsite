"use client";
import { motion, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";
import AnimatedHeading from "../AnimatedHeading";
import { Icon } from "../Icon";
import {
  faClock,
  faRobot,
  faMoneyBillWave,
  faUsers,
  faUserShield,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedSubtitle from "../AnimatedSubtitle";
import { servicesSubtitles } from "@/lib/subtitles";
import { newHeadings } from "@/lib/headings";
interface AIAssistantExample {
  title: string;
  description: string;
  image: string;
  messages?: {
    sender: "ai" | "user";
    content: ReactNode;
  }[];
}

const assistantBenefits = [
  {
    icon: { icon: faClock },
    title: "24/7 Availability",
    description:
      "Your AI assistants never sleep, ensuring your customers and team get help whenever they need it.",
  },
  {
    icon: { icon: faMoneyBillWave },
    title: "Cost-Effective",
    description:
      "Reduce staffing costs while increasing capacity to handle inquiries and tasks without adding headcount.",
  },
  {
    icon: { icon: faRobot },
    title: "Consistent Quality",
    description:
      "Deliver the same high-quality experience every time, without human fatigue or mood variations.",
  },
  {
    icon: { icon: faUsers },
    title: "Scalable Support",
    description:
      "Handle unlimited concurrent conversations, easily scaling during busy periods without additional resources.",
  },
  {
    icon: { icon: faUserShield },
    title: "Human in the Loop",
    description:
      "Seamlessly escalate complex issues to human experts when needed, combining AI efficiency with human expertise and oversight.",
  },
  {
    icon: { icon: faDatabase },
    title: "Knowledge Base Integration",
    description:
      "Connect your AI assistants to your company's knowledge base for accurate, up-to-date information and consistent messaging.",
  },
];
const aiAssistants: AIAssistantExample[] = [
  {
    title: "AI Sales Assistant",
    description:
      "Never miss a lead. AI handles inquiries, books meetings, and follows up 24/7.",
    image: "/ai-sales-assistant.jpg",
    messages: [
      {
        sender: "user",
        content: "How much does your standard package cost?",
      },
      {
        sender: "ai",
        content:
          "Our standard package starts at $1,500. We have availability on Tuesday at 2 PM or Thursday at 10 AM for a obligation free consultation. Would either of those work for you?",
      },
      { sender: "user", content: "Thursday 10 AM." },
      {
        sender: "ai",
        content:
          "I've scheduled you for Thursday at 10 AM. You'll receive a confirmation email with meeting details. Let me know if you need to make any changes.",
      },
    ],
  },
  {
    title: "AI Customer Support Assistant",
    description:
      "Automate FAQs, resolve issues instantly, and keep customers happy—without extra staff.",
    image: "/ai-support-assistant.jpg",
    messages: [
      { sender: "user", content: "I need to change my appointment." },
      {
        sender: "ai",
        content: "No problem! What date would you prefer to reschedule to?",
      },
      { sender: "user", content: "Next Tuesday. Morning preferable." },
      {
        sender: "ai",
        content:
          "We have an opening next Tuesday at 9:30 AM. Would that work for you?",
      },
      { sender: "user", content: "Yes, that works." },
      {
        sender: "ai",
        content:
          "Your appointment has been rescheduled to Tuesday at 9:30 AM. A confirmation email will be sent shortly. Reference number: APT-29871.",
      },
    ],
  },
  {
    title: "Social Media AI Assistant",
    description:
      "Keep your social presence active with AI-generated posts, responses, and trend analysis.",
    image: "/social-media-assistant.jpg",
    messages: [
      {
        sender: "user",
        content: "Can you show me our content calendar for this week?",
      },
      {
        sender: "ai",
        content: (
          <>
            Here&apos;s your content calendar for this week:
            <br />
            <br />
            Monday: Facebook post about new product features
            <br />
            Tuesday: Twitter thread on industry trends
            <br />
            Wednesday: Instagram story highlighting customer testimonials
            <br />
            Thursday: LinkedIn article on company news
            <br />
            Friday: TikTok video showcasing company culture
            <br />
            <br /> Would you like to make any changes?
          </>
        ),
      },
      {
        sender: "user",
        content:
          "Yes, add a LinkedIn post for Thursday about our upcoming event.",
      },
      {
        sender: "ai",
        content:
          "I've added the event post to Thursday's schedule. Let me know if you need anything else!",
      },
    ],
  },
  {
    title: "Operations AI Assistant",
    description:
      "Make internal processes more efficient, manage resources, and optimize team workflows automatically.",
    image: "/operations-assistant.jpg",
    messages: [
      {
        sender: "user",
        content: "Schedule a marketing team meeting for this Friday at 10 AM.",
      },
      {
        sender: "ai",
        content:
          "I've scheduled the meeting for next Friday at 10 AM and added it to all employees' calendars. Is there anything else you'd like me to do?",
      },
      {
        sender: "user",
        content: "Send a summary of current project progress.",
      },

      {
        sender: "ai",
        content:
          "I've sent the summary of project progress to your email. If you need anything else or would like to send reminders for the upcoming meeting, just let me know!",
      },
    ],
  },
];
export function AIAssistantsSection() {
  const aiAssistantsSectionRef = useRef(null);

  const { scrollYProgress: aiAssistantsScrollProgress } = useScroll({
    target: aiAssistantsSectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="max-w-7xl mx-auto px-8" ref={aiAssistantsSectionRef}>
      <div className="mb-16">
        <AnimatedHeading
          scrollYProgress={aiAssistantsScrollProgress}
          heading={newHeadings.aiBusinessAssistants}
          className="mb-4"
        />
        <AnimatedSubtitle
          scrollYProgress={aiAssistantsScrollProgress}
          subtitle={servicesSubtitles.aiAssistants}
        />
      </div>

      {/* AI Assistant Benefits */}
      <div className="mb-16">
        <motion.h3
          className="text-3xl font-medium underline decoration-1 decoration-primary/80 mb-8 text-center text-primary tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose AI Assistants?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assistantBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4 text-primary inline-block bg-primary/10 p-4 rounded-full">
                <Icon icon={benefit.icon.icon} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-primary tracking-wider">
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-md tracking-wider">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Human in the Loop Highlight */}
      <motion.div
        className="mb-16 bg-gradient-to-r from-primary/10 to-accent p-8 rounded"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 text-center mb-6 md:mb-0">
            <div className="text-6xl text-primary inline-block p-4">
              <Icon icon={faUserShield} />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-primary tracking-wider">
              The Perfect Balance: AI + Human Expertise
            </h3>
            <p className="text-gray-700 text-lg mb-4 tracking-wider text-justify ">
              Our AI assistants are designed to handle routine inquiries and
              tasks automatically, but we understand that some situations
              require a human touch. That&apos;s why we offer human-in-the-loop
              systems that provide the perfect balance.
            </p>
            <ul className="list-disc text-lg pl-5 space-y-2 text-gray-700 tracking-wider text-justify">
              <li>
                AI handles 80-90% of routine inquiries without human
                intervention
              </li>
              <li>
                Complex or sensitive issues are seamlessly escalated to human
                experts
              </li>
              <li>
                Humans can monitor and intervene in AI conversations when needed
              </li>
              <li>
                AI continuously learns from human interventions to improve over
                time
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Knowledge Base Integration */}
      <motion.div
        className="mb-16 bg-gradient-to-r from-accent to-primary/10 p-8 rounded"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center ">
          <div className="md:w-1/3 text-center mb-6 md:mb-0 md:order-0 md:order-1">
            <div className="text-6xl text-primary inline-block p-4">
              <Icon icon={faDatabase} />
            </div>
          </div>{" "}
          <div className="md:w-2/3 md:order-1 md:order-0">
            <h3 className="text-2xl font-bold mb-4 text-primary tracking-wider">
              Powered by Your Knowledge Base
            </h3>
            <p className="text-gray-700 text-lg mb-4 tracking-wider">
              Our AI assistants integrate seamlessly with your existing
              knowledge base, ensuring they provide accurate, consistent, and
              up-to-date information specific to your business.
            </p>
            <ul className="list-disc text-lg pl-5 space-y-2 text-gray-700 tracking-wider">
              <li>
                Connect to internal documentation, FAQs, and product information
              </li>
              <li>Automatic updates when your knowledge base changes</li>
              <li>Cite sources to build trust and transparency</li>
              <li>Identify knowledge gaps to improve your documentation</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* AI Assistant Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {aiAssistants.map((assistant, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-primary font-bold mb-4">
              {assistant.title}
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              {assistant.description}
            </p>

            {/* iPhone-style chat interface */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Chat header */}
              <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="ml-3">
                  <p className="font-medium text-sm">AI Assistant</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="bg-[#F5F5F5] p-4 space-y-2 min-h-[220px]">
                {assistant.messages?.map((message, msgIndex) => (
                  <div
                    key={msgIndex}
                    className={`flex ${
                      message.sender === "ai" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                        message.sender === "ai"
                          ? "bg-white text-gray-800 rounded-tl-sm"
                          : "bg-primary text-white rounded-tr-sm"
                      } shadow-sm`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-[10px] mt-1 text-right ${
                          message.sender === "ai"
                            ? "text-gray-400"
                            : "text-white/70"
                        }`}
                      >
                        {message.sender === "ai" ? "Just now" : "1 min ago"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat input */}
              <div className="bg-white p-3 border-t border-gray-200 flex items-center">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                  Type a message...
                </div>
                <div className="ml-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center p-8 bg-primary rounded-lg text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4 tracking-wider">
          Ready to transform your business with AI?
        </h3>
        <p className="max-w-2xl mx-auto mb-6 tracking-wider">
          Our AI assistants can be customized for your specific industry and
          business needs, helping you save time, reduce costs, and deliver
          exceptional experiences.
        </p>
        <div className="bg-white text-primary font-bold py-3 px-8 rounded-full tracking-wider shadow-lg hover:shadow-xl transition-all">
          Get Started
        </div>
      </motion.div>
    </div>
  );
}
