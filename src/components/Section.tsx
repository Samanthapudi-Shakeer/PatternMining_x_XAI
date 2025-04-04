import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string | React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, content }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="bg-white shadow-xl p-10 opacity-0 translate-y-6 transition-all duration-700 ease-out w-screen"
    >
      {/* Title & Icon (Centered, 80% width) */}
      <div className="flex items-center space-x-4 mb-6 w-[80%] mx-auto">
        <div className="text-emerald-600 flex-shrink-0">{icon}</div>
        <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
      </div>

      {/* Content (Expands to 80% width) */}
      <div className="prose text-lg text-gray-700 leading-relaxed w-[80%] mx-auto">
        {typeof content === 'string' ? (
          content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))
        ) : (
          content
        )}
      </div>
    </section>
  );
};

export default Section;

