import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArchive, faLink} from "@fortawesome/free-solid-svg-icons";


const CFP = ({topics, className = ""} = {}) => {
  return (
  <div className={className}>
    <p className="md:text-lg">
      Authors are encouraged to submit their papers (6-8 pages) in Russian or English language via the online
      registration system <a href="https://uconfy.com" target="_blank" className="text-indigo-700">uConfy.com</a>. The accepted papers
      will be published in the Conference Proceedings volume (included into the Russian Science Citation Index) prior
      to the beginning of the Conference.
    </p>
    <div className="pl-8 mt-8">
      <a href="/downloads/DCCN2021_LaTeX_RU.zip" className="text-indigo-700">
        <FontAwesomeIcon icon={faArchive} size="lg" className="mr-3"/>
        <span className="md:text-lg align-middle">Template in Russian</span>
      </a>
    </div>
    <div className="pl-8 mt-4">
      <a href="/downloads/DCCN2021_LaTeX_EN.zip" className="text-indigo-700">
        <FontAwesomeIcon icon={faArchive} size="lg" className="mr-3"/>
        <span className="md:text-lg align-middle">Template in English</span>
      </a>
    </div>

    <p className="md:text-lg mt-8">
      For your convenience, we made available the DCCN templates in the scientific authoring platform Overleaf:
    </p>
    <div className="mt-4 pl-8">
      <a href="https://www.overleaf.com/latex/templates/dccn2021-submission-template-rus/ckqxxxthwjnf"
         target="_blank"
         className="text-indigo-700">
        <FontAwesomeIcon icon={faLink} size="lg" className="mr-3"/>
        <span className="text-lg align-middle">Overleaf DCCN'2021 Submission Template (RUS)</span>
      </a>
    </div>
    <div className="mt-4 pl-8">
      <a href="https://www.overleaf.com/latex/templates/dccn2021-submission-template-eng/gqhbgwrbhckd"
         target="_blank"
         className="text-indigo-700">
        <FontAwesomeIcon icon={faLink} size="lg" className="mr-3"/>
        <span className="text-lg align-middle">Overleaf DCCN'2021 Submission Template (ENG)</span>
      </a>
    </div>

    <p className="md:text-lg mt-8">
      After a peer review and plagiarism check, authors of selected submissions in English, recommended by the Program
      Committee, will be invited to submit their extended papers (12-15 pages in Springer LNCS template). After a
      second round of review the accepted extended papers will be published by Springer (approve pending) as a
      stand-alone volume of selected extended papers (indexed in Scopus and Web of Science).
    </p>
    <p className="md:text-lg mt-8">
      Please note, that peer review is double-blinded. Authors are required to remove their names, affiliation and any
      other information that may be used to identify them prior to review. In case the submission is not blinded, it
      may be rejected before the review.
    </p>
    <p className="md:text-lg mt-8">
      <span className="font-extrabold text-xl text-indigo-500 mr-1">Topics</span> include, but are not limited to the following fields:
    </p>
    <ul className="list-inside md:text-lg pl-2 mt-4 list-disc leading-6">
      {topics.map((topic, index) => <li className="text-base" key={index}>{topic}</li>)}
    </ul>
  </div>
  )
};

export default CFP;
