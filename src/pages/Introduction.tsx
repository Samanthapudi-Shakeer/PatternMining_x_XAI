import React from 'react';
import PageLayout from '../components/PageLayout';

const Introduction = () => {
  return (
    <PageLayout
      title="Introduction"
      icon={<div />}
    >
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-10">
          <p className="text-gray-800 text-xl leading-relaxed mb-8">
            <span className="font-bold">Pattern Mining</span> is a crucial technique in data science and machine learning, aimed at discovering hidden patterns, trends, and relationships within large datasets.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mb-8">
            This process is widely used in various fields, including:
            <ul className="list-disc pl-6">
              <li>Market Basket Analysis (e.g., predicting customer purchase behavior)</li>
              <li>Fraud Detection (e.g., identifying suspicious transactions)</li>
              <li>Medical Research (e.g., finding disease correlations)</li>
            </ul>
          </p>
          <p className="text-gray-800 text-xl leading-relaxed">
            Understanding <span className="font-bold">Pattern Mining</span> enables us to extract meaningful insights, enhance decision-making, and optimize business strategies. This introduction will delve into its significance and applications.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Introduction;

