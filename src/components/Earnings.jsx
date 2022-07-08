import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";

const data = [
  { data: 2500 },
  { data: 3500 },
  { data: 2700 },
  { data: 4500 },
  { data: 5500 },
  { data: 5000 },
  { data: 6000 },
  { data: 7500 },
  { data: 7700 },
  { data: 7000 },
  { data: 8000 },
  { data: 8500 },
  { data: 8400 },
  { data: 7500 },
  { data: 8900 },
  { data: 9500 },
  { data: 9100 },
  { data: 11000 },
  { data: 10100 },
  { data: 11000 },
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
      h1 {
        font: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #41ff07;
          span {
            color: #000;
          }
        }
        span {
          color: #41ff07;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: #000 !important;
      border-color: #000 !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
