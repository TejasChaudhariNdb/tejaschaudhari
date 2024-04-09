import React, { useEffect, useState } from "react";
import Link from "next/link";
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
                  <div className="date">{new Date(post.sys.firstPublishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>

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
  );
}

export default Index;
