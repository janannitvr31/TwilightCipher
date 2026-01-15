import React from 'react'

export default function ActivityCard({ data = [] }) {
  const max = Math.max(...data, 10)

  return (
    <section className="activity card">
      <p className="label">Activity Analysis</p>
      <div className="activity-chart" aria-hidden>
        {data.length === 0 && <div className="chart-placeholder" />}

        {data.map((v, i) => (
          <div
            key={i}
            className={`bar-item ${v > (max * 0.6) ? 'spike' : ''}`}
            style={{ height: `${(v / max) * 100}%` }}
            title={`Activity ${v}`}
          />
        ))}
      </div>
    </section>
  )
}
