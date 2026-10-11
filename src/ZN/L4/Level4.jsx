import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./IMG-20230616-WA0006.jpg', import.meta.url).href,
  new URL('./IMG-20230616-WA0007.jpg', import.meta.url).href,
  new URL('./IMG-20230628-WA0000.jpg', import.meta.url).href,
  new URL('./IMG-20231004-WA0000 1.jpg', import.meta.url).href,
  new URL('./IMG-20231227-WA0002.jpg', import.meta.url).href,
  new URL('./IMG-20241204-WA0002.jpg', import.meta.url).href,
  new URL('./IMG-20241204-WA0006.jpg', import.meta.url).href,
  new URL('./IMG-20241204-WA0007.jpg', import.meta.url).href,
  new URL('./IMG-20241204-WA0008.jpg', import.meta.url).href,
  new URL('./IMG-20241204-WA0008.jpg', import.meta.url).href,
 
  
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'The sweetest memory is shining through. You earned stars ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'A small miss today, but your sparkle is still shining 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'Perfect pick! This rose-colored choice is glowing 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'Not this one. Keep your heart warm and move on 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'Warm and joyful—this was the right choice ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'A tiny miss, but the next star is still waiting 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Dreamy and beautiful. This one earned you stars 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'One wrong pick cannot stop the magic 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'This is pure birthday joy; the sparkle is yours 🌞', emoji: '🌞' },
  { id: 10, title: 'Lucky pick', image: cardImages[9], score: 5, comment: 'Lucky choice, lucky heart—beautifully done 😊', emoji: '😊' },
];

const Level4 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('The right choice blooms with love.');
  const [mood, setMood] = useState('neutral');
  const [selectedId, setSelectedId] = useState(null);

  const handleChoice = (item) => {
    setSelectedId(item.id);
    setTotalSteps((prevTotalSteps) => prevTotalSteps + 1);
    if (item.score >= 0) {
      setScore((prev) => prev + 1);
      setMood('happy');
      setComment(item.comment);
    if(score==13)
        navigate('/l5')
      return;
    }
    const penalty = Math.floor(Math.random() * 5) + 1;
    setScore((prev) => prev - penalty);
    setWrongStep((prev) => prev + 1);
    setMood('sad');
    setComment(`${item.comment} You lost ${penalty} stars.`);
  };

  const moodStyles = {
    happy: 'border-[#f3d6d9] bg-[#fff2f4] text-[#744f5f]',
    sad: 'border-[#efd9e5] bg-[#fff5fa] text-[#7a5870]',
    neutral: 'border-[#efdee5] bg-[#fffdfd] text-[#5f4c56]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffeef3_0%,_#ffe1eb_35%,_#fdf3f7_100%)] px-4 py-8 text-[#39292e] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#f3dfe7] bg-white/85 p-5 shadow-[0_24px_80px_rgba(122,78,96,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a86d86]">Level 4</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Rose garden</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#f2d7dd] bg-[#fff7f9] px-4 py-2 text-sm font-semibold text-[#7f5868]">Score: <span className="text-[#d76d8a]">{score}</span></div>
            <div className="rounded-full border border-[#f1e2ea] bg-[#fffafc] px-4 py-2 text-sm font-semibold text-[#785f6e]">Wrong steps: <span className="text-[#ab6f8d]">{wrongStep}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>

        <div className="relative mt-7 h-[28rem] overflow-hidden rounded-[1.75rem] border border-[#f3dfe7] bg-white/40 sm:h-[34rem]">
          <Marquee
            direction="left"
            gradient={false}
            speed={120}
            
            style={{
              position: 'absolute',
              left: '-30%',
              top: '50%',
              width: '170%',
              transform: 'translateY(-50%) rotate(-45deg)',
            }}
          >
            {cards.map((item) => (
              <button key={item.id} type="button" onClick={() => handleChoice(item)} className={`group relative mx-3 my-2 h-48 w-36 shrink-0 rotate-45 overflow-hidden rounded-[1.5rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:mx-5 sm:h-60 sm:w-48 ${selectedId === item.id ? 'border-[#d76d8a] ring-2 ring-[#f6d0dc]' : 'border-[#f6dfe8]'}`}>
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f1c22]/75 via-[#2f1c22]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                  
                </div>
              </button>
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Level4;
