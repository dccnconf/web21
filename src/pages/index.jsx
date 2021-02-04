import Layout from '../components/layout';
import React from "react";
import Hero from '../components/Hero';
import About from "../components/About";
import Timeline from "../components/Timeline";
import {getDeadlines} from "../libs/deadlines";
import SponsorsImageGallery from "../components/SponsorsImageGallery";
import getAllTracks from "../libs/tracks";
import {getAllOrganizations} from "../libs/organizations";
import {getAllCommitteeMembers} from "../libs/committee";
import {getAllTpcMembers} from "../libs/tpc";
import CommitteeMembersList from "../components/CommitteeMembersList";
import TpcMembersList from "../components/TpcMembersList";

export default function Home ({
  deadlines,
  tracks,
  organizations,
  committeeMembers,
  tpcMembers
}) {
  return (
    <Layout pageTitle={"DCCN'2021"} active="conference">
      {/*<div className="lg:pb-12">*/}
        <Hero />
      {/*</div>*/}

      <section id="about" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 lg:w-1/2">

          <h2 className="h2">About</h2>
          <div className="py-12 text-gray-600">
            <About tracks={tracks} />
          </div>

        </div>
      </section>

      <section id="timeline" className="pt-12">
        <h2 className="h2">Timeline</h2>
        <div className="container mx-4 md:mx-auto py-12 xl:w-1/2 lg:w-2/3">
          <Timeline deadlines={deadlines} />
        </div>
      </section>

      <section id="committee" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 lg:w-3/4">

          <div className="mb-8">
            <h2 className="h2">Organizers</h2>
            <h3 className="h3 mt-12">Organizing committee</h3>
            <CommitteeMembersList
              members={committeeMembers}
              className="container mt-2 md:mx-auto lg:w-3/4"
            />
          </div>

          <div>
            <h3 className="h3">Organizers & sponsors</h3>
            <SponsorsImageGallery
              organizations={organizations}
              className="mt-8 mb-12 container mx-auto md:w-3/4"
            />
          </div>

          <div>
            <h3 className="h3">Technical Program Committee</h3>
            <TpcMembersList
              members={tpcMembers}
              className="container mt-8 mx-auto lg:w-3/4"
            />
          </div>

        </div>
      </section>

    </Layout>
  );
}

export const getStaticProps = async () => {
  const deadlines = getDeadlines();
  const tracks = getAllTracks();
  const organizations = getAllOrganizations();
  const committeeMembers = getAllCommitteeMembers();
  const tpcMembers = getAllTpcMembers();
  const topics = [];
  // for (const track of tracks) {
  //   for (const topic of track.topics) {
  //     topics.push(topic);
  //   }
  // }
  return {
    props: {
      deadlines,
      tracks,
      organizations,
      committeeMembers,
      tpcMembers
      // topics
    }
  }
};