import React from 'react';

const TRACK_ITEMS = [
  { text: 'Diamond Mining', dot: 'text-rose' },
  { text: 'Prospection', dot: 'text-cerulean-300' },
  { text: 'Extraction & Marketing of Stones', dot: 'text-rose' },
  { text: 'Real Estate', dot: 'text-cerulean-300' },
  { text: 'Construction', dot: 'text-rose' },
  { text: 'Oil Extraction', dot: 'text-cerulean-300' },
  { text: 'Hospitality', dot: 'text-rose' },
  { text: 'Tourism', dot: 'text-cerulean-300' },
  { text: 'Staff Training', dot: 'text-rose' },
];

export const Marquee: React.FC = () => {
  const renderTrack = () => (
    <div className="marquee-track font-display text-lg">
      {TRACK_ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span>{item.text}</span>
          <span className={item.dot}>◆</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="bg-ink border-y border-white/5 py-5 text-silver-300">
      <div className="marquee" aria-hidden="true">
        {renderTrack()}
        {renderTrack()}
      </div>
    </div>
  );
};
