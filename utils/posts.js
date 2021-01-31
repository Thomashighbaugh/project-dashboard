import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const reactDirectory = path.join(process.cwd(), "posts/React");
const javascriptDirectory = path.join(process.cwd(), "posts/Javascript");
const htmlDirectory = path.join(process.cwd(), "posts/HTML");

const reactCategory = "React";
const javascriptCategory = "Javascript";
const htmlCategory = "HTML";

// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {
  // Get file names under each categories directory
  const reactFileNames = fs.readdirSync(reactDirectory);
  const javascriptFileNames = fs.readdirSync(javascriptDirectory);
  const htmlFileNames = fs.readdirSync(htmlDirectory);

  // Get data from Chronic Pain files
  const reactFilesData = reactFileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(reactDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Set the category
    const category = "React";

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data,
    };
  });

  // Get data from Low Back Pain files
  const javascriptFilesData = javascriptFileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(javascriptDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Set the category
    const category = "Javascript";

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data,
    };
  });

  // Get data from Neck Pain files
  const htmlFilesData = htmlFileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(htmlDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Set the category
    const category = "html";

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data,
    };
  });

  // Concatenate each articles data in one array
  const allPostsData = reactFilesData
    .concat(javascriptFilesData)
    .concat(htmlFilesData);

  // Sort articles by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} // END - getSortedPostsData()

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory
  const reactFileNames = fs.readdirSync(reactDirectory);
  const javascriptFileNames = fs.readdirSync(javascriptDirectory);
  const htmlFileNames = fs.readdirSync(htmlDirectory);

  // Holds all [category] names
  let categoryNames = [];

  // Loop through each xxxFileNames array.
  // Add relevant category name to categoryNames array
  reactFileNames.forEach(function (reactFileName) {
    categoryNames.push(reactCategory);
  });
  javascriptFileNames.forEach(function (javascriptFileName) {
    categoryNames.push(javascriptCategory);
  });
  htmlFileNames.forEach(function (htmlFileName) {
    categoryNames.push(htmlCategory);
  });

  // Concatenate each articles name in one array (id)
  const fileNames = reactFileNames
    .concat(javascriptFileNames)
    .concat(htmlFileNames);

  // Combine categoryNames & fileNames arrays. [{ categoryName: 'javascript', id: 'javascript-1.md' }, etc]
  const postParams = categoryNames.map(function (e, i) {
    return { categoryName: e, id: fileNames[i] };
  });

  // Loop through postParams. Output variable params
  return postParams.map((postParam) => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id.replace(/\.md$/, ""),
      },
    };
  });
}

// Get relevant post data
export async function getPostData(category, id, github) {
  // Set the relevant /posts file path using category and id in the query params
  const fullPath = path.join(postsDirectory, `${category}`, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  console.log(matterResult);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    github,
    contentHtml,
    ...matterResult.data,
  };
}
