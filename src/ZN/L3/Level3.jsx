import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./Screenshot_2023-07-22-01-27-24-806_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-27-24-806_com.facebook.orca.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-28-10-719_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-28-10-719_com.facebook.orca.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-28-51-495_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-28-51-495_com.facebook.orca.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-22-01-31-18-767_com.facebook.orca.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-08-09-00-00-07-775_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-08-09-00-00-58-864_com.facebook.orca 1.jpg', import.meta.url).href,
]

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Beautiful choice! This one feels warm and full of birthday sparkle ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'Not quite right. A small loss, but the magic is still yours 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'Perfect pick! Your score is glowing higher 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'This missed the moment. Keep going and try again 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'That was the right warm choice and it added joy ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'Not this one. The sparkle is still there, just take a new path 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'This is the dreamy one, and it earned you stars 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'That choice slipped away, but you can still win 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'Absolutely lovely. This is magic in motion 🌞', emoji: '🌞' },
 
];

const Level3 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('A bright choice gives you the next sparkle.');
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
      if (nextScore >= 10) {
        navigate('/l4');
      } else if (nextScore < 7) {
        navigate('/l2');
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
    happy: 'border-[#f3e7b6] bg-[#fff8dc] text-[#6f5a39]',
    sad: 'border-[#f3d7d0] bg-[#fff4f2] text-[#714d54]',
    neutral: 'border-[#f0e1d7] bg-[#fffdf9] text-[#605a52]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8df_0%,_#fff0d7_30%,_#f9efe2_100%)] px-4 py-8 text-[#3b2a25] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#f1e5d0] bg-white/85 p-5 shadow-[0_24px_80px_rgba(113,92,51,0.10)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a28659]">Level 3</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Bloom and shine</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#f2e4b1] bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#7a613a]">Score: <span className="text-[#d79b2d]">{score}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>
        <div className="relative mt-7 h-[28rem] overflow-hidden rounded-[1.75rem] border border-[#f1e5d0] bg-white/40 sm:h-[34rem]">
          <Marquee
            direction="right"
            gradient={false}
            speed={100}
           
            style={{
              position: 'absolute',
              left: '-40%',
              top: '50%',
              width: '170%',
              transform: 'translateY(-50%) rotate(45deg)',
            }}
          >
            {cards.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleChoice(item)}
                className={`group relative mx-3 my-2 h-48 w-36 shrink-0 rotate-[-45deg] overflow-hidden rounded-[1.5rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 sm:mx-5 sm:h-60 sm:w-48 ${selectedId === item.id ? 'border-[#d79b2d] ring-2 ring-[#f7e5b6]' : 'border-[#f4ead5]'}`}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2016]/75 via-[#2b2016]/10 to-transparent" />
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

export default Level3;
