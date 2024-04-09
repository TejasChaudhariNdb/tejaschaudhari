import React, { useEffect, useState } from "react";
import Link from "next/link";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
async function fetchGraphQL(query) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/e596wccs0y0u`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer viIZ7jJ_DDmqCYWyFlZb7iCKRCHpJdhrpYSNU2JGr_4`,
    },
    body: JSON.stringify({ query }),
  }).then(response => response.json());
}

function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const query = `
      query blogPageCollectionQuery {
        blogPageCollection {
          items {
            sys {
              id
              firstPublishedAt
            }
           title
            author
            slug
            shortinfo
            coverImage{
              url
            }
          }
        }
      }

      `;
      const response = await fetchGraphQL(query);
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://tejaschaudhari.com/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SEO
        title="Tech Blogs and Startup Funding Blogs | Tejas Chaudhari"
        description="Explore a collection of insightful tech blogs and startup funding articles on Tejas Chaudhari's blog. Stay updated with the latest trends and news in the tech and startup world. OR Dive deep into the latest tech trends & hottest startups impacting the world today. Explore insightful analysis, funding rounds, and expert interviews on Tejas Chaudhari's blog"
        keywords={["tech blogs, netflix tech blog ,georgia tech admissions blog,startup funding, technology, funding support for startups , Tejas Chaudhari ,startups, funding, innovation,tech blog, startup blog, tech news, startup news, funding rounds, tech trends, tech analysis, expert interviews"]}
      />

      <div className="blog_home">
        <div className="container">
          <h1>Tech Related Blogs </h1>
          <div className="blog_container">
            {data &&
              data.blogPageCollection.items.map((post, index) => (
                <Link href={`blog/${post.slug}`} key={index}>
                  <div className="blog_card">
                    <div className="image_con">
                      <img src={post?.coverImage?.url} alt="" className="blog_image" />
                      <div className="date">
                        {new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <div className="blog_body">
                      <h2>{post.title}</h2>

                      <p className="desc">{post?.shortinfo}...</p>
                      <p className="author">- {post.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
