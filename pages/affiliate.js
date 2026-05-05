import Head from "next/head";
import { Fragment } from "react";
import Layout from "@components/Layout";
import AffiliateDisclosureTerms from "@components/AffiliateDisclosureTerms";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"Unlimited Rbx"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
        <AffiliateDisclosureTerms />
    </Fragment>
  );
}
