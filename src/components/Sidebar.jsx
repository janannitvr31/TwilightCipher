import React from 'react'

const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="3" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="10" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const IconAnalytics = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="4" y="10" width="3" height="10" rx="0.5" fill="currentColor" />
    <rect x="10.5" y="6" width="3" height="14" rx="0.5" fill="currentColor" />
    <rect x="17" y="2" width="3" height="18" rx="0.5" fill="currentColor" />
  </svg>
)

const IconHistory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.28 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.23-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.1 2.28l.06.06c.5.5 1.29.64 1.96.39.46-.17 1-.28 1.51-.28H12a2 2 0 1 1 4 0h.09c.51 0 1.05.11 1.51.28.67.25 1.46.11 1.96-.39l.06-.06A2 2 0 1 1 21.72 7.1l-.06.06c-.5.5-.64 1.29-.39 1.96.17.46.28 1 .28 1.51V12a2 2 0 1 1 0 4h-.09c-.7 0-1.23.39-1.51 1z" stroke="currentColor" strokeWidth="0.9" fill="none" />
  </svg>
)

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-mark">⚡</span>
        <span className="logo-text">Control</span>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <button className="nav-btn active" onClick={() => console.log('Dashboard clicked')} aria-pressed="true">
          <IconDashboard />
          <span className="btn-label">Dashboard</span>
        </button>

        <button className="nav-btn" onClick={() => console.log('Analytics clicked')} aria-pressed="false">
          <IconAnalytics />
          <span className="btn-label">Analytics</span>
        </button>

        <button className="nav-btn" onClick={() => console.log('History clicked')} aria-pressed="false">
          <IconHistory />
          <span className="btn-label">History</span>
        </button>

        <button className="nav-btn" onClick={() => console.log('Settings clicked')} aria-pressed="false">
          <IconSettings />
          <span className="btn-label">Settings</span>
        </button>
      </nav>
    </aside>
  )
}
