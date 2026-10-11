import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./Screenshot_2023-08-28-14-41-52-283_com.facebook.orca.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-08-28-14-42-36-915_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-09-15-15-28-43-558_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-09-23-20-53-01-977_com.whatsapp 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-12-06-23-58-33-666_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-09-24-00-21-57-279_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-09-08-12-23-20-184_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-05-14-21-08-43-643_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-03-11-13-56-49-439_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-03-11-13-08-48-457_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-01-07-00-57-24-963_com.miui.gallery.jpg', import.meta.url).href,
 
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Perfectly chosen! Your stars are shining brighter ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'A little stumble, but the sparkle still follows you 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'This was the golden answer and it earned you stars 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'Not this one, but you are still glowing through it 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'Warm and lovely—what a joyful choice ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'A tiny miss, but the next step is still yours 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Dreami, lovely, and wonderfully right 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'You slipped once, but the glow is still in your hands 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'This is pure birthday joy and a perfect answer 🌞', emoji: '🌞' },
  { id: 10, title: 'Lucky pick', image: cardImages[9], score: 5, comment: 'Lucky move—your stars are all aligned 😊', emoji: '😊' },
   { id: 11, title: 'Not this one', image: cardImages[10], score: -2, comment: 'Not this one, but you are still glowing through it 🌷', emoji: '🌷' },
];

const Level5 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('Choose the shining option and keep the dream alive.');
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
      if (nextScore >= 16) {
        navigate('/l6');
      } else if (nextScore < 13) {
        navigate('/l4');
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
    happy: 'border-[#d3ebec] bg-[#f0fbfd] text-[#385a66]',
    sad: 'border-[#d8dde8] bg-[#f5f8fb] text-[#53607b]',
    neutral: 'border-[#dfe8ef] bg-[#fefeff] text-[#5c6475]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ebfaff_0%,_#dfeefc_35%,_#eef8fb_100%)] px-4 py-8 text-[#2e3f49] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d6eaf3] bg-white/85 p-5 shadow-[0_24px_80px_rgba(64,94,110,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#5d8194]">Level 5</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Starry promise</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#d7edf3] bg-[#f4fbff] px-4 py-2 text-sm font-semibold text-[#496e82]">Score: <span className="text-[#5ea4c5]">{score}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>

        <div className="relative isolate mt-7 h-[30rem] overflow-hidden rounded-[1.75rem] border border-[#d6eaf3] bg-white/45 sm:h-[34rem]">
          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
            <Marquee direction="right" gradient={false} speed={150} >
              {cards.map((item) => (
                <button key={`horizontal-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-2 h-40 w-32 shrink-0 overflow-hidden rounded-[1.25rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:mx-3 sm:h-52 sm:w-40 sm:rounded-[1.5rem] ${selectedId === item.id ? 'border-[#5ea4c5] ring-2 ring-[#d5edf4]' : 'border-[#dfeef5]'}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2933]/75 via-[#1d2933]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                    
                  </div>
                </button>
              ))}
            </Marquee>
          </div>

          <div className="absolute inset-y-0 left-1/2 z-20 w-32 -translate-x-1/2 sm:w-40">
            <Marquee direction="down" gradient={false} speed={140}  className="h-full w-full">
              {cards.map((item) => (
                <button key={`vertical-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-auto my-2 h-40 w-32 shrink-0 overflow-hidden rounded-[1.25rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:my-3 sm:h-52 sm:w-40 sm:rounded-[1.5rem] ${selectedId === item.id ? 'border-[#5ea4c5] ring-2 ring-[#d5edf4]' : 'border-[#dfeef5]'}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2933]/75 via-[#1d2933]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                    
                  </div>
                </button>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Level5;
