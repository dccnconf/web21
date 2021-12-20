import React from 'react';

export default function Proceedings() {
  return (
    <>
      <div className="md:leading-7 md:text-xl">
        <p className="">
          We are pleased to announce that one of the DCCN 2021 post-proceedings books (LNCS, volume 13144) has been published by <span className="font-extrabold text-indigo-500">Springer Nature</span>.
          The book is available online. The other book (CCIS, volume 1552) is planned to be published in 2022.
        </p>
        {/*<div className="flex">*/}
        {/*  <div className="mr-5" style={{width: "100px"}}>*/}
        {/*    <img src="/images/ccis_cover.jpg" alt="CCIS Volume cover"/>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className="font-semibold">*/}
        {/*      CCIS 1337:*/}
        {/*      <br />*/}
        {/*      <a className="text-blue-500" href="https://www.springer.com/978-3-030-66241-7">https://www.springer.com/978-3-030-66241-7</a>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="flex mt-6">
          <div className="mr-5" style={{width: "200px", minWidth: "120px"}}>
            <img src="/images/lncs_cover.jpg" alt="LNCS Volume cover"/>
          </div>
          <div style={{wordBreak: "break-word"}}>
            <p className="font-semibold">
              LNCS 13144:
              <br />
              <a className="text-blue-500" target="_blank" href="https://link.springer.com/book/10.1007/978-3-030-92507-9">https://link.springer.com/book/10.1007/978-3-030-92507-9</a>
            </p>
            <p className="mt-8">
              The conference participants are granted the four weeks free online access to the e-book of the LNCS proceedings.
              <br />
              <a className="text-blue-500" target="_blank" href="https://link.springer.com/book/10.1007/978-3-030-66471-8">https://link.springer.com/book/10.1007/978-3-030-66471-8</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
