import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

const memories = [
  { number: '01', title: 'The little things', text: 'Your laugh from the next room. The “look at this!” texts. The way ordinary days get a little brighter.', icon: '✿', tone: 'rose' },
  { number: '02', title: 'The big things', text: 'Your courage, your kindness, and that rare way you make everyone around you feel seen.', icon: '✷', tone: 'lilac' },
  { number: '03', title: 'The in-between', text: 'All the unplanned adventures, long conversations, and moments we didn’t know would become favorites.', icon: '♡', tone: 'gold' },
]

function Sparkle({ className = '' }) {
  return <span aria-hidden="true" className={`sparkle ${className}`}>✦</span>
}

function Header() {
  return (
    <header className="navbar site-nav">
      <Link to="/" className="brand" aria-label="Birthday home">
        <span className="brand-mark">✳</span>
        <span>the birthday edit</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>The day</NavLink>
        <NavLink to="/memories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Little reminders</NavLink>
        <NavLink to="/letter" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>A note for you</NavLink>
      </nav>
      <a className="nav-date" href="#birthday-note">made with love <span>♥</span></a>
    </header>
  )
}

function Confetti() {
  return <div className="confetti" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ left: `${(i * 37 + 5) % 100}%`, backgroundColor: `hsl(${i * 37}, 55%, 68%)`, animationDelay: `${i * 25}ms`, transform: `rotate(${i * 31}deg)` }} />)}</div>
}

function Home({ celebrate }) {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A VERY IMPORTANT DAY <span /></div>
            <h1>Today is all<br />about <em>you.</em></h1>
            <p className="hero-description">A little corner of the internet to celebrate the person who makes life feel a bit more lovely.</p>
            <div className="hero-actions">
              <button className="btn celebrate-btn" onClick={celebrate}>Make a little wish <span aria-hidden="true">↗</span></button>
              <Link to="/letter" className="text-link">There's a note for you <span>→</span></Link>
            </div>
            <div className="hero-signoff"><span className="avatar-stack"><i>♡</i><i>✿</i><i>✦</i></span><span>Celebrating <strong>you, always</strong></span></div>
          </div>
          <div className="hero-art">
            <div className="art-halo" />
            <div className="hero-photo">
              <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85" alt="Colorful birthday balloons and celebration" />
              <div className="photo-wash" />
              <div className="photo-caption"><span>another trip around the sun</span><strong>and somehow, even brighter</strong></div>
            </div>
            <div className="floating-note note-one"><span>✷</span><small>your day</small></div>
            <div className="floating-note note-two"><span>♡</span><small>your magic</small></div>
            <Sparkle className="sparkle-one" />
            <Sparkle className="sparkle-two" />
            <div className="art-stamp">HAPPY<br /><em>birthday</em><br />TO YOU!</div>
          </div>
          <a href="#birthday-note" className="scroll-cue"><span /> SCROLL A LITTLE</a>
        </section>

        <section className="birthday-note" id="birthday-note">
          <div className="section-kicker">A NOTE FOR THE MAIN CHARACTER</div>
          <div className="note-layout">
            <h2>Another year of<br /><em>being wonderful.</em></h2>
            <div className="note-copy">
              <p>Here’s to more belly laughs, slow mornings, last-minute plans that turn into the best stories, and all the good things you so easily give to everyone else.</p>
              <Link to="/memories" className="text-link">A few things worth celebrating <span>→</span></Link>
            </div>
          </div>
          <div className="note-bottom"><span>WISHING YOU THE VERY, VERY BEST</span><Sparkle /></div>
        </section>

        <section className="mini-memories">
          <div><span className="section-kicker">IN CASE YOU FORGET</span><h2>The world is luckier<br />with <em>you in it.</em></h2></div>
          <Link to="/memories" className="memory-link">A little reminder <span>↗</span></Link>
          <div className="memory-doodles" aria-hidden="true"><span>♡</span><span>✷</span><span>✿</span></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Memories() {
  return (
    <>
      <main className="inner-page memories-page">
        <div className="inner-heading">
          <div className="eyebrow"><span /> A FEW LITTLE REMINDERS <span /></div>
          <h1>Things we hope<br />you <em>never forget.</em></h1>
          <p>Because birthdays are a good excuse to say the nice things out loud.</p>
        </div>
        <div className="memory-grid">
          {memories.map((memory) => <article className={`memory-card ${memory.tone}`} key={memory.number}>
            <div className="memory-card-top"><span>{memory.number} / 03</span><span className="memory-icon">{memory.icon}</span></div>
            <h2>{memory.title}</h2>
            <p>{memory.text}</p>
            <div className="card-underline" />
          </article>)}
        </div>
        <div className="memories-bottom"><span>AND SO MUCH MORE, EVERY SINGLE DAY</span><Link to="/letter" className="text-link">One last thing <span>→</span></Link></div>
      </main>
      <Footer />
    </>
  )
}

function Letter() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <main className="inner-page letter-page">
        <div className="eyebrow"><span /> SEALED WITH A LITTLE LOVE <span /></div>
        <h1>A little note,<br /><em>just for you.</em></h1>
        <button className={`letter-card ${opened ? 'opened' : ''}`} onClick={() => setOpened(!opened)} aria-expanded={opened}>
          <span className="letter-topline">TO MY FAVORITE HUMAN</span>
          <span className="letter-heart">{opened ? '♥' : '♡'}</span>
          {opened ? <span className="letter-message">I hope this next trip around the sun brings you the kind of happiness you bring to everyone around you. You deserve all of it, and then some.<br /><br />Happy birthday. So glad you’re you.<br /><br /><em>With all my love, always.</em></span> : <span className="letter-prompt">Tap to open your birthday note <span>↗</span></span>}
          <span className="letter-footer">A SMALL REMINDER OF HOW MUCH YOU’RE LOVED</span>
        </button>
        <Link to="/" className="text-link back-link">← Back to your day</Link>
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  return <footer className="site-footer"><Link to="/" className="brand"><span className="brand-mark">✳</span><span>the birthday edit</span></Link><span>Made with love, just for you <b>♥</b></span><span>ONE MORE YEAR OF YOU</span></footer>
}

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false)
  const celebrate = () => {
    setShowConfetti(true)
    window.setTimeout(() => setShowConfetti(false), 1900)
  }

  return <div data-theme="birthday" className="app-shell">
    <Header />
    {showConfetti && <Confetti />}
    <Routes>
      <Route path="/" element={<Home celebrate={celebrate} />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="*" element={<Home celebrate={celebrate} />} />
    </Routes>
  </div>
}
