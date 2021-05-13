import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArchive, faLink} from "@fortawesome/free-solid-svg-icons";
import {useIntl} from "../hooks/useIntl";


const CFP = ({topics, className = ""} = {}) => {
  const {translate} = useIntl();

  return (
  <div className={className}>
    <p className="md:text-lg">
      {translate("authors.cfp.paragraph1", {link: <a href="https://uconfy.com" target="_blank" className="text-indigo-700">uConfy.com</a>})}
    </p>
    <div className="pl-8 mt-8">
      <a href="/downloads/DCCN2021_LaTeX_RU.zip" className="text-indigo-700">
        <FontAwesomeIcon icon={faArchive} size="lg" className="mr-3"/>
        <span className="md:text-lg align-middle">{translate("authors.cfp.template.russian")}</span>
      </a>
    </div>
    <div className="pl-8 mt-4">
      <a href="/downloads/DCCN2021_LaTeX_EN.zip" className="text-indigo-700">
        <FontAwesomeIcon icon={faArchive} size="lg" className="mr-3"/>
        <span className="md:text-lg align-middle">{translate("authors.cfp.template.english")}</span>
      </a>
    </div>

    <p className="md:text-lg mt-8">
      {translate("authors.cfp.paragraph2")}
    </p>
    <div className="mt-4 pl-8">
      <a href="https://www.overleaf.com/latex/templates/dccn2021-submission-template-rus/ckqxxxthwjnf"
         target="_blank"
         className="text-indigo-700">
        <FontAwesomeIcon icon={faLink} size="lg" className="mr-3"/>
        <span className="text-lg align-middle">{translate("authors.cfp.template.russian.overleaf")}</span>
      </a>
    </div>
    <div className="mt-4 pl-8">
      <a href="https://www.overleaf.com/latex/templates/dccn2021-submission-template-eng/gqhbgwrbhckd"
         target="_blank"
         className="text-indigo-700">
        <FontAwesomeIcon icon={faLink} size="lg" className="mr-3"/>
        <span className="text-lg align-middle">{translate("authors.cfp.template.english.overleaf")}</span>
      </a>
    </div>

    <p className="md:text-lg mt-8">
      {translate("authors.cfp.paragraph3")}
    </p>
    <p className="md:text-lg mt-8">
      {translate("authors.cfp.paragraph4")}
    </p>
    <p className="md:text-lg mt-8">
      {translate("authors.cfp.topics", {topics: <span className="font-extrabold text-xl text-indigo-500 mr-1">{translate("authors.cfp.topics.name")}</span>})}
    </p>
    <ul className="list-inside md:text-lg pl-2 mt-4 list-disc leading-6">
      {topics.map((topic, index) => <li className="text-base" key={index}>{topic}</li>)}
    </ul>
  </div>
  )
};

export default CFP;
