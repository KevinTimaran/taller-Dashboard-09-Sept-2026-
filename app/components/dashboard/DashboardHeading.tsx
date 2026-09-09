"use client";

import Icon from "./Icon";
import { downloadReport } from "../../lib/download-report";
export default function DashboardHeading() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <span className="title-icon">
          <Icon name="home" />
        </span>
        <h1>Dashboard</h1>
      </div>
      <div className="heading-actions">
        <label className="select-control period-select">
          <Icon name="calendar" />
          <select aria-label="Report period">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <Icon name="chevron" />
        </label>
        <button
          className="green-button download-button"
          onClick={downloadReport}
        >
          <Icon name="download" />
          Download Report
        </button>
      </div>
    </div>
  );
}
