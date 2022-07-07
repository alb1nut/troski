import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Analytics from "./Analytics";
import Profile from "./Profile";
import Transfers from "./Transfers";
import Earnings from "./Earnings";

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row_one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row_two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row_one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row_two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;
