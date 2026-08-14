import React from 'react'

function App() {
  return (
    <main className="container">
      <div className="content">
        {/* Brand */}
        <div className="brand">
          <h1 className="brand-text">Studyone</h1>
        </div>

        {/* Main Heading */}
        <div className="heading-section">
          <h2 className="main-heading">Coming Soon!</h2>
          <p className="tagline">Everything a student needs, in one place.</p>
        </div>

        {/* Launch Date */}
        <div className="date-section">
          <p className="launch-date">1 September 2026</p>
        </div>

        {/* Supporting Message */}
        <div className="message-section">
          <p className="message">Come back on 1 September 2026 to access the new Studyone website.</p>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Footer Message */}
        <footer className="footer-message">
          <p>A new student experience is on the way.</p>
        </footer>
      </div>
    </main>
  )
}

export default App
