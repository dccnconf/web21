import Layout from "../components/layout";
import React from "react";
import CFP from "../components/CFP";
import getTopics from "../libs/topics";

const AuthorsPage = ({ topics }) => {
  return (
    <Layout pageTitle={"Authors | DCCN'2020"} active="authors">
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-extrabold text-3xl md:text-5xl lg:mt-12">Call for Papers</h2>
          <CFP
            topics={topics}
            className="pt-6 md:container mx-6 md:mx-auto text-gray-600 lg:w-1/2"
          />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = (context = {}) => {
  const { locale } = context;
  return {
    props: {topics: getTopics(locale)}
  }
};

export default AuthorsPage;
