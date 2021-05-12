import React from "react";
import Link from "next/link";
import {useIntl} from "../hooks/useIntl";

export default function About({ tracks = [], topics = [] } = {}) {
  const {translate} = useIntl();

  return (
    <>
      <div className="md:leading-7 md:text-xl">
        <p>{translate("index.about.paragraph1")}</p>
        <ul className="list-disc ml-8 mt-8">
          <li>
            <Link href={"/#timeline"} as="">
              <a className="text-blue-500 hover:underline">{translate("index.about.conference.deadlines")} 📅</a>
            </Link>
          </li>
          <li>
            <Link href={"/authors"} as="">
              <a className="text-blue-500 hover:underline">{translate("index.about.conference.call.for.papers")} ✍️</a>
            </Link>
          </li>
          <li>
            <Link href={"/#committee"} as="">
              <a className="text-blue-500 hover:underline">{translate("index.about.conference.organizing.committee")} 👷</a>
            </Link>
          </li>
          <li>
            <a
              href="https://uconfy.com/conf/4/"
              className="text-blue-500 hover:underline">{translate("index.about.conference.conference.at.uconfy")} ⚙️</a>
          </li>
        </ul>

        <p className="mt-8">{translate("index.about.paragraph2")}</p>

        <p>{translate("index.about.paragraph3")}</p>

      </div>

      <div className="py-4">
        <div className="block">
          <img src="/images/undraw_Books_l33t.svg" alt="Image with a book" className="w-4/5 mx-auto sm:w-2/5 sm:float-left sm:mr-4 pt-3"/>
          <div className="">
            <div className="h4 text-center sm:text-left mt-4 sm:mt-0">{translate("index.proceedings")}</div>
            <p className="md:text-xl">{translate("index.proceedings.paragraph")}</p>
          </div>
        </div>
      </div>

      <div className="md:leading-7 md:text-xl mt-5">
        <div>
          <img src="/images/undraw_create_f05x.svg" alt="Ideas image" className="w-4/5 sm:w-1/3 lg:w-1/3 sm:float-right mx-auto sm:ml-8 pt-3"/>
          <div>
            <h4 className="h4 mb-3 text-center sm:text-left mt-4 sm:mt-0">{translate("index.topics")}</h4>
            <p>{translate("index.topics.paragraph")}</p>
          </div>
        </div>
        <div className="mt-4">
          <Topics topics={topics} />
        </div>
      </div>
    </>
  );
}

const Topics = ({topics}) => {
  return <div>
    {/*<h4 className="h4"><span className="text-indigo-500">Track {track.letter}:</span> {track.name}</h4>*/}
    <ul className="list-disc ml-8 text-">
      {topics.map((topic, index) =>
        <li key={index}>{topic}</li>)}
    </ul>
  </div>
}
