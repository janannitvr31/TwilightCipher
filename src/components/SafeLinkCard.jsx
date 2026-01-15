export default function SafeLinkCard({ status, message }) {
  const isSafe = status === 'safe'
  return (
    <div className="safe-card">
      <div
        className="check"
        style={{
          borderColor: isSafe ? '#22c55e' : '#ef4444',
          color: isSafe ? '#22c55e' : '#ef4444'
        }}
      >
        {isSafe ? '✔' : '!'}
      </div>

      <h3>{isSafe ? 'Safe Link' : 'Unsafe Link'}</h3>
      <p>{message}</p>
    </div>
  )
}
