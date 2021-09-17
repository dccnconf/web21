import React from "react";
import Layout from "../components/layout";
import ProgramOverview from "../components/ProgramOverview";
import {getPlenarySchedule} from "../libs/keynotes";
import Moment from "react-moment";
import ProgramPlenary from "../components/ProgramPlenary";
import {loadProgram} from "../libs/program";
import getAllTracks from "../libs/tracks";
import {getTrackBgColor} from "../libs/common/styling";
import TrackProgram from "../components/TrackProgram";

const ProgramPage = ({ program, tracks, plenary, plenarySecondPart }) => {
  return (
    <Layout pageTitle={"Schedule | DCCN'2021"} active="program">
      <section className="container mx-auto md:w-3/4 px-4 md:px-0" id="top">
        <h2 className="h2">Conference Schedule</h2>
        <ProgramOverview program={program} tracks={tracks} className="mt-8"/>
      </section>
      <section className="my-12 pt-4 pb-12" id="plenary">
        <div className="container mx-auto md:w-3/4 px-4 md:px-0">
          <h2 className="h2 text-4xl leading-tight">Plenary Session</h2>
          <h3 className="text-2xl font-extrabold text-indigo-600 text-center leading-tight">
            <Moment format="DD MMM. YYYY, dddd">{plenary.date}</Moment>
          </h3>
          <ProgramPlenary
            className={""}
            schedule={plenary}
          />
          <h3 className="text-2xl font-extrabold text-indigo-600 text-center leading-tight">
            <Moment format="DD MMM. YYYY, dddd">{plenarySecondPart.date}</Moment>
          </h3>
          <ProgramPlenary
            className={""}
            schedule={plenarySecondPart}
          />
        </div>
      </section>

      {
        tracks.map((track, index) => (
          <section className={`pt-4 pb-12 ${getTrackBgColor(track)}`} id={track.slug} key={index}>
            <div className="container mx-auto md:w-3/4 px-4 md:px-8 my-12">
              <h2 className="h2 text-4xl leading-tight">Track {track.letter}</h2>
              <h3 className="text-2xl font-bold text-center leading-tight mt-0 text-gray-600">{track.name}</h3>
              <TrackProgram track={track} program={program} />
            </div>
          </section>
        ))
      }
    </Layout>
  );
};

export const getStaticProps = async () => {
  const plenary = getPlenarySchedule();
  const plenarySecondPart = getPlenarySchedule(1);
  const program = await loadProgram();
  const tracks = getAllTracks().sort((a, b) => (a.letter < b.letter) ? -1 : (a.letter > b.letter) ? 1 : 0);

  return {
    props: {
      plenary,
      plenarySecondPart,
      program,
      tracks,
    }
  }
};

export default ProgramPage;
