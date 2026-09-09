export default function ConversionCard() {
  return (
    <section className="conversion-card">
      <h2>Conversion</h2>
      <div className="gauge">
        <svg
          viewBox="0 0 360 195"
          role="img"
          aria-label="Conversion 58.19 percent, up 3.5 percent"
        >
          <defs>
            <linearGradient id="gaugeGradient" x1="0" y1="1" x2="1" y2="0">
              <stop stopColor="#a597ff" />
              <stop offset=".55" stopColor="#705cff" />
              <stop offset="1" stopColor="#5340ff" />
            </linearGradient>
          </defs>
          <path
            d="M38 176a142 142 0 0 1 284 0"
            stroke="#efecfd"
            strokeWidth="68"
            fill="none"
          />
          <path
            d="M38 176a142 142 0 0 1 258-82"
            stroke="url(#gaugeGradient)"
            strokeWidth="68"
            fill="none"
          />
          <path d="m251 124 79-61-68 76Z" fill="#8874da" />
          <text x="180" y="149" textAnchor="middle" className="gauge-value">
            58.19%
          </text>
          <text x="180" y="175" textAnchor="middle" className="gauge-growth">
            ↑ 3.5%
          </text>
        </svg>
      </div>
      <div className="conversion-legend">
        <div>
          <span className="income-arrow">↙</span>
          <span>Income</span>
          <strong>$542,317</strong>
        </div>
        <div>
          <span className="expense-arrow">↗</span>
          <span>Expences</span>
          <strong>$497,456</strong>
        </div>
      </div>
    </section>
  );
}
