import { useEffect, useState } from "react";
import styled from "styled-components";

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>My Troski</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li>
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <RiDashboard2Fill />
                  <span>Drivers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaAddressCard />
                  <span>Payment Details</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GiTwirlCenter />
                  <span>Learning Center</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BsFillChatTextFill />
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <IoSettings />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
};

export default Sidebar;

const Section = styled.section``;
