import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./6118668937860944995.jpg', import.meta.url).href,
  new URL('./6118668937860944996.jpg', import.meta.url).href,
  new URL('./6118668937860944998.jpg', import.meta.url).href,
  new URL('./IMG_20230902_121527.jpg', import.meta.url).href,
  new URL('./IMG_20240308_133346.jpg', import.meta.url).href,
  new URL('./IMG_20240308_133426.jpg', import.meta.url).href,
  new URL('./IMG_20240308_160809.jpg', import.meta.url).href,
  new URL('./IMG_20240605_112853.jpg', import.meta.url).href,
  new URL('./IMG_20240605_112912.jpg', import.meta.url).href,
  new URL('./IMG_20240605_112951.jpg', import.meta.url).href,
  new URL('./IMG_20240605_113000.jpg', import.meta.url).href,
  new URL('./IMG_20240605_113010.jpg', import.meta.url).href,
  new URL('./IMG_20240605_121038.jpg', import.meta.url).href,
 
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Absolutely magical! Your choice sparkles perfectly ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'A tiny wobble, but the sparkle keeps shining 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'Brilliant pick and beautifully glowing 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'Not this one yet, but your spirit stays bright 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'That was a happy and perfect answer ✨', emoji: '✨' },
  { id: 6, title: 'Smile track', image: cardImages[5], score: -2, comment: 'Keep going—this miss will not dim your joy 😅', emoji: '😅' },
  { id: 7, title: 'Dreamy glow', image: cardImages[6], score: 5, comment: 'Dreamy, lovely, and exactly right 💖', emoji: '💖' },
  { id: 8, title: 'Soft memory', image: cardImages[7], score: -2, comment: 'You miss one, but your next move is still magical 🌷', emoji: '🌷' },
  { id: 9, title: 'Birthday joy', image: cardImages[8], score: 5, comment: 'This carries birthday joy in every star 🌞', emoji: '🌞' },
  { id: 10, title: 'Lucky pick', image: cardImages[9], score: 5, comment: 'Lucky and lovely—this was the right call 😊', emoji: '😊' },
  { id: 11, title: 'Golden moment', image: cardImages[10], score: 5, comment: 'Brilliant pick and beautifully glowing 💖', emoji: '💖' },
  { id: 12, title: 'Smile track', image: cardImages[11], score: -2, comment: 'Keep going—this miss will not dim your joy 😅', emoji: '😅' },
  { id: 13, title: 'Birthday joy', image: cardImages[12], score: 5, comment: 'This carries birthday joy in every star 🌞', emoji: '🌞' },



];

const Level7 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('Choose the magic card and let the birthday light grow.');
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
      if (nextScore >= 22) {
        navigate('/l8');
      } else if (nextScore < 19) {
        navigate('/l6');
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
    happy: 'border-[#dfe9d6] bg-[#f5fbf2] text-[#405745]',
    sad: 'border-[#e7e0d7] bg-[#fffcf7] text-[#6c615a]',
    neutral: 'border-[#e1eadb] bg-[#fefefc] text-[#4d5d56]',
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fef0_0%,_#e8f4e6_35%,_#f4fbf9_100%)] px-4 py-8 text-[#243a32] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#dfeadf] bg-white/85 p-5 shadow-[0_24px_80px_rgba(68,96,77,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#5d7d69]">Level 7</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Garden glow</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-[#dfeadf] bg-[#f3fbf4] px-4 py-2 text-sm font-semibold text-[#3d624d]">Score: <span className="text-[#6aa27e]">{score}</span></div>
          </div>
        </div>

        <div className={`rounded-[1.5rem] border p-5 sm:p-6 ${moodStyles[mood]}`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">{mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}</span>
            <p className="text-sm leading-7 sm:text-base">{comment}</p>
          </div>
        </div>

        <div className="relative isolate mt-7 h-[25rem] overflow-hidden rounded-[1.75rem] border border-[#dfeadf] bg-white/45 sm:h-[32rem]">
          {[
            { key: 'x-down-right', direction: 'right', rotation: '45deg', reverseRotation: '-45deg', zIndex: 10 },
            { key: 'x-down-left', direction: 'left', rotation: '-45deg', reverseRotation: '45deg', zIndex: 10 },
          ].map((track) => (
            <Marquee
              key={track.key}
              direction={track.direction}
              gradient={false}
              speed={150}
              
              style={{
                position: 'absolute',
                left: '-35%',
                top: '50%',
                width: '170%',
                zIndex: track.zIndex,
                transform: `translateY(-50%) rotate(${track.rotation})`,
              }}
            >
              {cards.map((item) => (
                <button key={`${track.key}-${item.id}`} type="button" onClick={() => handleChoice(item)} style={{ transform: `rotate(${track.reverseRotation})` }} className={`group relative mx-2 my-2 h-28 w-20 shrink-0 overflow-hidden rounded-xl border text-left shadow-[0_12px_24px_rgba(57,86,67,0.12)] transition duration-300 hover:-translate-y-1 sm:mx-3 sm:h-36 sm:w-28 sm:rounded-2xl ${selectedId === item.id ? 'border-[#6aa27e] ring-2 ring-[#dbeede]' : 'border-[#dfeadf]'}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2e22]/80 via-[#1d2e22]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-2.5">
                    <div className="mb-1 flex items-center justify-between gap-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white/85 sm:text-[9px] sm:tracking-[0.12em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                    <div className="inline-flex rounded-full bg-white/15 px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.06em] backdrop-blur-sm sm:text-[9px]">{item.score >= 0 ? '+1' : '−1 to −5'}</div>
                  </div>
                </button>
              ))}
            </Marquee>
          ))}

          <div className="absolute inset-x-0 top-1/2 z-20 -translate-y-1/2">
            <Marquee direction="right" gradient={false} speed={140} >
              {cards.map((item) => (
                <button key={`plus-horizontal-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-2 h-28 w-20 shrink-0 overflow-hidden rounded-xl border text-left shadow-[0_12px_24px_rgba(57,86,67,0.14)] transition duration-300 hover:-translate-y-1 sm:mx-3 sm:h-36 sm:w-28 sm:rounded-2xl ${selectedId === item.id ? 'border-[#6aa27e] ring-2 ring-[#dbeede]' : 'border-[#dfeadf]'}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2e22]/80 via-[#1d2e22]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-2.5">
                    <div className="mb-1 flex items-center justify-between gap-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white/85 sm:text-[9px] sm:tracking-[0.12em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                    <div className="inline-flex rounded-full bg-white/15 px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.06em] backdrop-blur-sm sm:text-[9px]">{item.score >= 0 ? '+1' : '−1 to −5'}</div>
                  </div>
                </button>
              ))}
            </Marquee>
          </div>

          <div
            className="absolute inset-y-0 z-40 w-20 sm:w-28"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <Marquee direction="down" gradient={false} speed={140}  className="h-full w-full">
              {cards.map((item) => (
                <button key={`plus-vertical-${item.id}`} type="button" onClick={() => handleChoice(item)} className={`group relative mx-auto my-2 h-28 w-20 shrink-0 overflow-hidden rounded-xl border text-left shadow-[0_12px_24px_rgba(57,86,67,0.14)] transition duration-300 hover:-translate-y-1 sm:my-3 sm:h-36 sm:w-28 sm:rounded-2xl ${selectedId === item.id ? 'border-[#6aa27e] ring-2 ring-[#dbeede]' : 'border-[#dfeadf]'}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2e22]/80 via-[#1d2e22]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-2.5">
                    <div className="mb-1 flex items-center justify-between gap-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white/85 sm:text-[9px] sm:tracking-[0.12em]"><span>{item.title}</span><span>{item.emoji}</span></div>
                    <div className="inline-flex rounded-full bg-white/15 px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.06em] backdrop-blur-sm sm:text-[9px]">{item.score >= 0 ? '+1' : '−1 to −5'}</div>
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

export default Level7;
