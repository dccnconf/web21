import React from "react";
import {useIntl} from "../hooks/useIntl";

const PaymentDetails = ({ className = "" }) => {
  const {translate} = useIntl();

  return (
    <div className={className}>
      <p className="md:leading-7 md:text-xl text-gray-700 my-8">
        {translate("support.payment.transfer.possible")}
      </p>

      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-4 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">{translate("support.important")}</span>
        <p>{translate("support.important.paragraph1")}</p>
        <p>
          {translate("support.important.paragraph2", {info:  <span className="font-bold">{translate("support.important.name.surname.info")}</span> })}
        </p>
        <p>{translate("support.important.paragraph3")}</p>
      </div>

      <div className="mt-12">
        <h5 className="md:leading-7 md:text-xl text-gray-700">
          {translate("support.payment.details.full", {val: <span className="text-pink-800">{translate("support.payment.details.rubles")}</span>})}
        </h5>
        <table className="table-auto w-full mt-8">
          <tbody>
            <tr>
              <td className="border px-4 py-1">Получатель (Beneficiary):</td>
              <td className="border px-4 py-1">АО Научно-производственная фирма “Информационные и
                сетевые технологии» (АО НПФ «ИНСЕТ»)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Юридический адрес (Address):</td>
              <td className="border px-4 py-1">129075, г. Москва, ул. Шереметьевская, д. 85, строение 1, этаж
                2, помещение I, комната 4 (по внутренней нумерации № 204)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Почтовый адрес (Postal address):</td>
              <td className="border px-4 py-1">117525, г. Москва, Сумской проезд, д. 31, корп. 2, кв. 80</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">ИНН (Individual Taxpayer Number):</td>
              <td className="border px-4 py-1">7717647073</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">КПП (Industrial Enterprises Classifier):</td>
              <td className="border px-4 py-1">771701001</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Р/с (Bank account number):</td>
              <td className="border px-4 py-1">40702810038090003329, ПАО Сбербанк г. Москва</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">БИК (Bank Identification Code):</td>
              <td className="border px-4 py-1">044525225</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">К/с (Correspondent account):</td>
              <td className="border px-4 py-1">30101810400000000225</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">Главный бухгалтер: Котельникова Наталья Николаевна, Тел.: 8-916-688-48-93</p>
      </div>

      <div className="mt-12">
        <h5 className="text-franklin-cond text-lg mb-4">
          {translate("support.payment.details.full", {val: <span className="text-pink-800">{translate("support.payment.details.euro")}</span>})}
        </h5>
        <table className="table-auto w-full mt-8">
          <tbody>
            <tr>
              <td className="border px-4 py-1">BANK NAME:</td>
              <td className="border px-4 py-1">Sberbank (Head office – all branches and offices in Russia) Moscow</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">SWIFT:</td>
              <td className="border px-4 py-1">SABRRUMM</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">BANK ADDRESS:</td>
              <td className="border px-4 py-1">RUSSIAN FEDERATION, MOSCOW, VAVILOV UL. 19</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">BENEFICIARY ACCOUNT:</td>
              <td className="border px-4 py-1">40702978638091002234</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">BENEFICIARY NAME:</td>
              <td className="border px-4 py-1">AO NPF INFORMACIONNYE I SETEVYE TEHNOLOGII</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">BENEFICIARY ADDRESS:</td>
              <td className="border px-4 py-1">SHEREMETYEVSKAYA STREET 85, BLDG. 1, FLOOR 2, AREA 1, ROOM 4, 129075
                Moscow, Russian Federation
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default PaymentDetails;
