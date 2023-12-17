"use client";
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from "recharts";

interface Props {
  props: {
    open: number;
    inProgress: number;
    closed: number;
  };
}

const IssueChart = ({ props }: Props) => {
  const data = [
    { label: "Open", number: props.open },
    { label: "Closed", number: props.closed },
    { label: "In Progress", number: props.inProgress },
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
