import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ZNH = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#fbf6ef] px-5 py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f0dcd5]/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#e7deeb]/70 blur-3xl" />

      <section className="relative w-full max-w-xl rounded-3xl border border-[#eadfd7] bg-white/80 p-8 text-center shadow-[0_24px_70px_rgba(71,49,54,0.12)] backdrop-blur-sm sm:p-12">
        <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-full bg-[#f7e9e4] text-2xl text-[#c77871]" aria-hidden="true">✿</span>
        <h1 className="mt-4 animate-[appear_.7s_ease-out_both] font-display text-3xl text-[#312c36] sm:text-4xl">
          Welcome to the <span className="text-[#c77871]">25 Years Journey!</span>
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#77717a]">Your next beautiful chapter begins now.</p>
        <button className="btn mt-7 border-0 bg-[#c77871] px-7 text-white hover:bg-[#b56b65]" onClick={() => setIsModalOpen(true)}>
          Show me
        </button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#312c36]/35 px-5 py-8 backdrop-blur-sm" role="presentation" onClick={() => setIsModalOpen(false)}>
          <section
            aria-labelledby="next-surprise-title"
            aria-modal="true"
            className="w-full max-w-md animate-[appear_.25s_ease-out_both] rounded-3xl border border-[#eadfd7] bg-[#fffdf9] p-8 text-center shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-full bg-[#f7e9e4] text-2xl text-[#c77871]" aria-hidden="true">♡</span>
            <h2 id="next-surprise-title" className="font-display text-3xl text-[#312c36]">
              Welcome to the 25 Years Journey!
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#77717a]">
              Your next beautiful chapter begins now.
            </p>
            <button
              className="btn mt-7 w-full border-0 bg-[#c77871] text-white hover:bg-[#b56b65]"
              onClick={() => navigate('/next-level')}
            >
              Begin the journey <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-ghost mt-2 w-full text-[#82777e]" onClick={() => setIsModalOpen(false)}>
              Not now
            </button>
          </section>
        </div>
      )}
    </main>
  )
}

export default ZNH
