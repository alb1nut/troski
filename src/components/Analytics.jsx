import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>Ghc799</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>Ghc350</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <BiGroup />
        </div>
        <div className="logo">
          <h5>New Clients</h5>
          <h2>400</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <h5>Activity</h5>
          <h2>Ghc799</h2>
        </div>
        <div className="content">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
};

export default Analytics;

const Section = styled.section``;
