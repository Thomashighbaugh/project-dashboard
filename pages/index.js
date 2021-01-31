import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@components/common";
import Date from "@utils/date";
import { getSortedPostsData } from "@utils/posts";
import Image from "next/image";

export default function Home({ allPostsData }) {
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState("all");

  return (
    <Layout>
      <Head>
        <title>Projects Lab</title>
      </Head>

      <section className="flex flex-col  w-8/12 p-4 justify-center  mx-auto m-3">
        <h2 className="text-center text-4xl text-gray-900 dark:text-blue-50 border-b-4 border-gray-500">
          Welcome to the
          Projects Lab
        </h2>
        <p className="text-gray-900 dark:text-gray-50">
          Click on one the categories below and a list of projects will display
          in a list, choose one and you will be taken to a dynamically generated
          page with an embedded display of that site for your examination
          purposes after a short introduction to the site itself and why it was
          written.
        </p>
        <br/>
        <p className="text-gray-900 dark:text-gray-50">
        <span className="text-gray-700 font-black ">NOTE: </span>
         At present there is no way to prevent CSS inheritance WITHIN the iframe window that is clean enough for inclusion within the site, thus to see the typographical glory of the sites, you will need to click the button to see the site in its production state.
        </p>
      </section>
      <section
        className="flex justify-center rounded-lg text-lg mb-4"
        role="group"
      >
        <button
           className="bg-gray-700 text-white text-2xl border-2 rounded-2xl px-6 py-3  mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() => setCategory(viewCategory === "HTML" ? "all" : "HTML")}
        >
          HTML
        </button>
        <button
            className= "bg-gray-700 text-white text-2xl border-2 rounded-2xl px-6 py-3  mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() =>
            setCategory(viewCategory === "Javascript" ? "all" : "Javascript")
          }
        >
          Javascript
        </button>
        <button
            className="bg-gray-700 text-white text-2xl border-2 rounded-2xl px-6 py-3  mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900"
          onClick={() =>
            setCategory(viewCategory === "React" ? "all" : "React")
          }
        >
          React
        </button>
      </section>
      <section>
        <ul className="mx-auto max-w-xl p-4">
          {allPostsData.map(({ id, category, date, title }) => (
            <li
              className="border-b-4 border-gray-300 p-4 text-center align-middle"
              key={id}
              style={{
                display:
                  viewCategory === category || viewCategory === "none"
                    ? "block"
                    : "none",
              }}
            >
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <a className="text-gray-500  text-2xl   hover:text-blue-600 dark:text-blue-50 dark:hover:text-blue-600">
                  {title}
                </a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
