import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Privacy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
