export function downloadReport() {
  const url = URL.createObjectURL(
    new Blob(
      [
        "Metric,Value,Change\nTotal Sales,263000,15.6%\nTotal Visitors,35000,-6.2%\nTotal Orders,165000,3.5%\nConversion,58.19%,3.5%\nIncome,542317,\nExpenses,497456,\n",
      ],
      { type: "text/csv" },
    ),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "flex-report.csv";
  link.click();
  URL.revokeObjectURL(url);
}
