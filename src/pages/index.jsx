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
import Fees from "../components/Fees";
import {getAllFees} from "../libs/fees";
import Link from "next/link";
import TechnicalsSponsors from "../components/TechnicalSponsors";
import getTopics from "../libs/topics";
import KeynoteSpeakers from "../components/KeynoteSpeakers";
import {getAllSpeakers} from "../libs/keynotes";
import {useIntl} from "../hooks/useIntl";

export default function Home ({
  deadlines,
  tracks,
  organizations,
  committeeMembers,
  tpcMembers,
  fees,
  speakers,
  topics
}) {
  const {translate} = useIntl();

  return (
    <Layout pageTitle={"DCCN'2021"} active="conference">
      {/*<div className="lg:pb-12">*/}
        <Hero />
      {/*</div>*/}

      <section id="about" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 lg:w-1/2">
          <h2 className="h2">{translate("index.about")}</h2>
          <div className="py-12 text-gray-600">
            <About tracks={tracks} topics={topics} />
          </div>
        </div>
      </section>

      <section id="keynotes" className="mt-12">
        <div className="container mx-auto px-4 pb-12 lg:w-3/4">
          <h2 className="h2">{translate("index.keynotespeakers")}</h2>
          <KeynoteSpeakers
              className="mt-12"
              speakers={speakers}
          />
        </div>

      </section>

      <section id="timeline" className="pt-12">
        <h2 className="h2">{translate("index.timeline")}</h2>
        <div className="container mx-4 md:mx-auto py-12 xl:w-1/2 lg:w-2/3">
          <Timeline deadlines={deadlines} />
        </div>
      </section>

      <section id="fees" className="pt-12 bg-purple-100">
        <div className="container mx-auto px-4 pb-12 lg:w-1/2">
          <h2 className="h2">{translate("index.registration.fees")}</h2>
          <Fees className="mt-8"
              fees={fees}
          />
          <p className="text-xl">
            <Link href={"/support"} as="/support#payment">
              <a className="text-blue-500 hover:underline">{translate("index.read.more")}...</a>
            </Link>
          </p>
        </div>
      </section>

      <section id="committee" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 lg:w-3/4">

          <div className="mb-8">
            <h2 className="h2">{translate("index.organizers")}</h2>
            <h3 className="h3 mt-12">{translate("index.organizing.committee")}</h3>
            <CommitteeMembersList
              members={committeeMembers}
              className="container mt-2 md:mx-auto lg:w-3/4"
            />
          </div>

          <div>
            <h3 className="h3">{translate("index.organizers.sponsors")}</h3>
            <SponsorsImageGallery
              organizations={organizations}
              className="mt-8 mb-12 container mx-auto md:w-3/5"
            />
          </div>

          <div className="mt-12 mb-12">
            <h3 className="h3">{translate("index.organizers.technical.sponsors")}</h3>
            <TechnicalsSponsors/>
          </div>

          <div>
            <h3 className="h3">{translate("index.technical.program.committee")}</h3>
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

export const getStaticProps = async (context = {}) => {
  const { locale } = context;
  const deadlines = getDeadlines();
  const tracks = getAllTracks();
  const organizations = getAllOrganizations();
  const committeeMembers = getAllCommitteeMembers();
  const tpcMembers = getAllTpcMembers();
  const topics = getTopics(locale);
  const fees = getAllFees();
  const speakers = getAllSpeakers();

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
      tpcMembers,
      fees,
      topics,
      speakers
    }
  }
};
