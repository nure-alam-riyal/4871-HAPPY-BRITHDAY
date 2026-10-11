import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider/AuthProvider'

const rules = [
  {
    id: '01',
    title: 'Choose a photo',
    text: 'Pick one photo on each level to continue.',
    accent: 'from-[#f9d9d2] to-[#f3e4d7]',
    icon: '♡',
  },
  {
    id: '02',
    title: 'Earn stars',
    text: 'A correct choice adds 1 star.',
    accent: 'from-[#e7ddf7] to-[#f5ecdc]',
    icon: '✦',
  },
  {
    id: '03',
    title: 'Keep playing',
    text: 'A wrong choice costs 1–5 stars and is included in your final results.',
    accent: 'from-[#f4d9a6] to-[#f7e8cf]',
    icon: '→',
  },
]

export default function LevelsRolus() {
  const navigate = useNavigate()
  const { setGameStartedAt } = useAuth()

  const handleStart = () => {
    setGameStartedAt(Date.now())
    navigate('/l1')
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf6ef] px-4 py-10 text-[#312c36] sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f4d9d3]/80 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-14 right-0 h-96 w-96 rounded-full bg-[#e7deeb]/80 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#ebddd7] bg-white/80 shadow-[0_30px_80px_rgba(90,64,70,0.12)] backdrop-blur-sm">
          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-10">
            <section>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a7857d]">Before you begin</p>
              <h1 className="max-w-lg text-4xl font-semibold leading-tight text-[#312c36] sm:text-5xl">
                Ready to play?
              </h1>

              <button
                type="button"
                onClick={handleStart}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c77871] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(199,120,113,0.28)] transition hover:-translate-y-0.5 hover:bg-[#b96a62]"
              >
                Start game
                <span aria-hidden="true">→</span>
              </button>
            </section>

            <section className="space-y-4">
              {rules.map((rule) => (
                <article
                  key={rule.id}
                  className={`rounded-3xl border border-[#f1e3df] bg-gradient-to-r ${rule.accent} p-4 shadow-[0_12px_30px_rgba(85,64,72,0.05)]`}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/75 text-lg font-bold text-[#4d3a48] shadow-sm">
                      {rule.icon}
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b7b80]">Rule {rule.id}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-[#312c36]">{rule.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[#574e56]">{rule.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
