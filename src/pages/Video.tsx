import React from 'react';
import { Video as VideoIcon } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Video = () => {
  return (
    <PageLayout
      title="Explanation Video"
      icon={<VideoIcon />}
    >
      <div className="prose max-w-none">
                <p className="text-gray-700">
          📖 Read the detailed blog on Medium:{" "}
          <a
            href="https://medium.com/@shakeer.samanthapudi/the-intersection-of-pattern-mining-explainable-ai-ff11e9eb2608"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            The Intersection of Pattern Mining & Explainable AI
          </a>
        </p>
        <p> ...........................................................................................</p>
        <p className="text-gray-600 leading-relaxed mb-6"> Blog Explanation Youtube Video Embedding - Shakeer
<iframe width="750" height="315" src="https://www.youtube.com/embed/2JT07Ur2p3Q?si=xUqx-GCQNbTqR4y9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p>
        <p> ...........................................................................................</p>
        <p className="text-gray-600 leading-relaxed mb-6"> Web Page Explanation Youtube Video Embedding - Shakeer
<iframe width="750" height="315" src="https://www.youtube.com/embed/W4R1nVyo5Rg?si=lvWoMlucsD2KISBW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p>
      </div>
    </PageLayout>
  );
};

export default Video;
