import { useState } from 'react'
import sleepyPhoto from '../images/Screenshot_2024-10-20-07-45-55-107_com.whatsapp.jpg'
import { useAuth } from '../AuthProvider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const STAR_GOAL = 24

const NextLevel = () => {
  const { score } = useAuth()
  const navigate = useNavigate()
  const [stars, setStars] = useState(0)
  const isAwake = score >= STAR_GOAL || stars >= STAR_GOAL
  const progress = Math.min((score / STAR_GOAL) * 100, 100)

  const collectStar = () => {
    const nextScore = Math.min(score + 1, STAR_GOAL)
    setStars(nextScore)
    navigate('/rules')
  }

  const startAgain = () => {
    setStars(0)
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#17182e] px-5 py-10 text-[#f8f2e9]">
      <div aria-hidden="true" className="sleepy-sky" />
      <span aria-hidden="true" className="sleepy-star star-a">✦</span>
      <span aria-hidden="true" className="sleepy-star star-b">✧</span>
      <span aria-hidden="true" className="sleepy-star star-c">✦</span>
      <span aria-hidden="true" className="sleepy-moon">☾</span>

      <section className="sleepy-card relative z-10 grid w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#22233d]/90 shadow-2xl shadow-black/30 backdrop-blur-md md:grid-cols-[.85fr_1.15fr]">
        <div className="sleepy-photo-wrap relative min-h-64 md:min-h-[540px]">
          <div
            aria-hidden="true"
            className="sleepy-photo-backdrop"
            style={{ backgroundImage: `url("${sleepyPhoto}")` }}
          />
          <img className="sleepy-photo" src={sleepyPhoto} alt="Zakia taking a sleepy nap" />
          <div className="sleepy-photo-shade" />
          <div className="photo-label">
            <span>STATUS</span>
            <strong>{isAwake ? 'Wide awake ✨' : 'Still dreaming…'}</strong>
          </div>
          <span className="photo-zzz" aria-hidden="true">z<span>z</span><span>z</span></span>
        </div>

        <div className="flex flex-col justify-center px-7 py-9 sm:px-12 sm:py-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.24em] text-[#c6afd9]">
            {isAwake ? 'THE MORNING HAS ARRIVED' : 'A LITTLE MIDNIGHT MISSION'}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[#fffaf3] sm:text-5xl">
            {isAwake ? <>You’re awake,<br /><em className="text-[#e9c98d]">sleepyhead!</em></> : <>Oh no, you’re<br /><em className="text-[#e9c98d]">so sleepy…</em></>}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#c3bfd0]">
            {isAwake
              ? 'You did it! Your birthday surprise is ready. Wishing you the loveliest day, Zakia!'
              : 'There’s a surprise waiting, but you have to wake up first. Tap the moon and gather 24 little stars!'}
          </p>

          <div className="mt-8" aria-label={`${Math.max(score, stars)} of ${STAR_GOAL} stars collected`}>
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="font-medium tracking-wide text-[#ded8e8]">Wake-up stars</span>
              <span className="font-semibold tabular-nums text-[#e9c98d]">{Math.max(score, stars)}<span className="text-[#aaa4bc]"> / {STAR_GOAL}</span></span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-valuenow={Math.max(score, stars)}
              aria-valuemax={STAR_GOAL}
              aria-label="Wake-up star progress"
            >
              <div className="h-full rounded-full bg-gradient-to-r from-[#b7a0db] to-[#f0cf91] transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {isAwake ? (
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e9c98d]/30 bg-[#e9c98d]/10 px-4 py-2 text-sm text-[#f3dba9]" role="status">
                <span aria-hidden="true">✦</span> Surprise unlocked!
              </span>
              <button className="text-xs text-[#c3bfd0] underline decoration-white/30 underline-offset-4 hover:text-white" onClick={startAgain}>
                Play again
              </button>
            </div>
          ) : (
            <button
              className="wake-button mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#d8c3ea] px-5 py-3 font-semibold text-[#29243b] transition hover:-translate-y-0.5 hover:bg-[#e6d5f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf91] active:translate-y-0 sm:w-auto"
              onClick={collectStar}
            >
              <span aria-hidden="true" className="text-lg">☾</span>
              Tap to wake up
              <span aria-hidden="true">✦</span>
            </button>
          )}
          <p className="mt-5 text-[11px] text-[#8f8aa5]" aria-live="polite">
            {isAwake ? 'Happy birthday, Zakia! ♡' : 'One tap, one star. You’ve got this.'}
          </p>
        </div>
      </section>
    </main>
  )
}

export default NextLevel
