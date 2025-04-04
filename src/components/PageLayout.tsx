import React, { useEffect, useRef } from 'react';

interface PageLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, icon, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-8 max-w-full">
      {/* Title & Icon */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-emerald-900 mb-4">{title}</h1>
        <div className="flex justify-center">{icon}</div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="bg-white w-full max-w-full rounded-2xl shadow-lg p-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;

