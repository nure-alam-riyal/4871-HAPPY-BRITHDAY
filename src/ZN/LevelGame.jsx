import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider/AuthProvider';

const levelThemes = [
  {
    id: 1,
    path: '/l1',
    title: 'Golden Memory',
    subtitle: 'Pick the memory that makes the birthday glow.',
    badge: 'Step 1',
    accent: '#f3b9a6',
    dark: '#312638',
    panel: 'linear-gradient(135deg, rgba(255,244,226,0.96), rgba(244,223,232,0.88))',
    button: 'linear-gradient(135deg, #f7d7c7, #f3b9a6)',
  },
  {
    id: 2,
    path: '/l2',
    title: 'Moonlit Wish',
    subtitle: 'Choose the sweetest wish for the brightest night.',
    badge: 'Step 2',
    accent: '#b7aafa',
    dark: '#2c2d43',
    panel: 'linear-gradient(135deg, rgba(232,227,255,0.96), rgba(218,233,255,0.88))',
    button: 'linear-gradient(135deg, #b8b6ff, #9ac7ff)',
  },
  {
    id: 3,
    path: '/l3',
    title: 'Bloom and Shine',
    subtitle: 'Find the option that feels like the happiest bloom.',
    badge: 'Step 3',
    accent: '#f3d89c',
    dark: '#40363d',
    panel: 'linear-gradient(135deg, rgba(255,248,219,0.96), rgba(242,227,202,0.88))',
    button: 'linear-gradient(135deg, #f8d77e, #f0b56d)',
  },
  {
    id: 4,
    path: '/l4',
    title: 'Rose Garden',
    subtitle: 'The right choice is the one full of warm love.',
    badge: 'Step 4',
    accent: '#f0a7b5',
    dark: '#432b3f',
    panel: 'linear-gradient(135deg, rgba(255,226,233,0.96), rgba(248,214,220,0.88))',
    button: 'linear-gradient(135deg, #efb4c0, #e3869b)',
  },
  {
    id: 5,
    path: '/l5',
    title: 'Starry Promise',
    subtitle: 'One correct pick unlocks the next glowing step.',
    badge: 'Step 5',
    accent: '#a5d8dd',
    dark: '#273847',
    panel: 'linear-gradient(135deg, rgba(223,245,250,0.96), rgba(212,233,244,0.88))',
    button: 'linear-gradient(135deg, #8ed4e0, #7fc0d9)',
  },
  {
    id: 6,
    path: '/l6',
    title: 'Velvet Celebration',
    subtitle: 'Celebrate the sweetest choice and move ahead.',
    badge: 'Step 6',
    accent: '#c8acd9',
    dark: '#3e2d4d',
    panel: 'linear-gradient(135deg, rgba(244,233,249,0.96), rgba(234,216,240,0.88))',
    button: 'linear-gradient(135deg, #d6b9e8, #bb89d3)',
  },
  {
    id: 7,
    path: '/l7',
    title: 'Sunbeam Story',
    subtitle: 'Warm hearts always choose the brightest path.',
    badge: 'Step 7',
    accent: '#f2d173',
    dark: '#463f2e',
    panel: 'linear-gradient(135deg, rgba(255,248,214,0.96), rgba(245,232,189,0.9))',
    button: 'linear-gradient(135deg, #f8d870, #efb85d)',
  },
  {
    id: 8,
    path: '/l8',
    title: 'Pearl Dream',
    subtitle: 'A soft glow reveals the true perfect answer.',
    badge: 'Step 8',
    accent: '#9ecbb2',
    dark: '#2d3a39',
    panel: 'linear-gradient(135deg, rgba(230,246,237,0.96), rgba(214,235,226,0.86))',
    button: 'linear-gradient(135deg, #a5d6bb, #7bbf9d)',
  },
  {
    id: 9,
    path: '/l9',
    title: 'Candy Clouds',
    subtitle: 'The sweetest choice leads to the next surprise.',
    badge: 'Step 9',
    accent: '#f4a7c3',
    dark: '#42364d',
    panel: 'linear-gradient(135deg, rgba(255,230,240,0.96), rgba(245,219,237,0.88))',
    button: 'linear-gradient(135deg, #f7bed8, #ef8fb3)',
  },
  {
    id: 10,
    path: '/l10',
    title: 'Final Glow',
    subtitle: 'The last star is yours—choose the bright finish.',
    badge: 'Final Step',
    accent: '#f3c68d',
    dark: '#3c2e2d',
    panel: 'linear-gradient(135deg, rgba(255,240,216,0.96), rgba(243,207,178,0.9))',
    button: 'linear-gradient(135deg, #f8d69a, #f2a76f)',
  },
];

export const levelPages = levelThemes.map((theme, themeIndex) => {
  const nextPath = themeIndex < levelThemes.length - 1 ? levelThemes[themeIndex + 1].path : '/rules';

  function LevelPage() {
    const navigate = useNavigate();
    const { score, setScore, wrongStep, setWrongStep } = useAuth();
    const [message, setMessage] = useState('Pick the brightest choice to win 5 stars.');
    const [selectedCard, setSelectedCard] = useState(null);

    const choices = useMemo(
      () => [
        { id: 1, label: 'Sweetest memory', correct: true, emoji: '✦' },
        { id: 2, label: 'Warm surprise', correct: false, emoji: '♡' },
        { id: 3, label: 'Lucky sparkle', correct: false, emoji: '✧' },
        { id: 4, label: 'Happy moment', correct: true, emoji: '★' },
      ],
      []
    );

    const handlePick = (choice) => {
      setSelectedCard(choice.id);

      if (choice.correct) {
        setScore((prev) => prev + 5);
        setMessage(`Perfect! +5 stars unlocked. Moving to the next page...`);

        setTimeout(() => {
          navigate(nextPath);
        }, 800);

        return;
      }

      setWrongStep((prev) => prev + 1);
      setMessage('Not this one. Try again and keep the sparkle alive.');
    };

    return (
      <main
        className="min-h-screen px-4 py-8 sm:px-6 lg:px-8"
        style={{
          background: `radial-gradient(circle at top, ${theme.panel}, #fffdfd 45%, #f7eff5 100%)`,
          color: theme.dark,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-[2rem] border border-white/50 p-5 shadow-[0_28px_80px_rgba(52,35,40,0.10)] backdrop-blur-sm sm:p-8"
            style={{ background: theme.panel }}
          >
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: theme.dark, opacity: 0.7 }}
                >
                  {theme.badge}
                </p>
                <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">{theme.title}</h1>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold">
                  Stars: <span style={{ color: theme.accent }}>{score}</span>
                </div>
                <div className="rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold">
                  Wrong: <span style={{ color: theme.dark }}>{wrongStep}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <section>
                <div
                  className="rounded-[1.8rem] border border-white/60 p-5 sm:p-7"
                  style={{ background: 'rgba(255,255,255,0.38)' }}
                >
                  <span
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-sm"
                    style={{ background: 'rgba(255,255,255,0.7)', color: theme.dark }}
                  >
                    ✨
                  </span>
                  <h2 className="text-2xl font-semibold sm:text-3xl">{theme.subtitle}</h2>
                  <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: '#584f5d' }}>
                    {message}
                  </p>
                </div>
              </section>

              <section className="grid gap-3">
                {choices.map((choice) => {
                  const isActive = selectedCard === choice.id;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => handlePick(choice)}
                      className="group flex items-center justify-between rounded-[1.4rem] border px-4 py-4 text-left shadow-[0_16px_35px_rgba(51,38,40,0.06)] transition hover:-translate-y-0.5"
                      style={{
                        background: isActive ? 'rgba(255,255,255,0.74)' : 'rgba(255,255,255,0.44)',
                        borderColor: isActive ? theme.accent : 'rgba(255,255,255,0.5)',
                        color: theme.dark,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-lg"
                          style={{ background: theme.button, color: theme.dark }}
                        >
                          {choice.emoji}
                        </span>
                        <span className="font-medium">{choice.label}</span>
                      </span>

                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{ background: theme.button, color: theme.dark }}
                      >
                        +5
                      </span>
                    </button>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return { ...theme, path: theme.path, element: <LevelPage /> };
});

export default levelPages;
