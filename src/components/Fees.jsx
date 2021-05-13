import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {useIntl} from "../hooks/useIntl";

const Fees = ({ fees, className = "" }) => {
  const {translate} = useIntl();

  return (
    <div className={className}>
      <p className="md:leading-7 md:text-xl text-gray-700">
        {translate("index.registration.fees.paragraph1")}
      </p>
      <div className="mt-8">
        <a href="/downloads/DCCN2021_FEES.pdf"
           target="_blank"
           className="text-blue-500 hover:underline text-lg"
        >
          <FontAwesomeIcon icon={faFilePdf} size="lg" className="mr-3" />
          DCCN2021_FEES.PDF
        </a>
      </div>
      <p className="md:leading-7 md:text-xl text-gray-700 mt-8">
        {translate("index.registration.fees.paragraph2")}
      </p>
      <FeesTable fees={fees} className="my-12" />
    </div>
  )
};

export const FeesTable = ({ fees, className = "" }) => {
  // First we need to order prices by IEEE membership:
  for (const record of fees) {
    record.prices.sort((a, b) => (!a.ieeeMember && b.ieeeMember) ? -1 : (!!a.ieeeMember === !!b.ieeeMember) ? 0 : 1);
  }

  const {translate} = useIntl();

  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    {translate("index.registration.fees.participants")}
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    {translate("index.registration.fees.no.ieee.member")}
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    {translate("index.registration.fees.ieee.member")}
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {
                  fees.map(fee => (
                    <FeeTableRow fee={fee} key={fee.order} />
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeeTableRow = ({ fee }) => {
  const regularPrice = fee.prices[0];
  const ieeePrice = fee.prices[1];
  const discount = regularPrice.price > 0 ? (1 - ieeePrice.price / regularPrice.price) * 100 : undefined;

  return (
    <tr>
      <td className="px-6 py-4 text-gray-700 leading-tight md:text-lg">
        {fee.category}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap font-bold">
        {regularPrice.price} {regularPrice.currency}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap font-bold text-center">
        <div className="text-green-700">
          {ieeePrice.price} {ieeePrice.currency}
        </div>
        {
          discount !== undefined && (
            <div className="font-medium text-sm text-green-500 font-bold">
              -{discount.toFixed(0)}%
            </div>
          )
        }
      </td>
    </tr>
  );
}

export default Fees;
