import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@components/common";
import Date from "@utils/date";
import { getSortedPostsData } from "@utils/posts";
import Image from "next/image";

export default function Home({ allPostsData }) {
  // Declare what category should be shown
  const [viewCategory, setCategory] = useState("all");

  return (
    // begin page
    <Layout>
      <Head>
        <title>Projects Lab</title>
      </Head>
{/* Begin Title */}
      <section className="flex flex-col justify-center w-8/12 p-4 m-3 mx-auto">
        <h2 className="text-4xl text-center border-b-4 border-gray-500 font-b txt-gray-900 fo dark:text-blue-50">
          Welcome to the
          Projects Lab
        </h2>
<br/>
        <p className="text-gray-900 dark:text-gray-50">
        <span className="font-black text-gray-700 ">NOTE: </span>
          Click on one the categories below and a list of projects will display
          in a list, choose one and you will be taken to a dynamically generated
          page with an embedded display of that site for your examination
          purposes after a short introduction to the site itself and why it was
          written.
                  </p>
      </section>
      {/* End Title */}
      {/* Categorical Buttons  */}
      <section
        className="flex justify-center mb-4 text-lg rounded-lg"
        role="group"
      >
        <button
           className="px-6 py-3 mx-1 text-2xl text-white bg-gray-700 border-2 outline-none rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() => setCategory(viewCategory === "HTML" ? "all" : "HTML")}
        >
          HTML
        </button>
        <button
            className= "px-6 py-3 mx-1 text-2xl text-white bg-gray-700 border-2 outline-none rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() =>
            setCategory(viewCategory === "Javascript" ? "all" : "Javascript")
          }
        >
          Javascript
        </button>
        <button
            className="px-6 py-3 mx-1 text-2xl text-white bg-gray-700 border-2 outline-none rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() =>
            setCategory(viewCategory === "React" ? "all" : "React")
          }
        >
          React
        </button>
      </section>
      {/* End Categorical Buttons */}
      {/* Posts Displayed */}
      <section>
        <ul className="max-w-xl p-4 mx-auto">
          {allPostsData.map(({ id, category, date, title }) => (
            <li
              className="p-4 text-center align-middle border-b-4 border-gray-300"
              key={id}
              style={{
                display:
                  // Presently set to none, makes a cleaner interface
                  viewCategory === category || viewCategory === "none"
                    ? "block"
                    : "none",
              }}
            >
              {/* Creates Post Link as Heading  */}
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <a className="text-2xl text-gray-500 hover:text-blue-600 dark:text-blue-50 dark:hover:text-blue-600">
                  {title}
                </a>
              </Link>
              <br />
              <small>
                {/* Posts Date */}
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* End Posts Displayed */}
      {/* End Page */}
    </Layout>
  );
}
// Props
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
