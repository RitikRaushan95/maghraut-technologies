import React from 'react';

const cards = [
  { name: 'Card 1', image: '/images/card1.jpg' },
  { name: 'Card 2', image: '/images/card2.jpg' },
  { name: 'Card 3', image: '/images/card3.jpg' },
  { name: 'Card 4', image: '/images/card4.jpg' },
  { name: 'Card 5', image: '/images/card5.jpg' },
  { name: 'Card 6', image: '/images/card6.jpg' },
  { name: 'Card 7', image: '/images/card7.jpg' },
  { name: 'Card 8', image: '/images/card8.jpg' },
  { name: 'Card 9', image: '/images/card9.jpg' },
  { name: 'Card 10', image: '/images/card10.jpg' },
];

// Duplicate cards to ensure seamless scroll
const duplicated = [...cards, ...cards];

export default function CircleCardMarquee() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <div
        className="flex w-max animate-marquee"
        style={{
          animation: 'marquee 15s linear infinite',
        }}
      >
        {duplicated.map((card, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-4 w-28 text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 shadow-md mx-auto">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
