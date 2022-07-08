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
  return <Section></Section>;
};

export default Transfers;

const Section = styled.section``;
