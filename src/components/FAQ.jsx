import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { cardStyle } from "./ReusableStyles";
const FAQ = () => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks for a trips",
    },
    {
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      icon: <AiFillCalendar />,
      text: "Withdrawing money through an ATM",
    },
  ];
  return <div></div>;
};

export default FAQ;
