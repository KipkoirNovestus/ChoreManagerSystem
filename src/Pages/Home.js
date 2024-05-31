import React from "react";
import { Container } from "react-bootstrap";
import Agencies from "./Agencies";
import BookDemo from "./BookDemo";
import BusinessServices from "./BusinessServices";
import Consultancies from "./Consultancies";
import CreativeDigital from "./CreativeDigital";
import Industries from "./Industries";
import OtherServices from "./OtherServices";
import Pricing from "./Pricing";
import Products from "./Products";
import Professionals from "./Professionals";
import Templates from "./Templates";
import Views from "./Views";

const Home = () => {
  return (
    <>
      <Container>
        <Agencies />
        <BookDemo />
        <BusinessServices />
        <Consultancies />
        <CreativeDigital />
        <Industries />
        <OtherServices />
        <Pricing />
        <Products />
        <Professionals />
        <Templates />
        <Views />
      </Container>
    </>
  );
};

export default Home;
