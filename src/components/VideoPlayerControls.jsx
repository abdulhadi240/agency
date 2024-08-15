import React from "react";
import PlayButton from "../../public/play.svg";
import PauseButton from "../../public/pause.svg";

const VideoPlayerControls = ({
  progress,
  size = 48,
  width = 3,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="flex items-center justify-center cursor-pointer group"
          onClick={onPlayPause}
        >
          <div className=" fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
            {isPaused ? <PlayButton /> : <PauseButton />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
