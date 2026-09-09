"use client";

import { useState } from "react";
import Icon from "./Icon";
import Growth from "./Growth";
import SessionsChart from "./SessionsChart";
import { downloadReport } from "../../lib/download-report";
export default function SessionsCard() {
  const [day, setDay] = useState(21);
  const [month, setMonth] = useState("February");
  return (
    <section className="sessions-card">
      <div className="card-heading">
        <h2>Online Store Sessions</h2>
        <button className="outline-button" onClick={downloadReport}>
          View Report
        </button>
      </div>
      <div className="session-summary">
        <span className="icon-bubble">
          <Icon name="users" />
        </span>
        <div className="visitor-count">
          <span>Visitors</span>
          <strong>68</strong>
        </div>
        <div className="session-growth">
          <Growth>15.6%</Growth>
          <div>
            <span className="previous-value">26</span>
            <Growth down>1.6%</Growth>
          </div>
        </div>
      </div>
      <div className="chart-heading">
        <h3>Sessions Over Time</h3>
        <label className="select-control month-select">
          <Icon name="calendar" />
          <select
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            aria-label="Chart month"
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <Icon name="chevron" />
        </label>
      </div>
      <SessionsChart month={month} />
      <div className="chart-pagination">
        <button
          className="circle-button"
          aria-label="Previous day"
          onClick={() => setDay(Math.max(1, day - 1))}
        >
          ‹
        </button>
        {[21, 22, 23, 24, 25].map((d) => (
          <button
            key={d}
            className={`day-button ${day === d ? "selected" : ""}`}
            onClick={() => setDay(d)}
            aria-pressed={day === d}
          >
            {d}
          </button>
        ))}
        <button
          className="circle-button"
          aria-label="Next day"
          onClick={() => setDay(Math.min(31, day + 1))}
        >
          ›
        </button>
      </div>
    </section>
  );
}
