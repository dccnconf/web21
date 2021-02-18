import React from "react";
import Layout from "../components/layout";
import EmptyPagePlaceholder from "../components/EmptyPagePlaceholder";

const ProgramPage = () => {
  return (
    <Layout pageTitle={"Schedule | DCCN'2021"} active="program">
      <section className="container mx-auto md:w-3/4 px-4 md:px-0" id="top">
        <EmptyPagePlaceholder
            imageName="undraw_season_change_f99v.svg"
            imageAlt="Image about season change"
        >
          <p className="md:text-xl">We will publish the program after the review process is over.</p>
        </EmptyPagePlaceholder>
      </section>
    </Layout>
  );
};

export default ProgramPage;
