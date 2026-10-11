import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';
const Image = new URL('../L9/IMG-20241204-WA0005.jpg', import.meta.url).href;
const birthdayImages = Object.values(
  import.meta.glob('./*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);
const memoryImages = Array.from(
  { length: 100 },
  (_, index) => birthdayImages[index % birthdayImages.length]
);
const birthDate = new Date(2002, 9, 12);

const getAge = (now) => {
  const elapsedMilliseconds = Math.max(0, now.getTime() - birthDate.getTime());
  const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalMonths = Math.max(
    0,
    (now.getFullYear() - birthDate.getFullYear()) * 12
      + now.getMonth() - birthDate.getMonth()
      - (now.getDate() < birthDate.getDate() ? 1 : 0)
  );
  const years = Math.floor(totalMonths / 12);

  return { years, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds };
};

const Level10 = () => {
  const navigate = useNavigate();
  const { setScore, setWrongStep, setTotalSteps, setGameStartedAt } = useAuth();
  const [activeModal, setActiveModal] = useState(null);
  const [now, setNow] = useState(() => new Date());
  const celebrationAudioRef = useRef(false);
  const age = getAge(now);

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!activeModal) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [activeModal]);

  useEffect(() => {
    if (activeModal !== 'celebration' || !('speechSynthesis' in window)) return undefined;
    return () => {
      celebrationAudioRef.current = false;
      window.speechSynthesis.cancel();
    };
  }, [activeModal]);

  const openCelebration = () => {
    setActiveModal('celebration');
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      celebrationAudioRef.current = false;
      window.speechSynthesis.cancel();
      celebrationAudioRef.current = true;
      const greeting = new SpeechSynthesisUtterance('Happy Birthday, Nishat!');
      greeting.rate = 0.9;
      greeting.pitch = 1.15;
      greeting.onend = () => {
        if (celebrationAudioRef.current) window.speechSynthesis.speak(greeting);
      };
      window.speechSynthesis.speak(greeting);
    }
  };

  const exit = () => {
    setScore(0);
    setWrongStep(0);
    setTotalSteps(0);
    setGameStartedAt(null);
    navigate('/');
  };

  const modalContents = {
    celebration: (
      <div className="relative animate-[appear_.55s_ease-out_both] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#fff1d9,#ffe5f1_52%,#e9e5ff)] p-7 text-center sm:p-10">
        <span className="birthday-firework left-[18%] top-[38%]" aria-hidden="true" />
        <span className="birthday-firework left-[82%] top-[34%] [animation-delay:500ms]" aria-hidden="true" />
        <span className="birthday-firework left-1/2 top-[78%] [animation-delay:900ms]" aria-hidden="true" />
        <span className="absolute left-7 top-6 animate-[float_2.5s_ease-in-out_infinite] text-3xl" aria-hidden="true">🎉</span>
        <span className="absolute right-7 top-8 animate-[float_3s_ease-in-out_infinite] text-3xl [animation-delay:300ms]" aria-hidden="true">✨</span>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#896789]">Today is all about you</p>
          <h2 className="mt-4 animate-pulse text-4xl font-black text-[#81558e] sm:text-6xl">HAPPY BIRTHDAY!</h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-[#62546d]">
          May your day be filled with laughter, sweet surprises, and all the love your heart can hold. Keep shining, Zakia! 🥳
          </p>
        </div>
      </div>
    ),
    age: (
      <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#eefaff,#f4efff)] p-6 text-center sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6a7f9d]">Every moment is precious</p>
        <h2 className="mt-3 text-3xl font-black text-[#4d648d] sm:text-4xl">Zakia’s age</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.entries(age).map(([unit, value]) => (
            <div key={unit} className="rounded-2xl border border-white bg-white/75 p-4 shadow-sm">
              <p className="text-3xl font-black tabular-nums text-[#7562b0] sm:text-4xl">{value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#71809a]">
                {unit === 'years' ? 'Years' : unit.replace('total', 'Total')}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-[#6c6883]">Since 12 October 2002 · Updating every second</p>
        <p className="mt-6 border-t border-[#dce4f4] pt-5 text-base font-semibold italic leading-7 text-[#765f91]">
          The rest of our lives, we will spend together, InshaAllah.
        </p>
      </div>
    ),
    gallery: (
      <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#fff5f8,#f5f0ff)] p-5 sm:p-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#8d6688]">100 photo moments</p>
        <h2 className="mt-2 text-center text-3xl font-black text-[#654a73]">These are our memories 💕</h2>
        <div className="mt-6 grid max-h-[55vh] grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-4">
          {memoryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
              <img src={image} alt={`Zakia Nishat photo ${index + 1}`} className="h-36 w-full object-cover sm:h-48" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-7 text-[#695b70]">
          A hundred little snapshots of the moments we share.
        </p>
      </div>
    ),
  };

  const modalTitles = {
    celebration: 'Birthday celebration',
    age: 'Zakia Nishat live age',
    gallery: 'Birthday photo gallery',
  };

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top,_#fff4e8_0%,_#ffe8f1_45%,_#e9e8ff_100%)] px-4 py-6 text-[#332d4a] sm:px-6 sm:py-10">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_30px_100px_rgba(72,56,104,0.18)] backdrop-blur">
        <header className="bg-[linear-gradient(135deg,#fff0d9,#ffe5f1_52%,#e9e5ff)] px-5 py-8 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#896789]">The celebration begins</p>
          <h1 className="mt-4 text-4xl font-black text-[#81558e] sm:text-6xl">HAPPY BIRTHDAY!</h1>
          <p
            className="mt-3 bg-cover bg-center bg-clip-text text-3xl font-black uppercase leading-tight tracking-[0.06em] text-transparent sm:text-5xl"
            style={{
              backgroundImage: `url("${birthdayImages[0]}")`,
              WebkitTextStroke: '1px rgba(104, 75, 130, 0.4)',
            }}
          >
            ZAKIA NISHAT
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#625776] sm:text-base">
            A special day for a wonderful person. Choose a moment to celebrate!
          </p>
        </header>

        <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-10">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#f5c8df] via-[#d8c9f7] to-[#b9e8ed] blur-sm" />
            <div className="relative overflow-hidden rounded-[1.6rem] border-4 border-white bg-white shadow-xl">
              <img src={Image} alt="Zakia Nishat" className="max-h-[24rem] w-full object-contain sm:max-h-[30rem]" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8872ae]">Birthday moments</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={openCelebration} className="rounded-2xl border border-[#f1d9e9] bg-[#fff4f8] px-4 py-4 text-sm font-bold text-[#925f83] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                🎂 Birthday celebration
              </button>
              <button type="button" onClick={() => setActiveModal('age')} className="rounded-2xl border border-[#dce8f5] bg-[#f1f8ff] px-4 py-4 text-sm font-bold text-[#5b7197] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                ⏳ Live age counter
              </button>
              <button type="button" onClick={() => setActiveModal('gallery')} className="rounded-2xl border border-[#e7dcf5] bg-[#f8f3ff] px-4 py-4 text-sm font-bold text-[#785c98] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                📸 Photos & thank you
              </button>
              <button type="button" onClick={exit} className="rounded-2xl border border-[#d9ebef] bg-[#f1fbfc] px-4 py-4 text-sm font-bold text-[#557c84] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                LOvE YOU SO MUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#211b31]/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={modalTitles[activeModal]}
            className="relative my-auto w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="absolute -right-2 -top-2 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white text-xl font-bold text-[#59476b] shadow-lg transition hover:scale-105"
            >
              ×
            </button>
            {modalContents[activeModal]}
          </section>
        </div>
      )}
    </main>
  );
};

export default Level10;
