import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const winnerImage = new URL('./6118668937860945007.jpg', import.meta.url).href;

const Level9 = () => {
  const navigate = useNavigate();
  const { score, wrongStep, totalSteps, gameStartedAt } = useAuth();
  const [finishedAt] = useState(() => Date.now());
  const elapsedSeconds = gameStartedAt
    ? Math.max(0, Math.floor((finishedAt - gameStartedAt) / 1000))
    : null;
  const finishDuration = elapsedSeconds === null
    ? 'Not recorded'
    : [
        Math.floor(elapsedSeconds / 3600) > 0 ? `${Math.floor(elapsedSeconds / 3600)}h` : null,
        `${Math.floor((elapsedSeconds % 3600) / 60)}m`,
        `${elapsedSeconds % 60}s`,
      ].filter(Boolean).join(' ');
  const accuracy = totalSteps > 0
    ? Math.round(((totalSteps - wrongStep) / totalSteps) * 100)
    : 0;

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top,_#f8efff_0%,_#f1eaff_42%,_#e7f5ff_100%)] px-4 py-6 text-[#332d4a] sm:px-6 sm:py-10">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_30px_100px_rgba(72,56,104,0.18)] backdrop-blur">
        <header className="bg-[linear-gradient(135deg,#f5e6f4,#e9e8ff_55%,#e2f5ff)] px-5 py-8 text-center sm:px-10 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#74639c]">The game is complete</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[0.06em] text-[#49355f] sm:text-6xl">
            CONGRATULATIONS!
          </h1>
          <p
            className="mt-3 bg-cover bg-center bg-clip-text text-3xl font-black uppercase leading-tight tracking-[0.06em] text-transparent sm:text-5xl"
            style={{
              backgroundImage: `url("${winnerImage}")`,
              WebkitTextStroke: '1px rgba(104, 75, 130, 0.4)',
            }}
          >
            ZAKIA NISHAT
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#625776] sm:text-base">
            You completed the game! Here are your final results.
          </p>
        </header>

        <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-10">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#f5c8df] via-[#d8c9f7] to-[#b9e8ed] blur-sm" />
            <div className="relative overflow-hidden rounded-[1.6rem]  border-white bg-white shadow-xl">
              <img src={winnerImage} alt="Zakia Nishat" className=" w-full object-contain sm:max-h-[30rem]" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8872ae]">Your game results</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e8dcfa] bg-[#f8f3ff] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#756594]">Final score</p>
                <p className="mt-2 text-3xl font-black text-[#8061bc]">{score}</p>
              </div>
              <div className="rounded-2xl border border-[#f4dce7] bg-[#fff5f8] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#96647c]">Wrong steps</p>
                <p className="mt-2 text-3xl font-black text-[#c46f91]">{wrongStep}</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-[#d9ebef] bg-[#f1fbfc] p-4 sm:col-span-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#557c84]">Total steps</p>
                <p className="mt-2 text-3xl font-black text-[#4b9aa0]">{totalSteps}</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-[#e8e0f1] bg-[#faf7ff] p-4 sm:col-span-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#756594]">Time to finish</p>
                <p className="mt-2 text-3xl font-black tabular-nums text-[#8061bc]">{finishDuration}</p>
                {gameStartedAt && (
                  <p className="mt-1 text-xs text-[#756594]">
                    Completed at {new Date(finishedAt).toLocaleTimeString()}
                  </p>
                )}
              </div>
              <div className="col-span-2 rounded-2xl border border-[#f1e5c8] bg-[#fffaf0] p-4 sm:col-span-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8c754b]">Accuracy</p>
                  <p className="text-2xl font-black text-[#c4933c]">{accuracy}%</p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f1e7d3]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#edbd68] to-[#e89a91]" style={{ width: `${accuracy}%` }} />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/l10')}
              className="mt-6 rounded-full bg-gradient-to-r from-[#9a69be] to-[#cf7fa0] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Go to next step <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Level9;
