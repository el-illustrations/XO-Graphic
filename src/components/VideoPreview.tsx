import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPreviewProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ src, poster, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        muted
        loop
      />
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-lg"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="w-12 h-12 text-white" />
        ) : (
          <Play className="w-12 h-12 text-white" />
        )}
      </div>
    </div>
  );
};

export default VideoPreview;