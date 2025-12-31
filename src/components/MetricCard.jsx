import React from 'react'

export default function MetricCard({ title, value, progress }) {
  return (
    <div className="card">
      <p className="label">{title}</p>
      <h2>{value}</h2>
      {progress !== undefined && (
        <div className="bar" aria-hidden>
          <div className="bar-fill" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
      )}
    </div>
  )
}
