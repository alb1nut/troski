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
      amount: "+50",
    },
    {
      image: avatarImage,
      name: "To Absa Bank",
      time: "Today, 08:35",
      amount: "-400",
    },
    {
      image: avatarImage,
      name: "From Kofi Dadzi",
      time: "Yesterday, 12:35",
      amount: "+200",
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
                  <img src={transaction.image} alt="transaction image" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
};

export default Transfers;

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #41ff07;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      /* flex-direction: column; */
      justify-content: space-between;
      align-items: center;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
          h3 {
            font-size: 0.9rem;
            font-weight: 600;
          }
          h5 {
            font-size: 0.7rem;
            font-weight: 400;
          }
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
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
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #41ff07;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3 ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translate(0.5rem);
      }
    }
  }
`;
