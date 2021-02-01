import Head from "next/head";
import { Layout } from "../../components/common/Layout";
import Date from "@utils/date";
import { getAllPostIds, getPostData } from "../../utils/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta name="twitter:title" content={postData.title} />
        <meta property="description" content={postData.description} />
        <meta property="og:description" content={postData.description} />
        <meta name="twitter:description" content={postData.description} />
        <meta property="og:image" content={postData.image} />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image" content={postData.image} />
        <meta name="twitter:image" content={postData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content={postData.url} />
        <meta property="og:site_name" content="Projects Lab" />
        <meta name="twitter:site" content="@thomashighbaugh" />
        <meta name="twitter:creator" content="@thomashighbaugh" />
      </Head>
        <h2 className="text-3xl mt-12 text-gray-600 dark:text-gray-50">     {postData.title}</h2>
      <br />
     <p className="text-gray-400 mx-8"> <Date dateString={postData.date} /></p>
    <p className="mx-8 text-gray-600 dark:text-gray-50">    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /></p>
      <button  className="bg-gray-700 text-white text-lg border-2 hover:bg-gray-400 rounded-2xl m-8 px-4 py-2 mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white dark:hover:bg-white dark:hover:text-gray-600 dark:hover:border-gray-600">
        <a href={postData.github}>See It on Github</a>
      </button>
        <button  className="bg-gray-700 text-white text-lg border-2 hover:bg-gray-400 rounded-2xl m-8 px-4 py-2 mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white dark:hover:bg-white dark:hover:text-gray-600 dark:hover:border-gray-600">
        <a href={postData.url}>See It in Production</a>
      </button>
      <iframe
        src={postData.url}
        height="1200px"
        width="100%"
        display="initial"
        position="relative"
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id);
  return {
    props: {
      postData,
    },
  };
}
