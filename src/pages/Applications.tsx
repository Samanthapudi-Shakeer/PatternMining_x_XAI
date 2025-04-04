import React from 'react';
import PageLayout from '../components/PageLayout';

const Applications = () => {
  return (
    <PageLayout
      title="Real-World Applications"
      icon={<div />}
    >
      <div className="prose max-w-none">
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          XAI and pattern mining are transforming various industries through practical applications that deliver tangible benefits.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Healthcare</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Disease Pattern Detection:</span> Analyzing patient records to identify early 
                warning signs of diseases like diabetes or heart conditions
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Drug Discovery:</span> Understanding molecular patterns to predict drug 
                effectiveness and potential side effects
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Treatment Planning:</span> Optimizing treatment protocols based on patient 
                response patterns
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Finance</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Fraud Detection:</span> Identifying suspicious transaction patterns in real-time
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Risk Assessment:</span> Evaluating credit applications with transparent reasoning
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Market Analysis:</span> Discovering trading patterns for investment strategies
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Manufacturing</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Quality Control:</span> Detecting defect patterns in production lines
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Predictive Maintenance:</span> Identifying machinery failure patterns before they occur
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Supply Chain Optimization:</span> Understanding demand patterns for better inventory management
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Retail</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Customer Segmentation:</span> Understanding shopping patterns for personalized marketing
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Inventory Management:</span> Predicting stock requirements based on seasonal patterns
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Store Layout Optimization:</span> Analyzing customer movement patterns for better product placement
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Cybersecurity</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Threat Detection:</span> Identifying patterns of cyber attacks and vulnerabilities
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">Network Security:</span> Analyzing traffic patterns to detect anomalies
              </li>
              <li className="text-gray-800 text-xl">
                <span className="font-semibold">User Behavior Analysis:</span> Understanding normal vs. suspicious user activity patterns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Applications;