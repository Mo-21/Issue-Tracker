"use client";
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ closed, inProgress, open }: Props) => {
  const data = [
    { label: "open", number: open },
    { label: "closed", number: closed },
    { label: "inProgress", number: inProgress },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Bar
          dataKey="number"
          barSize={60}
          style={{ fill: "var(--accent-9)" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IssueChart;
