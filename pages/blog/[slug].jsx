import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import SEO from "@bradgarropy/next-seo";
import  Head  from "next/head";
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

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [blogLinksData, setBlogLinksData] = useState(null);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const query = `
    query GetBlogPostBySlug {
      blogPageCollection(where: { slug:  "${slug}"}) {
        items {
          sys {
            id
          }
          title
          author
          seo
          links
          coverImage {
            url
          }
          body {
            json

          }
        }
      }
    }

      `;

      const response = await fetchGraphQL(query);
      setBlogData(response?.data?.blogPageCollection.items[0]);
      setBlogId(response?.data?.blogPageCollection.items[0].sys.id);

    }

    async function fetchBlogMedia() {
      const linkquery = `
        query blogPageEntryQuery {
          blogPage(id: "${blogId}") {

            body {

              links {
                entries {
                  inline {
                    sys {
                      id
                    }
                    __typename
                    ... on BlogPage {
                      title
                      slug
                    }
                  }
                  block {
                    sys {
                      id
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                  }
                }
              }
            }
          }
        }
        `;

      const linkresponse = await fetchGraphQL(linkquery);
      setBlogLinksData(linkresponse?.data?.blogPage?.body);
    }

    if (slug) {
      fetchData();
    }
    if (blogId) {
      fetchBlogMedia();
    }
  }, [slug, blogId]);

  function renderOptions(links) {
    console.log(links);
    // create an asset block map
    const assetBlockMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
      assetBlockMap.set(asset.sys.id, asset);
    }

    // create an entry block map
    const entryBlockMap = new Map();
    // loop through the entries and add them to the map
    for (const entry of links.entries.block) {
      entryBlockMap.set(entry.sys.id, entry);
    }

    return {
      // other options...

      renderNode: {
        // other options...

        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
          // find the entry in the entryBlockMap by ID
          const entry = entryBlockMap.get(node.data.target.sys.id);

          // render the entries as needed by looking at the __typename
          // referenced in the GraphQL query

          if (entry.__typename === "VideoEmbed") {
            return (
              <iframe
                src={entry.embedUrl}
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no"
                title={entry.title}
                allowFullScreen={true}
              />
            );
          }
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          // find the asset in the assetBlockMap by ID
          const asset = assetBlockMap.get(node.data.target.sys.id);

          // render the asset accordingly
          return (
            <img src={asset.url} height={asset.height} width={asset.width} alt={asset.title} />
          );
        },
      },
    };
  }

  return (
    <>
      {/* <BlogNavbar  /> */}
      <Head>
        <link rel="canonical" href={`https://tejaschaudhari.com/blog/${slug}`} />
        <link rel="icon" href="../favicon.ico" />
      </Head>

      <SEO
        title={blogData?.seo?.pagetitle}
        description={blogData?.seo?.description}
        keywords={[blogData?.seo?.keywords]}
        url={`https://tejaschaudhari.com/blog/${slug}`}
        canonical={`https://tejaschaudhari.com/blog/${slug}`}
        author={blogData?.author}
      />
      <div className="blogs">
      {blogData?.coverImage?.url ? <img src={blogData?.coverImage?.url} alt="" className="coverimg" /> : <></>}
        <div className="container">
          {blogLinksData ? (
            <div>
              <h1 className="title">{blogData.title}</h1>
              <p className="author">By {blogData.author}</p>
              <div className="content">
                {documentToReactComponents(blogData.body.json, renderOptions(blogLinksData?.links))}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
