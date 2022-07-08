import React from "react";
import styled from "styled-components";

import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from "./ReusableStyles";
const Transfers = () => {
  const transactions = [
    {
      image: avatarImage,
      name: "From Daniel Owusu",
      time: "Today, 16:35",
      amount: "+Ghc50",
    },
    {
      image: avatarImage,
      name: "To Absa Bank",
      time: "Today, 08:35",
      amount: "-Ghc400",
    },
    {
      image: avatarImage,
      name: "From Kofi Dadzi",
      time: "Yesterday, 12:35",
      amount: "+Ghc200",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src="{transaction.image}" alt="transaction image" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="tranaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Transfers;

const Section = styled.section``;
