import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./1000047889.jpg', import.meta.url).href,
  new URL('./IMG-20230618-WA0004.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0017 1.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0017.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0020.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0033.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0035.jpg', import.meta.url).href,
  new URL('./IMG-20230721-WA0036.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-09-08-12-23-20-184_com.whatsapp.jpg', import.meta.url).href,
  new URL('./Screenshot_2024-12-15-11-43-19-085_com.whatsapp.jpg', import.meta.url).href,
 

];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Aww! This is a lovely memory, and your heart just earned a sweet little star ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'Oops! That choice missed the mark, so you lost a star and a bit of sparkle 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'Perfect pick! This memory feels right, and your score is climbing 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'That one was a little off. The score drops, but you can still bounce back 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'This feels warm and full of love. You earned a happy star ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'Not quite the right memory. One star slipped away, but you can recover 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Beautiful choice! This one celebrates the joy of your day 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'That one missed the moment. Try again and keep the sparkle alive 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'Absolutely lovely — a perfect birthday feeling, and you gained points 🌞', emoji: '🌞' },
  { id: 10, title: 'Lucky pick', image: cardImages[9], score: 5, comment: 'You picked the lucky one! A small win and a big smile 😊', emoji: '😊' },
];

const Level1 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('Choose the memory that feels most like a happy birthday moment.');
  const [mood, setMood] = useState('neutral');
  const [selectedId, setSelectedId] = useState(null);

  const handleChoice = (item) => {
    setSelectedId(item.id);
    setTotalSteps((prevTotalSteps) => prevTotalSteps + 1);

    if (item.score >= 0) {
      setScore((prevScore) => prevScore + 1);
      setMood('happy');
      setComment(item.comment);
     if(score==3)
        navigate('/l2')
      return;
    }

    const penalty = Math.floor(Math.random() * 5) + 1;
    setScore((prevScore) => prevScore - penalty);
    setWrongStep((prevWrongStep) => prevWrongStep + 1);
    setMood('sad');
    setComment(`${item.comment} You lost ${penalty} stars.`);
  };

  const moodStyles = {
    happy: 'border-[#f3d6b7] bg-[#fffaf1] text-[#7f5d4d]',
    sad: 'border-[#f0d4d8] bg-[#fff4f5] text-[#7d5560]',
    neutral: 'border-[#eadfe8] bg-[#fffdfb] text-[#625b66]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f3_0%,_#f6edf3_32%,_#f0e7eb_100%)] px-4 py-8 text-[#2f2a33] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#f0e4df] bg-white/80 p-5 shadow-[0_24px_80px_rgba(102,76,89,0.10)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9b7f7d]">Level 1</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Choose the magic moment</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-[#f0d8c9] bg-[#fff5f1] px-4 py-2 text-sm font-semibold text-[#7c5d59]">
                Score: <span className="text-[#c77871]">{score}</span>
              </div>
              <div className="rounded-full border border-[#e9dff6] bg-[#f7f3ff] px-4 py-2 text-sm font-semibold text-[#614b79]">
                Wrong steps: <span className="text-[#8d6fb4]">{wrongStep}</span>
              </div>
            </div>
          </div>

          <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                {mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}
              </span>
              <p className="text-sm leading-7 sm:text-base">{comment}</p>
            </div>
          </div>

          <div className="mt-7">
            <Marquee direction="left" gradient={false} speed={100} >
              {cards.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleChoice(item)}
                  className={`group relative mx-3 my-2 h-64 w-52 overflow-hidden rounded-[1.5rem] border text-left shadow-[0_18px_35px_rgba(70,52,58,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(70,52,58,0.12)] ${
                    selectedId === item.id
                      ? 'border-[#c77871] ring-2 ring-[#f0d0cb]'
                      : 'border-[#f4e7e2]'
                  }`}
                >
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a22]/80 via-[#1f1a22]/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                      <span>{item.title}</span>
                      <span>{item.emoji}</span>
                    </div>
                   
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

export default Level1;