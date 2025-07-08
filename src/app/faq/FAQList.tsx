'use client';

import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: 'general' | 'services' | 'pricing' | 'support';
}

interface FAQListProps {
  faqs: FAQItem[];
  categories: Array<{ id: string; name: string }>;
}

export default function FAQList({ faqs, categories }: FAQListProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            data-category={category.id}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-accent/10 border border-white/10 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={(e) => {
              const category = e.currentTarget.dataset.category || 'all';
              const faqItems = document.querySelectorAll('.faq-item');
              
              faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                  item.classList.remove('hidden');
                } else {
                  item.classList.add('hidden');
                }
              });
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="faq-item bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-accent/30"
            data-category={faq.category}
          >
            <button 
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={(e) => {
                const content = e.currentTarget.nextElementSibling as HTMLElement;
                const icon = e.currentTarget.querySelector('svg');
                
                if (content.style.maxHeight) {
                  content.style.maxHeight = '';
                  icon?.classList.remove('transform', 'rotate-180');
                } else {
                  content.style.maxHeight = content.scrollHeight + 'px';
                  icon?.classList.add('transform', 'rotate-180');
                }
              }}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <FaChevronDown className="w-5 h-5 text-accent transition-transform duration-200" />
            </button>
            <div 
              className="px-6 pb-0 max-h-0 overflow-hidden transition-all duration-300"
              style={{ maxHeight: '0' }}
            >
              <div className="pb-6 text-gray-300">
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
