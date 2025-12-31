import React from 'react'

export default function ScoreInfoCard({ onClose }) {
  return (
    <aside className="score-info-card" role="dialog" aria-label="Score information">
      <div className="score-info-header">
        <strong>Dashboard Scores — Quick Guide</strong>
        <button className="score-close" onClick={onClose} aria-label="Close info">×</button>
      </div>

      <div className="score-info-body">
        <p>
          <strong>Trust Score</strong>: A number from 0–100 representing overall safety. Higher is
          better — near 100 means the system sees very little risk; lower values indicate more
          potential concern.
        </p>

        <p>
          <strong>Threats Blocked</strong>: The total count of detected threats or risky items the
          system flagged and prevented. This is cumulative and shows how much protection has
          been applied.
        </p>

        <p>
          <strong>Activity Analysis</strong>: A short-term view of recent activity. Calm/low bars
          mean normal behavior; spikes signal unusual or suspicious activity that may need
          attention.
        </p>
      </div>
    </aside>
  )
}
