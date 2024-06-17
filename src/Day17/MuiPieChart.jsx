import { PieChart } from "@mui/x-charts";
function MuiPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series1" },
            { id: 1, value: 30, label: "series2" },
            { id: 2, value: 20, label: "series3" },
            { id: 3, value: 40, label: "series4" },
            { id: 4, value: 8, label: "series5" },
            { id: 5, value: 15, label: "series6" },
          ],
        },
      ]}
      width={400}
      height={200}
    ></PieChart>
  );
}

export default MuiPieChart;
