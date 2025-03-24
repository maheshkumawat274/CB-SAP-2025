import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the CareerBanao Scholarship Admission Program?",
    answer: "Our scholarship program offers financial assistance to students who take admission through CareerBanao.",
  },
  {
    question: "Am I eligible for the scholarship?",
    answer: "Yes, if you take admission through CareerBanao in 2025, you're eligible for the scholarship.",
  },
  {
    question: "How much is the scholarship worth?",
    answer: "The scholarship amount is up to ₹10,000.",
  },
  {
    question: "Do I need to apply separately for the scholarship?",
    answer: "No, simply take admission through CareerBanao, and our team will guide you through the scholarship process.",
  },
  {
    question: "Are there any specific deadlines for the scholarship?",
    answer: "No, there's no specific deadline. However, we recommend taking admission early to avail the scholarship.",
  },
  {
    question: "How will I receive the scholarship amount?",
    answer: "The scholarship will be directly credited to your bank account.",
  },
  {
    question: "What documents do I need to provide for the scholarship?",
    answer: "Please provide your admission confirmation letter, fee receipt, and bank account details.",
  },
  {
    question: "How will I be informed about the scholarship status?",
    answer: "We'll notify you via email and SMS about the scholarship.",
  },
  {
    question: "Is there a limit to the number of scholarships available?",
    answer: "Yes, the scholarship is based on first-come, first-served. Limited scholarships are available, so we encourage you to take admission early.",
  },
  {
    question: "Who can I contact for more information?",
    answer: "For any queries or concerns, please reach out to us at: Email: cbsap@careerbanao.org | Phone: 8750092628",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl sm:max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <button
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-purple-700 text-white text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 font-semibold bg-gray-100 text-gray-800"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
