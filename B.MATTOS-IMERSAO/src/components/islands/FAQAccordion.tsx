import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1V15M1 8H15"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="divide-y divide-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `faq-answer-${index}`;

        return (
          <div key={index} className="py-5">
            <dt>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={itemId}
                className="flex w-full items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                <span className="font-sans font-semibold text-sm uppercase text-text-main leading-snug group-hover:text-secondary transition-colors duration-150">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 transition-colors duration-150 ${
                    isOpen ? 'text-secondary' : 'text-text-support'
                  }`}
                >
                  <PlusIcon isOpen={isOpen} />
                </span>
              </button>
            </dt>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.dd
                  id={itemId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 pb-1 font-sans text-base text-text-support leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}
