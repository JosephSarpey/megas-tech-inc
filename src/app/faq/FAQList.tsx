"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: "general" | "services" | "pricing" | "support";
}

interface FAQListProps {
  faqs: FAQItem[];
  categories: Array<{ id: string; name: string }>;
}

export default function FAQList({ faqs, categories }: FAQListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory,
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-accent text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] border-accent"
                : "bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white border-transparent"
            } border`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFaqs.map((faq) => {
            const originalIndex = faqs.findIndex(
              (f) => f.question === faq.question,
            );
            const isOpen = openItems.includes(originalIndex);

            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`bg-[#121214] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-accent/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleItem(originalIndex)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none group"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold tracking-tight transition-colors duration-200 ${isOpen ? "text-accent" : "text-white group-hover:text-accent/80"}`}
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`ml-6 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent text-white" : "bg-white/5 text-accent group-hover:bg-accent/10"}`}
                  >
                    {isOpen ? (
                      <FiMinus className="w-5 h-5" />
                    ) : (
                      <FiPlus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-[#A1A1AA] leading-relaxed text-base md:text-lg border-t border-white/5 mt-2 pt-6">
                        {typeof faq.answer === "string" ? (
                          <p>{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
