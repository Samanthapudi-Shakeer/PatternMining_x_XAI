import React from 'react';
import PageLayout from '../components/PageLayout';

const XAITechniques = () => {
  return (
    <PageLayout
      title="XAI Techniques"
      icon={<div />}
    >
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Explainable AI (XAI)?</h2>
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          As AI systems are increasingly deployed in critical applications such as healthcare, finance, and autonomous systems, 
          understanding their decision-making processes becomes essential. Explainable AI (XAI) ensures that AI-driven decisions 
          are transparent, interpretable, and justifiable. Lack of explainability can lead to distrust, ethical concerns, 
          and regulatory challenges.
        </p>
        
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Include XAI in Pattern Mining?</h2>
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          Pattern mining, which involves identifying hidden structures and correlations within data, often leverages complex AI models. 
          Integrating XAI into pattern mining allows for:
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li className="text-gray-800 text-xl"><strong>Trustworthy Insights:</strong> Ensures detected patterns are meaningful and not spurious correlations.</li>
          <li className="text-gray-800 text-xl"><strong>Bias Detection:</strong> Highlights potential biases in mined patterns to improve fairness.</li>
          <li className="text-gray-800 text-xl"><strong>Human-AI Collaboration:</strong> Provides domain experts with interpretable insights to validate AI findings.</li>
        </ul>
        
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Measures of Explainability</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li className="text-gray-800 text-xl"><strong>Transparency:</strong> How openly an AI system operates and shares its logic.</li>
          <li className="text-gray-800 text-xl"><strong>Interpretability:</strong> The degree to which a human can understand an AI model’s predictions.</li>
          <li className="text-gray-800 text-xl"><strong>Fidelity:</strong> How accurately an explanation represents the true model behavior.</li>
          <li className="text-gray-800 text-xl"><strong>Actionability:</strong> Whether explanations provide meaningful insights to end-users.</li>
          <li className="text-gray-800 text-xl"><strong>Robustness:</strong> The stability of explanations under slight variations in input.</li>
        </ul>
        
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Key XAI Techniques</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">LIME (Local Interpretable Model-agnostic Explanations)</h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              LIME generates local approximations of complex models by perturbing input samples and training an interpretable model 
              (such as linear regression) on the generated dataset. It helps explain why a model made a specific decision by 
              creating a simpler, interpretable surrogate model that mimics the original model's behavior in a local region. 
              LIME is widely used in text classification, image recognition, and medical diagnosis applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">SHAP (SHapley Additive exPlanations)</h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              SHAP leverages cooperative game theory to assign contribution values to each feature, providing global and local 
              interpretability. It computes feature importance by evaluating all possible feature combinations and their impact 
              on predictions. SHAP ensures fairness in AI models by clearly attributing credit to each feature, making it an 
              essential tool in finance, healthcare, and automated decision-making systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Counterfactual Explanations</h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              These explanations identify minimal changes required in input features to achieve a different model outcome. 
              Counterfactuals are particularly useful for fairness analysis and decision support in sensitive applications 
              like credit scoring and hiring.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Feature Attribution Methods</h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              These methods, including Integrated Gradients and Grad-CAM, assess the impact of input features on predictions. 
              They are crucial in deep learning applications such as image classification and NLP, ensuring model focus aligns 
              with human intuition.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Rule Extraction</h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              Rule extraction techniques transform complex model behaviors into symbolic, human-readable rules. 
              Decision trees and fuzzy logic-based approaches allow domain experts to verify model rationale.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-blue-700 mt-12">Presentation</h2>
        <p className="text-gray-800 text-xl leading-relaxed">
          Explore our detailed presentation on Pattern Mining with XAI here:
          <iframe src="https://pattern-mining-with-xai.tiiny.site" width="750" height="500" allowfullscreen></iframe>
          <a href="https://pattern-mining-with-xai.tiiny.site/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            Open : Pattern Mining with XAI Presentation
          </a>
        </p>
      </div>
    </PageLayout>
  );
};

export default XAITechniques;

