export default function SessionsChart({ month }: { month: string }) {
  return (
    <div className="line-chart">
      <svg
        viewBox="0 0 400 205"
        role="img"
        aria-label={`Sessions over time in ${month}: rising from zero to fifteen`}
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop stopColor="#dcd4ff" />
            <stop offset="1" stopColor="#5841e9" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#7964ee" stopOpacity=".14" />
            <stop offset="1" stopColor="#7964ee" stopOpacity="0" />
          </linearGradient>
          <filter id="lineShadow" x="-20%" y="-30%" width="140%" height="170%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="5"
              floodColor="#6b50de"
              floodOpacity=".2"
            />
          </filter>
        </defs>
        <g className="chart-grid">
          <path d="M38 22H396M38 74H396M38 125H396M38 177H396" />
        </g>
        <g className="axis-label">
          <text x="1" y="28">
            15
          </text>
          <text x="1" y="80">
            10
          </text>
          <text x="1" y="131">
            5
          </text>
          <text x="1" y="183" fill="#17152d">
            0
          </text>
        </g>
        <path
          d="M38 177C70 176 71 104 101 115S145 169 180 162S218 78 259 102S303 187 338 130S361 20 396 25V177H38Z"
          fill="url(#areaGradient)"
        />
        <path
          d="M38 177C70 176 71 104 101 115S145 169 180 162S218 78 259 102S303 187 338 130S361 20 396 25"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2.7"
          filter="url(#lineShadow)"
        />
      </svg>
    </div>
  );
}
