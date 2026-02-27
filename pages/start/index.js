import Head from "next/head";
import { Fragment } from "react";

import Start from "@containers/Start";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title></title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <div>
        <Start />
      </div>
    </Fragment>
  );
}
