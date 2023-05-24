// import { Head } from "next/document";
import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle && `${pageTitle} `}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="advanced custom search, agency, agent, business, clean, corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor"
      />
      <meta
        name="description"
        content="top fruit is a real estate website template."
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap" rel="stylesheet"/>
      <link rel="icon" href="favicon-32x32.png" />
    </Head>
  )
};

export default Seo;