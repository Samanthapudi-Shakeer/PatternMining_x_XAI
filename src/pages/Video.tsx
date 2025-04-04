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
        <p className="text-gray-600 leading-relaxed mb-6">
        <iframe width="750" height="315" src="https://www.youtube-nocookie.com/embed/7oGz4PCp9jI?si=SYi5iRhANID0Imr6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p>
      </div>
    </PageLayout>
  );
};

export default Video;
