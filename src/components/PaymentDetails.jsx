import React from "react";

const PaymentDetails = ({ className }) => {
  return (
    <div className={className}>
      <p className="md:leading-7 md:text-xl text-gray-700 my-8">
        Payment is possible by wire transfer.
      </p>

      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-4 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">ВАЖНО:</span>
        <p>
          Необходимо указать назначение платежа. В противном случае мы не сможем
          корректно отследить платеж и идентифицировать плательщика.
        </p>
        <p>
          В графе назначения платежа необходимо указать:
          <span className="font-bold">
            “ИМЯ ФАМИЛИЯ. Взнос за участие в конференции DCCN2021. Без НДС.”
          </span> (замените ИМЯ и ФАМИЛИЮ вашим полным именем).
        </p>
        <p>
          Если Вы платите за несколько участников, просьба перечислить имена
          всех участников, за которых вносится оплата.
        </p>
      </div>


      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-8 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">IMPORTANT:</span>
        <p>
          The payment reference shall be necessarily specified.
          Otherwise we will not be able to properly trace the payment and
          identify the payer.
        </p>
        <p>
          Please specify in the MEMO LINE the following:
          <span className="font-bold">
            “NAME SURNAME, conference participation fee for DCCN2021. Without VAT.”
          </span>.
          Replace NAME and SURNAME with your full name.
        </p>
        <p>
          For Russian participants please indicate the name in Russian,
          If one person pays on behalf of a group of participants,
          please specify the names of all the participants.
        </p>
      </div>

      <div className="mt-12">
        <h5 className="md:leading-7 md:text-xl text-gray-700">
          Payment details for funds transfer in <span className="text-pink-800">Russian rubles</span>:
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
              <td className="border px-4 py-1">129085, г. Москва, Звездный б-р, д. 19, строение 1, этаж 14,
                помещение I, комната 30 (оф.1415)</td>
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
          Payment details for funds transfer in <span className="text-pink-800">EURO</span>:
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
              <td className="border px-4 py-1">ZVEZDNIY BOULEVARD 19, BLDG. 1, FLOOR 14, AREA I, ROOM 30 (OFFICE 1415), 129085
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
