import React from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';

export function Cta() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     course: allMarkdownRemark(
  //       filter: {
  //         fields: { pageType: { eq: "course" } }
  //         frontmatter: { isPublished: { ne: false } }
  //       }
  //       sort: {
  //         fields: frontmatter___createdAt
  //         order: DESC
  //       }
  //       limit: 1
  //     ) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }

  //     splash: file(
  //       relativePath: { eq: "demo-day/IMG_0592.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  const courseUrl = 'https://forms.gle/3tJ3Yk5iDcDZZVSV8'; // `/courses/${data.course.edges[0].node.fields.slug}/`

  return (
    // bg-gray-50
    <div id="cta" className="">
      {/* lg:px-8 */}
      <div className="max-w-screen-md px-4 py-12 mx-auto sm:px-6 lg:py-16 md:px-16 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span className="text-indigo-600">
            Start your free courses today.
          </span>
        </h2>
        <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={courseUrl}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Get started
            </a>
          </div>
          {/* <div className="inline-flex ml-3 rounded-md shadow">
            <a
              href="#faq"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Learn more
            </a>
          </div> */}
          <div className="inline-flex ml-3 rounded-md">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/Details-on-TRACE-Camp-5ceb8f8391134a618f7ca37d3a923732"
              className="bg-indigo-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function () {
  const courseUrl = 'https://forms.gle/3tJ3Yk5iDcDZZVSV8'; // `/courses/${data.course.edges[0].node.fields.slug}/`
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span className="text-indigo-600">
            Apply to the bootcamp today.
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href={courseUrl}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/Details-on-TRACE-Camp-5ceb8f8391134a618f7ca37d3a923732"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
