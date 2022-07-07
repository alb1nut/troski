import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Albert</h4>
        <h1>
          Welcome to <span>TROSKI DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #41ff07;
      }
    }
  }
`;
