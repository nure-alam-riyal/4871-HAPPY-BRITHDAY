import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const cardImages = [
  new URL('./Screenshot_2023-06-28-22-22-33-745_com.whatsapp 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-07-14-13-21-09-219_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-08-04-12-27-34-603_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-08-10-23-33-41-369_com.facebook.orca 1.jpg', import.meta.url).href,
  new URL('./Screenshot_2023-09-29-01-28-58-965_com.facebook.orca 1.jpg', import.meta.url).href,
 
];

const cards = [
  { id: 1, title: 'Sweet memory', image: cardImages[0], score: 5, comment: 'Aww! This is a lovely memory, and your heart just earned a sweet little star ✨', emoji: '✨' },
  { id: 2, title: 'Wrong turn', image: cardImages[1], score: -2, comment: 'Oops! That choice missed the mark, so you lost a star and a bit of sparkle 😅', emoji: '😅' },
  { id: 3, title: 'Golden moment', image: cardImages[2], score: 5, comment: 'Perfect pick! This memory feels right, and your score is climbing 💖', emoji: '💖' },
  { id: 4, title: 'Not this one', image: cardImages[3], score: -2, comment: 'That one was a little off. The score drops, but you can still bounce back 🌷', emoji: '🌷' },
  { id: 5, title: 'Happy moment', image: cardImages[4], score: 5, comment: 'This feels warm and full of love. You earned a happy star ✨', emoji: '✨' },
  
];

const Level2 = () => {
  const navigate = useNavigate();
  const { score, setScore, wrongStep, setWrongStep, setTotalSteps } = useAuth();
  const [comment, setComment] = useState('Pick the brightest memory and keep the magic alive.');
  const [mood, setMood] = useState('neutral');
  const [selectedId, setSelectedId] = useState(null);

  const handleChoice = (item) => {
    setSelectedId(item.id);
    setTotalSteps((prevTotalSteps) => prevTotalSteps + 1);
    if (item.score >= 0) {
      setScore((prev) => prev + 1);
      setMood('happy');
      setComment(item.comment);
       if(score==7)
        navigate('/l3')
      return;
    }

    const penalty = Math.floor(Math.random() * 5) + 1;
    setScore((prev) => prev - penalty);
    setWrongStep((prev) => prev + 1);
    setMood('sad');
    setComment(`${item.comment} You lost ${penalty} stars.`);
  };

  const moodStyles = {
    happy: 'border-[#d7cdfd] bg-[linear-gradient(135deg,_rgba(244,240,255,0.96),_rgba(233,242,255,0.9))] text-[#3f3b67]',
    sad: 'border-[#f7dfe7] bg-[linear-gradient(135deg,_rgba(255,244,248,0.96),_rgba(249,240,255,0.9))] text-[#6f4968]',
    neutral: 'border-[#e3eaf9] bg-[linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(240,246,255,0.9))] text-[#4d5875]',
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#f9f5ff_0%,_#eef5ff_35%,_#f9f3ff_100%)] px-3 py-4 text-[#2b2940] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.25rem] border border-white/70 bg-white/65 p-4 shadow-[0_28px_90px_rgba(74,66,108,0.15)] backdrop-blur-sm sm:p-8">
          <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e1d9ff] bg-[#f9f5ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6c5fa8]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#8a76d8]" />
                Level 2
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[#2f2b46] sm:text-5xl">Moonlit wishes</h1>
            </div>
          </div>

          <div className={`rounded-[1.75rem] border p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6 ${moodStyles[mood]}`}>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 text-2xl shadow-[0_10px_25px_rgba(79,73,125,0.12)]">
                {mood === 'happy' ? '😊' : mood === 'sad' ? '💭' : '✨'}
              </span>
              <p className="text-sm font-medium leading-7 sm:text-base">{comment}</p>
            </div>
          </div>

          <div className="mx-auto mt-5 max-w-2xl sm:mt-8 md:max-w-none">
            <div className="mb-4 px-1">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a70a8]">Choose a memory</p>
            </div>

            {/* Changed grid layout: stacked on mobile (grid-cols-1), side-by-side on md+ */}
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_14rem]">
              <div className="h-[42vh] min-h-[20rem] max-h-[26rem] w-full overflow-hidden rounded-[1.8rem] border border-[#e7e0fb] bg-white/45 p-2 shadow-inner sm:h-[32rem] sm:p-3">
                <Marquee direction="up" gradient={false} speed={100}  className="h-full w-full">
                  {cards.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleChoice(item)}
                      className={`group relative mx-auto  h-40 w-[100%] max-w-[16rem] shrink-0 overflow-hidden rounded-[1.25rem] border bg-[#f2effa] text-left shadow-[0_22px_40px_rgba(59,51,94,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(59,51,94,0.18)] sm:my-3 sm:h-52 sm:w-[13.5rem] sm:rounded-[1.7rem] ${
                        selectedId === item.id
                          ? 'border-[#977fe9] ring-2 ring-[#e3d9ff]'
                          : 'border-[#ece7ff]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[100%] w-full bg-white object-contain p-1"
                      />
                   
                    </button>
                  ))}
                </Marquee>
              </div>

              {/* Sidebar: Horizontal layout on mobile, vertical column on md+ */}
              <aside className="flex flex-row gap-2 md:w-56 md:flex-col md:gap-3" aria-label="Game score">
                <div className="flex flex-1 flex-col items-center justify-center rounded-[1.25rem] border border-[#e5ddff] bg-[#f7f3ff] p-3 text-center shadow-sm sm:rounded-[1.6rem] sm:p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7065a5] sm:text-xs sm:tracking-[0.2em]">Score</span>
                  <span className="mt-1 break-all text-2xl font-bold leading-tight text-[#7d68d8] sm:mt-2 sm:text-4xl">{score}</span>
                  <span className="mt-0.5 text-[10px] text-[#7065a5] sm:text-xs">stars</span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center rounded-[1.25rem] border border-[#dfeaf8] bg-[#f6fbff] p-3 text-center shadow-sm sm:rounded-[1.6rem] sm:p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#586c8a] sm:text-xs sm:tracking-[0.15em]">Wrong steps</span>
                  <span className="mt-1 text-2xl font-bold leading-tight text-[#5f7db8] sm:mt-2 sm:text-4xl">{wrongStep}</span>
                </div>
                <div className="hidden rounded-xl border border-[#e6deff] bg-[#faf7ff] px-3 py-2 text-center text-xs font-semibold leading-4 text-[#7b66b4] md:block sm:rounded-2xl sm:px-3 sm:py-3">
                  +1 correct<br />−1 to −5 wrong
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Level2;