import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaSadCry } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import FallingDecorations from './FallingDecorations'

const ProveYou = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [isGateModalOpen, setIsGateModalOpen] = useState(true)
  const navigate = useNavigate()

  const handleInfo = (event) => {
    event.preventDefault()
    if (name.trim().toLowerCase() === 'zakia nishat') {
      navigate('/welcome')
      return
    }

    toast.error('Are you forget your name !!!')
    setError(true)
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#fbf6ef] px-5">
      <FallingDecorations />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-40 w-40 animate-pulse rounded-full bg-[#f0dcd5]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[14%] right-[13%] h-48 w-48 animate-pulse rounded-full bg-[#e7deeb]/70 blur-3xl [animation-delay:700ms]" />

      <section className="animate-[appear_.7s_ease-out_both] relative w-full max-w-md rounded-3xl border border-[#eadfd7] bg-white/80 p-7 shadow-[0_24px_70px_rgba(71,49,54,0.12)] backdrop-blur-sm sm:p-10">
        <div className="mx-auto mb-6 grid h-12 w-12 animate-[float_3s_ease-in-out_infinite] place-items-center rounded-full bg-[#f7e9e4] text-xl text-[#c77871]" aria-hidden="true">
          ✿
        </div>

        <div className="mb-6 rounded-2xl bg-[#fff7f3] px-4 py-3 text-center">
          <h1 className="text-sm font-medium text-green-600" aria-live="polite">
            Welcome to the 25 Years Journey!
          </h1>
        </div>

        <h1 className="text-center font-display text-3xl leading-tight text-[#312c36] sm:text-4xl">
          Are you <span className="text-[#c77871]">Zakia Nishat?</span>
        </h1>

        <form className="mt-8" onSubmit={handleInfo}>
          <input
            aria-label="Enter your name"
            aria-invalid={error}
            autoComplete="name"
            className={`input input-bordered w-full bg-[#fffdf9] text-center text-[#312c36] placeholder:text-[#aaa0a3] focus:outline-none ${error ? 'border-[#c77871] focus:border-[#c77871]' : 'border-[#e8d9cf] focus:border-[#c77871]'}`}
            onChange={(event) => {
              setName(event.target.value)
              setError(false)
            }}
            placeholder="Enter your name"
            required
            type="text"
            value={name}
          />
          
          <button className="btn mt-4 w-full border-0 bg-[#c77871] text-white shadow-md shadow-[#c77871]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b56b65]" type="submit">
            Continue <span aria-hidden="true">→</span>
          </button>
          {error && <div className=" flex justify-center mt-2 text-center text-xs text-[#b5b465]" role="alert"><div className=' w-40 h-12'><FaSadCry className='w-full h-full' /></div>
</div>}
        </form>
      </section>

      {isGateModalOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#312c36]/55 px-5 py-8 backdrop-blur-sm"
          onClick={() => setIsGateModalOpen(false)}
        >
          <section
            aria-labelledby="journey-gate-title"
            aria-modal="true"
            className="w-full max-w-lg animate-[appear_.35s_ease-out_both] rounded-3xl border border-[#eadfd7] bg-[#fffdf9] p-7 text-center shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-full bg-[#f7e9e4] text-2xl text-[#c77871]" aria-hidden="true">
              ✿
            </span>
            <h2 id="journey-gate-title" className="mt-4 font-display text-3xl text-[#312c36] sm:text-4xl">
              The wait is over!
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#77717a]">Enter your name to begin the journey.</p>
            <button
              className="btn mt-7 w-full border-0 bg-[#c77871] text-white hover:bg-[#b56b65]"
              onClick={() => setIsGateModalOpen(false)}
              type="button"
            >
              Enter the journey <span aria-hidden="true">→</span>
            </button>
          </section>
        </div>
      )}
    </main>
  )
}

export default ProveYou
