import React from "react";
import NavBar from "./NavBar";
import Podcasts from "./Podcasts";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export default function PageOne(props) {
  return (
    <div className="" id="">
      <Helmet>
        <title>This is the home page of the react test</title>
        <meta
          name="description"
          content="This is a description for the home page"
        />
      </Helmet>
      <NavBar></NavBar>
      <Podcasts></Podcasts>
      <Footer></Footer>
    </div>
  );
}
