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
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>Troski</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span>Drivers</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <a href="#">
                  <FaAddressCard />
                  <span>Payment Details</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span>Learning Center</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <a href="#">
                  <BsFillChatTextFill />
                  <span>FAQs</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : "null"}
              >
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

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: spacebetween;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #41ff07;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #41ff07;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #41ff07;
            a {
              color: #000;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #fff;
          }
        }
        .active {
          background-color: #41ff07;
          a {
            color: #000;
          }
        }
      }
    }
  }
`;
