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

const Section = styled.section``;
