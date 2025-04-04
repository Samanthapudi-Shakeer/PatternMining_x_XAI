import React from 'react';
import { Rocket } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Future = () => {
  return (
    <PageLayout
      title="Future Directions"
      icon={<Rocket />}
    >
      <div className="prose max-w-none">
        <p className="text-gray-600 leading-relaxed mb-6">
          Future research includes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-gray-600 mb-2">Hybrid models combining multiple XAI approaches</li>
          <li className="text-gray-600 mb-2">Causal pattern mining for better explanations</li>
          <li className="text-gray-600 mb-2">Interactive dashboards for pattern visualization</li>
          <li className="text-gray-600 mb-2">Real-time pattern explanation systems</li>
          <li className="text-gray-600">Integration with federated learning</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Future;