import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./1000075569.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0026 1.jpg', import.meta.url).href,
  new URL('./IMG-20240208-WA0009.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0004.jpg', import.meta.url).href,
  new URL('./IMG-20240306-WA0004.jpg', import.meta.url).href,
  new URL('./IMG_20240308_160744.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-06-11-00-57-14-791_com.whatsapp 1.jpg', import.meta.url).href,
  new URL('./WhatsApp Image 2026-10-11 at 7.03.38 PM.jpeg', import.meta.url).href,
  new URL('./WhatsApp Image 2026-10-11 at 7.03.39 PM.jpeg', import.meta.url).href,
 
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'This is the glow of a perfect choice ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'It slipped away, but your shine is still strong 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'A golden answer with a lovely sparkle 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'One little miss cannot hide your joy 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'Bright, happy, and beautifully chosen ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'This one missed the mark, but your smile remains 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Dreamy, radiant, and beautifully right 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'A brief misstep, but the magic is still yours 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'Pure birthday joy lights up the whole day 🌞', emoji: '🌞' },
 
];

const Level8 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('The next star is waiting in the golden light.');
  const [mood, setMood] = useState('neutral');
  const [selectedId, setSelectedId] = useState(null);

  const handleChoice = (item) => {
    setSelectedId(item.id);
    setTotalSteps((prevTotalSteps) => prevTotalSteps + 1);
    if (item.score >= 0) {
      setScore((prev) => prev + 1);
      setMood('happy');
      setComment(item.comment);
      setTimeout(() => navigate('/l9'), 600);
      return;
    }
    const penalty = Math.floor(Math.random() * 5) + 1;
    setScore((prev) => prev - penalty);
    setWrongStep((prev) => prev + 1);
    setMood('sad');
    setComment(`${item.comment} You lost ${penalty} stars.`);
  };

  const moodStyles = {
    happy: 'border-[#f9e9cf] bg-[#fffaf0] text-[#7a5f3c]',
    sad: 'border-[#f1e0d7] bg-[#fff8f5] text-[#6e564d]',
    neutral: 'border-[#f5ead7] bg-[#fffefb] text-[#625849]',
  };

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top,_#fff4dd_0%,_#fceac8_34%,_#fffaf3_100%)] px-3 py-3 text-[#4a3b2c] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#f4dcc0] bg-white/85 p-3 shadow-[0_24px_80px_rgba(116,92,59,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-3 flex flex-col gap-3 sm:mb-6 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9a7146]">Level 8</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Golden hour</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#f4ddc1] bg-[#fff8ef] px-4 py-2 text-sm font-semibold text-[#8f6b43]">Score: <span className="text-[#dd9d52]">{score}</span></div>
            <div className="rounded-full border border-[#f7e4d1] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#7d6348]">Wrong steps: <span className="text-[#ba8855]">{wrongStep}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-3 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>

        <div className="mt-3 flex justify-center overflow-hidden py-1 sm:mt-7 sm:py-4">
          <div
            className="relative aspect-square w-[min(86vw,55vh,34rem)] shrink-0 animate-[spin_36s_linear_infinite]"
            style={{ '--orbit-radius': 'clamp(3.5rem, 22vw, 9.5rem)' }}
          >
            {cards.map((item, index) => {
              const angle = index * (360 / cards.length);

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-radius)))` }}
                >
                  <button
                    type="button"
                    onClick={() => handleChoice(item)}
                    className={`group relative -left-1/2 -top-1/2 flex w-48 h-44 rounded-full  animate-[spin_20s_linear_infinite_reverse] flex-col overflow-hidden rounded-xl border text-left shadow-[0_12px_28px_rgba(100,74,42,0.16)] transition hover:scale-105 sm:h-32 sm:w-44 sm:rounded-2xl ${selectedId === item.id ? ' ring-2 ring-[#f9e9cf]' : 'border-[#f6dfc7]'}`}
                  >
                    {/* <div className=''> */}
                      <img src={item.image} alt={item.title} className="h-full w-full rounded-full bg-[#fffaf3] object-center p-1" />
                    {/* </div> */}
                    
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Level8;
