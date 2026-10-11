import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./IMG-20230630-WA0003.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0011.jpg', import.meta.url).href,
  new URL('./IMG-20231004-WA0002 1.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0000.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0001.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0002.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0003.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0004.jpg', import.meta.url).href,
  new URL('./IMG-20240214-WA0005.jpg', import.meta.url).href,
  new URL('./IMG-20240215-WA0001.jpg', import.meta.url).href,
  
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Such a lovely choice! Your joy is glowing ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'Almost there—this one slipped away 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'This one shines brighter than the rest 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'One miss is not the end of your sparkle 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'Warm and perfect—such a joyful answer ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'This was not the right path, but you can still win 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Beautifully chosen and full of sparkle 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'A tiny slip, but your heart is still strong 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'This is pure birthday joy and it earned stars 🌞', emoji: '🌞' },
  { id: 10, title: 'Lucky pick', image: cardImages[9], score: 5, comment: 'Lucky choice and a glowing smile 😊', emoji: '😊' },
];

const Level6 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('A soft pink sparkle brings the next star.');
  const [mood, setMood] = useState('neutral');
  const [selectedId, setSelectedId] = useState(null);

  const handleChoice = (item) => {
    setSelectedId(item.id);
    setTotalSteps((prevTotalSteps) => prevTotalSteps + 1);
    if (item.score >= 0) {
      const nextScore = score + 1;
      setScore(nextScore);
      setMood('happy');
      setComment(item.comment);
      if (nextScore >= 19) {
        navigate('/l7');
      } else if (nextScore < 16) {
        navigate('/l5');
      }
      return;
    }
    const penalty = Math.floor(Math.random() * 5) + 1;
    setScore((prev) => prev - penalty);
    setWrongStep((prev) => prev + 1);
    setMood('sad');
    setComment(`${item.comment} You lost ${penalty} stars.`);
  };

  const moodStyles = {
    happy: 'border-[#e5d6f4] bg-[#f8f1ff] text-[#5a4f6f]',
    sad: 'border-[#f0dae9] bg-[#fff4fa] text-[#6c4c66]',
    neutral: 'border-[#ece3ef] bg-[#fffdfd] text-[#584d5d]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f9efff_0%,_#f0e6ff_34%,_#fbf7ff_100%)] px-4 py-8 text-[#352c3d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#ebdefc] bg-white/85 p-5 shadow-[0_24px_80px_rgba(90,70,112,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7b6897]">Level 6</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Velvet celebration</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#e8d9f7] bg-[#f9f3ff] px-4 py-2 text-sm font-semibold text-[#6f5a85]">Score: <span className="text-[#a57ad7]">{score}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>

        <div className="relative isolate mt-7 h-[30rem] overflow-hidden rounded-[1.75rem] border border-[#ebdefc] bg-white/40 sm:h-[36rem]">
          <Marquee
            direction="right"
            gradient={false}
            speed={150}
            
            style={{
              position: 'absolute',
              left: '-50%',
              top: '50%',
              width: '170%',
              transform: 'translateY(-50%) rotate(45deg)',
            }}
          >
            {cards.map((item) => (
              <button key={`down-right-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-3 my-2 h-44 w-32 shrink-0 rotate-[-45deg] overflow-hidden rounded-[1.25rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:mx-5 sm:h-56 sm:w-44 sm:rounded-[1.5rem] ${selectedId === item.id ? 'border-[#a57ad7] ring-2 ring-[#e8d9f7]' : 'border-[#efe3f9]'}`}>
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241b2d]/75 via-[#241b2d]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                  <div className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] backdrop-blur-sm sm:text-[10px]">{item.score >= 0 ? '+1' : '−1 to −5'} star</div>
                </div>
              </button>
            ))}
          </Marquee>

          <Marquee
            direction="left"
            gradient={false}
            speed={150}
         
            style={{
              position: 'absolute',
              left: '-20%',
              top: '50%',
              width: '170%',
              transform: 'translateY(-50%) rotate(-45deg)',
            }}
          >
            {cards.map((item) => (
              <button key={`down-left-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-3 my-2 h-44 w-32 shrink-0 rotate-45 overflow-hidden rounded-[1.25rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:mx-5 sm:h-56 sm:w-44 sm:rounded-[1.5rem] ${selectedId === item.id ? 'border-[#a57ad7] ring-2 ring-[#e8d9f7]' : 'border-[#efe3f9]'}`}>
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241b2d]/75 via-[#241b2d]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                  <div className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] backdrop-blur-sm sm:text-[10px]">{item.score >= 0 ? '+1' : '−1 to −5'} star</div>
                </div>
              </button>
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Level6;
