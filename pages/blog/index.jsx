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
            }
           title
            author
            slug
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
    <div>
      <h1>Tech Related Blogs </h1>
      {data &&
        data.blogPageCollection.items.map((post, index) => (
          <div key={index}>
            <Link href={`blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>{post.author}</p>
          </div>
        ))}
    </div>
  );
}

export default Index;
