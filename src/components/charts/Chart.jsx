import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "1",
      Total: 0,
    },
    {
      name: "2",
      Total: 1000,
    },
    {
      name: "3",
      Total: 2000,
    },
    {
      name: "4",
      Total: 2780,
    },
    {
      name: "5",
      Total: 1890,
    },
    {
      name: "6",
      Total: 2390,
    },
    {
      name: "7",
      Total: 3490,
    },
    {
      name: "8",
      Total: 2000,
    },
    {
      name: "9",
      Total: 2780,
    },
    {
      name: "10",
      Total: 1890,
    },
    {
      name: "11",
      Total: 2390,
    },
    {
      name: "12",
      Total: 3490,
    },
  ];
  return (
    <div className="col-12 col-lg-8 p-2 ">
      <div className="box-shadowed w-100 h-100 d-flex justify-content-center gad">
        <AreaChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
}

export default Chart;
