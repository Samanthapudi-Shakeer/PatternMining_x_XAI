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
        <p> .......................</p>
        <p className="text-gray-600 leading-relaxed mb-6">
          <iframe
            width="750"
            height="315"
            src="https://www.youtube-nocookie.com/embed/7oGz4PCp9jI?si=SYi5iRhANID0Imr6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
      </div>
    </PageLayout>
  );
};

export default Video;
