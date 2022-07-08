import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
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
  return (
    <Section>
      <div className="title">
        <h2>Information for Drivers</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq) => (
          <div className="faq">
            <div className="info">
              {faq.icon}
              <h4>{faq.text}</h4>
            </div>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;

const Section = styled.section``;
