import React from "react";
import styled from "styled-components";
import image from "../assets/avatarImage.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Patrick Densu</h2>
        <h5>
          <HiOutlineLocationMarker />
          Accra Ghana
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>27</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>445</h3>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
};

export default Profile;

const Section = styled.section``;
