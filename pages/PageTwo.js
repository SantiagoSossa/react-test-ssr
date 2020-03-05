import React from "react";
// import classes from "../css/PageTwo.module.css";
import LinkToPage from "./Link";
import Link from "next/link";
import { Helmet } from "react-helmet";

export default function PageTwo(props) {
  return (
    <div className="PageTwo">
      <Helmet>
        <title>This is page 2</title>
        <meta
          name="description"
          content="This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. "
        />
         <meta name="keywords" content="react,seo,helmet" />
      </Helmet>
      <h1>This is page 2</h1>
      <p>
        This is page 2 description. This is page 2 description. This is page 2
        description. This is page 2 description. This is page 2 description.
        This is page 2 description. This is page 2 description. This is page 2
        description. This is page 2 description. This is page 2 description.
        This is page 2 description. This is page 2 description. This is page 2
        description. This is page 2 description. This is page 2 description.
        This is page 2 description. This is page 2 description. This is page 2
        description. This is page 2 description.{" "}
      </p>
     <Link href="/index"><h2 className="GoBackLink">Go back to Index Page</h2></Link>
      <div className="Links">
        <LinkToPage name="facebook" href="https://facebook.com"></LinkToPage>
        <LinkToPage name="instagram" href="https://instagram.com"></LinkToPage>
        <LinkToPage name="twitter" href="https://twitter.com"></LinkToPage>
      </div>
    </div>
  );
}
