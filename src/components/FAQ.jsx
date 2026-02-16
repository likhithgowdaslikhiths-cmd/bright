import { useState, useRef, useEffect } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "How can I apply for admission?",
      answer: "You can contact us directly through our website or visit the school campus to complete the admission process.",
    },
    {
      question: "Can I visit Bright Star Preschool before enrolling?",
      answer: "Yes, absolutely! We encourage parents to schedule a campus visit to explore our classrooms, experience our learning environment, and meet our educators. This helps you feel confident and comfortable before making an admission decision for your child.",
    },
    {
      question: "What are the teacher qualifications and child-to-teacher ratio?",
      answer: "At Bright Star Preschool, our educators are professionally trained in early childhood education and experienced in handling young learners with care and patience. We maintain a low child-to-teacher ratio to ensure individual attention, personalized guidance, and a supportive learning environment for every child.",
    },
    {
      question: "What curriculum do you follow at Bright Star Preschool?",
      answer: "We follow a Montessori-inspired approach that blends hands-on learning with structured, age-appropriate outcomes. Our well-planned framework integrates play materials, guided teaching, structured routines, skill development, creative activities, and teamwork to ensure every day is engaging, joyful, and purposeful for young learners.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      {/* Floating Elements */}
      <span className="absolute top-32 left-12 text-4xl opacity-20 animate-bounce">📚</span>
      <span className="absolute top-48 right-20 text-5xl opacity-20 animate-pulse">💡</span>
      <span className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce-slow">🎈</span>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know before joining our Bright Star family
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" ref={faqRef}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ index, faq, isOpen, onToggle }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1">
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left transition-all duration-300 hover:bg-indigo-50/50"
      >
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
            Q{index + 1}
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{faq.question}</h3>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2">
          <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-8 pt-4">
          <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
