import React from 'react';
import { Code2 } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { CodeBlock, dracula } from 'react-code-blocks';
import dwh_fp from "../images/dwh_fp.png";
import dwh_ap from "../images/dwh_ap.png";
import expl1 from "../images/expl1.png";
import expl2 from "../images/expl2.png";
import expap1 from "../images/expap1.png";
import expap2 from "../images/expap2.png";
import ap_rules from "../images/ap_rules.png";
import fp_rules from "../images/fp_rules.png";

const XAIAlgorithms = () => {
  return (
    <PageLayout
      title="XAI Algorithms"
      icon={<Code2 />}
    >
      <div className="prose max-w-none">
      <h2 className="text-2xl font-bold mt-6"> Understanding Terminology</h2>
       <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600">Support</h3>
        <p className="text-gray-800 text-xl">Measures how frequently an itemset appears in the dataset.</p>
        <p className="text-gray-800 text-xl"><strong>Formula:</strong> Support(A) = (Frequency of A) / (Total Transactions)</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600">Confidence</h3>
        <p className="text-gray-800 text-xl">Indicates the likelihood that a rule holds true.</p>
        <p className="text-gray-800 text-xl"><strong>Formula:</strong> Confidence(A → B) = Support(A ∩ B) / Support(A)</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600">Lift</h3>
        <p className="text-gray-800 text-xl">Measures how much more likely B is given A compared to its independent occurrence.</p>
        <p className="text-gray-800 text-xl"><strong>Formula:</strong> Lift(A → B) = Confidence(A → B) / Support(B)</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600">Conviction</h3>
        <p className="text-gray-800 text-xl">Indicates the degree of implication between A and B.</p>
        <p className="text-gray-800 text-xl"><strong>Formula:</strong> Conviction(A → B) = (1 - Support(B)) / (1 - Confidence(A → B))</p>
      </div>
      <h2 className="text-2xl font-bold mt-6"> Intuition of Code Snippets</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This section presents a detailed explanation and implementation of association rule mining using the Apriori and FP-Growth algorithms, along with SHAP and LIME explanations for model interpretability. Graph visualizations illustrate the discovered rules.
        </p>

        {/* Step 1: Load Sample Transactions */}
        <h2 className="text-xl font-bold mt-6"> Load Sample Transactions</h2>
        <p>The given code sets up a transaction dataset for association rule mining using Apriori and FP-Growth algorithms. It consists of 10 transactions, each listing purchased items like milk, bread, butter, jam, and cheese. The goal is to identify frequently bought item combinations and generate association rules. Total transactions 10 with milk, bread, butter, jam, cheese.</p>
        <CodeBlock
          text={`import pandas as pd
import numpy as np
import itertools
from collections import defaultdict
from sklearn.linear_model import LogisticRegression
from lime.lime_tabular import LimeTabularExplainer
import networkx as nx
import matplotlib.pyplot as plt

transactions = [
    ['milk', 'bread', 'butter'],
    ['milk', 'bread'],
    ['milk', 'butter'],
    ['milk', 'bread', 'butter', 'jam'],
    ['bread', 'butter'],
    ['bread', 'butter', 'jam'],
    ['milk', 'bread', 'butter', 'cheese'],
    ['bread', 'jam'],
    ['milk', 'bread', 'butter'],
    ['milk', 'cheese']
]`}
          language="python"
          theme={dracula}
        />

        {/* Step 2: Apriori Algorithm */}
        <h2 className="text-xl font-bold mt-6"> Apriori Algorithm</h2>
        <p>The function implements the Apriori algorithm to find frequent itemsets and association rules in a transaction dataset based on a given minimum support threshold. It first counts the occurrence of individual items and filters those that meet the support requirement. Then, it iteratively generates larger itemsets by combining frequent ones, checking their occurrences, and removing infrequent sets. This process continues until no more frequent itemsets can be found. The function returns a dictionary of frequent itemsets along with their support values, helping in market basket analysis to identify commonly purchased item combinations. </p>
        <CodeBlock
          text={`min_sup = 0.4
min_conf = 0.8

def get_frequent_itemsets(transactions, min_support):
    item_counts = defaultdict(int)
    total_transactions = len(transactions)
    
    for transaction in transactions:
        for item in transaction:
            item_counts[frozenset([item])] += 1
    
    frequent_itemsets = {item: count/total_transactions for item, count in item_counts.items() if count/total_transactions >= min_support}
    
    k = 2
    current_itemsets = set(frequent_itemsets.keys())
    
    while current_itemsets:
        candidates = set([i.union(j) for i in current_itemsets for j in current_itemsets if len(i.union(j)) == k])
        item_counts = defaultdict(int)
        
        for transaction in transactions:
            transaction_set = frozenset(transaction)
            for candidate in candidates:
                if candidate.issubset(transaction_set):
                    item_counts[candidate] += 1
        
        current_itemsets = {item: count/total_transactions for item, count in item_counts.items() if count/total_transactions >= min_support}
        frequent_itemsets.update(current_itemsets)
        k += 1
    
    return frequent_itemsets`}
          language="python"
          theme={dracula}
        />

        {/* Step 3: FP-Growth Algorithm */}
        <h2 className="text-xl font-bold mt-6"> FP-Growth Algorithm</h2>
        <p>This code builds an FP-Tree to find frequent itemsets and their association rules efficiently. It counts item occurrences, filters out infrequent ones, and stores transactions in a tree structure. Frequent items are sorted and inserted for mining patterns. This approach is faster than Apriori and is useful for market basket analysis.</p>
        <CodeBlock
          text={`class FPTree:
    def __init__(self):
        self.root = {}
    
    def insert_transaction(self, transaction):
        node = self.root
        for item in transaction:
            if item not in node:
                node[item] = {}
            node = node[item]
    
    def mine_patterns(self, min_support, transactions):
        item_counts = defaultdict(int)
        for transaction in transactions:
            for item in transaction:
                item_counts[item] += 1
        item_counts = {k: v for k, v in item_counts.items() if v / len(transactions) >= min_support}
        
        for transaction in transactions:
            filtered_transaction = [item for item in transaction if item in item_counts]
            filtered_transaction.sort(key=lambda item: item_counts[item], reverse=True)
            self.insert_transaction(filtered_transaction)
        
        return item_counts`}
          language="python"
          theme={dracula}
        />

        {/* Step 4: LIME Explanations */}
        <h2 className="text-xl font-bold mt-6">LIME Explanations</h2>
        <CodeBlock
          text={`for i in range(len(X_fp)): 
    exp_fp = explainer_fp.explain_instance(X_fp[i], clf_fp.predict_proba)

    print(f" Explanation for FP-Growth Rule {i+1}:")
    for feature, importance in exp_fp.as_list():
        print(f"   - 🔹 {feature}: {importance:.4f}")

    exp_fp.show_in_notebook()`}
          language="python"
          theme={dracula}
        />

        {/* Step 5: Graph Visualizations */}
        <h2 className="text-xl font-bold mt-6"> Graph Visualizations</h2>
        This code visualizes association rules using graphs. It creates a network graph where nodes represent items and edges show relationships with confidence values. Apriori and FP-Growth rules are plotted using different layouts and colors for better interpretation
        <CodeBlock
          text={`def plot_graph(G, title, node_color="skyblue"):
    plt.figure(figsize=(8, 6))
    pos = nx.circular_layout(G)
    nx.draw(G, pos, with_labels=True, node_color=node_color, edge_color="gray", node_size=2500, font_size=12, font_weight="bold")
    edge_labels = {(u, v): f"{d['weight']*100:.0f}%" for u, v, d in G.edges(data=True)}
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_size=10, font_color="red")
    plt.title(title, fontsize=14, fontweight="bold")
    plt.show()


G_apriori = nx.DiGraph()
for _, row in rules_apriori.iterrows():
    G_apriori.add_edge(tuple(row['antecedents']), tuple(row['consequents']), weight=round(row['confidence'], 2))

plot_graph(G_apriori, " Apriori Association Rules (Circular Layout)", node_color="lightblue")

G_fp = nx.DiGraph()
for antecedent, (consequent, conf) in rules_fp.items():
    G_fp.add_edge(tuple(antecedent), tuple(consequent), weight=round(conf, 2))

plot_graph(G_fp, "FP-Growth Association Rules (Spring Layout)", node_color="orange")`}
          language="python"
          theme={dracula}
        />
        <h2 className="text-xl font-bold mt-6">Apriori Generated Frequent Itemsets and Association Rules</h2>
        <img src = {ap_rules} />
        <h2> </h2>
	<h2 className="text-xl font-bold mt-6">FP Growth Generated Frequent Itemsets and Association Rules</h2>
        <img src = {fp_rules} />
        <h2> </h2>
        <h2 className="text-xl font-bold mt-6">Apriori Generated Association Rules Explanation with LIME</h2>
        <img src = {expap1} />
        <img src ={expap2}/>
        <h2> </h2>
        <h2 className="text-xl font-bold mt-6">FP Growth Generated Association Rules Explanation with LIME</h2>
        <img src = {expl1} />
        <img src ={expl2}/>
        <h2> </h2>
        <img src= {dwh_fp} alt="FP-Growth Visualization" />
        <img src= {dwh_ap} alt="Apriori-Growth Visualization" />
      </div>
    </PageLayout>
  );
};

export default XAIAlgorithms;

