import Layout from "../components/layout";
import React from "react";
import EmptyPagePlaceholder from "../components/EmptyPagePlaceholder";
import Fees from "../components/Fees";
import PaymentDetails from "../components/PaymentDetails";
import ContactUs from "../components/ContactUs";
import {getAllFees} from "../libs/fees";

const SupportPage = ({fees}) => (
    <Layout pageTitle="Support | DCCN'2021" active="support">

        <section className="mb-12 pb-12" id="payment">
            <div className="container mx-auto px-4 md:w-1/2">
                <h2 className="h2">Payment Details</h2>
                <Fees className="pt-6 mt-8" fees={fees}/>
                <PaymentDetails className="mt-8" fees={fees}/>
            </div>
        </section>

        <section className="pb-12 pt-8 bg-gray-100" id="contact">
            <div className="container mx-auto px-4 pb-8 md:w-1/2">
                <h2 className="h2">Contact Us</h2>
                <ContactUs className="mt-8" />
            </div>
        </section>

    </Layout>
);

export const getStaticProps = () => {
    const fees = getAllFees();
    return {
        props: {fees}
    }
};

export default SupportPage;
