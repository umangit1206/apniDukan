import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ApniDukan"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Apni_Dukan Website are built to connect Customer to products On the
            most basic level, site provide everything we need for online
            shopping. here User can login,search and also put product in cart
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
