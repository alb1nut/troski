import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";

const data = [
  { data: 2500 },
  { data: 3500 },
  { data: 4500 },
  { data: 5500 },
  { data: 6500 },
  { data: 7500 },
  { data: 8500 },
  { data: 9500 },
  { data: 10500 },
  { data: 11500 },
  { data: 12500 },
  { data: 12500 },
  { data: 13500 },
  { data: 14500 },
  { data: 15500 },
  { data: 16500 },
  { data: 17500 },
  { data: 18500 },
  { data: 19500 },
  { data: 20500 },
];
const Earnings = () => {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This month earnings</h4>
          <h1>Ghc700.50</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
        <div className="chart">
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <Tooltip cursor={false} />
              <Area
                animationBegin={800}
                animationDuration={2000}
                type="momotone"
                dataKey="data"
                stroke="#41ff07"
                fill="#8068233e"
                strokeWidth={4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
};

export default Earnings;

const Section = styled.section``;
