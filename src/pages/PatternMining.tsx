import React from 'react';
import PageLayout from '../components/PageLayout';

const PatternMining = () => {
  return (
    <PageLayout
      title="Pattern Mining Techniques"
      icon={<div />}
    >
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Core Pattern Mining Concepts</h2>
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          Pattern mining is a fundamental data mining paradigm designed to extract significant patterns, associations, correlations, and structures within voluminous datasets. These methodologies play a critical role in knowledge discovery, enabling advanced decision support systems across industries such as finance, healthcare, cybersecurity, and e-commerce.
        </p>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frequent Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Frequent pattern mining aims to discover recurrent itemsets, subsequences, or substructures in data. This technique underpins association rule mining, fraud detection, and bioinformatics applications. It provides crucial insights into market basket analysis, financial risk detection, and inventory optimization.
            </p>
            <h4 className="text-xl font-semibold text-blue-500 mb-2">Apriori Algorithm</h4>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Employs a breadth-first search strategy and iterative level-wise approach to discover frequent itemsets and generate association rules. It utilizes the anti-monotonicity property but suffers from high computational complexity due to candidate generation.
            </p>
            <h4 className="text-xl font-semibold text-blue-500 mb-2">FP-Growth Algorithm</h4>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Eliminates candidate generation by leveraging the compact FP-tree structure, significantly reducing memory overhead and improving computational efficiency, making it well-suited for large datasets.
            </p>
            <h4 className="text-xl font-semibold text-blue-500 mb-2">Closed & Maximal Pattern Mining</h4>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Closed frequent patterns retain maximal information by removing redundant subsets, while maximal patterns represent the largest frequent itemsets without supersets. These techniques optimize rule generation by reducing search space.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Sequential Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Identifies recurring sequential relationships within temporal datasets, crucial for clickstream analysis, genomic sequence discovery, and industrial predictive maintenance.
            </p>
            <h4 className="text-xl font-semibold text-blue-500 mb-2">GSP Algorithm</h4>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Extends frequent itemset mining with a time-ordered constraint-based approach, iteratively expanding sequence candidates while applying minimum support thresholds.
            </p>
            <h4 className="text-xl font-semibold text-blue-500 mb-2">PrefixSpan Algorithm</h4>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Enhances efficiency over GSP through recursive pattern growth, leveraging projected databases to limit candidate sequence expansion and optimize performance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Constraint-Based Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Incorporates domain-specific constraints (such as length, utility, and correlation thresholds) to refine mining results, improving relevance and interpretability in specialized applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Multilevel & Multidimensional Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Multilevel mining extracts patterns at different granularities (e.g., transaction-level vs. category-level), while multidimensional mining uncovers cross-dimensional relationships (e.g., spatial-temporal trends in geospatial analysis).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Rare Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Targets low-support but high-importance patterns, essential for fraud detection, rare disease diagnostics, and fault analysis in complex systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Colossal Pattern Mining</h3>
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              Focuses on detecting exceptionally large, high-dimensional patterns within extensive datasets, critical for genomic research, climatology, and large-scale business analytics.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-blue-700 mt-16 mb-6">Advanced Applications</h2>
        <div className="space-y-6">
          <p className="text-gray-800 text-xl leading-relaxed">
            Advanced pattern mining methodologies are leveraged in diverse domains, yielding significant insights such as:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-gray-800 text-xl">
              <span className="font-semibold">Anomaly Detection:</span> Identifying outliers in financial transactions, cybersecurity logs, and industrial sensors for fraud prevention and threat mitigation.
            </li>
            <li className="text-gray-800 text-xl">
              <span className="font-semibold">Predictive Maintenance:</span> Analyzing sequential sensor patterns to anticipate machinery failures, reducing downtime and optimizing maintenance schedules.
            </li>
            <li className="text-gray-800 text-xl">
              <span className="font-semibold">Customer Behavior Analysis:</span> Leveraging sequential pattern mining for targeted marketing, churn prediction, and personalization in e-commerce.
            </li>
            <li className="text-gray-800 text-xl">
              <span className="font-semibold">Healthcare Analytics:</span> Applying frequent pattern mining to identify disease progression patterns, enhance treatment protocols, and refine precision medicine strategies.
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default PatternMining;

