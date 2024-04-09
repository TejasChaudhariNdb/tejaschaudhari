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
        keywords={[
          "tech blogs, netflix tech blog ,georgia tech admissions blog,startup funding, technology, funding support for startups , Tejas Chaudhari ,startups, funding, innovation,tech blog, startup blog, tech news, startup news, funding rounds, tech trends, tech analysis, expert interviews",
        ]}
      />

      <div className="blog_home">
        <div className="container">
          <h1>Tech Related Blogs </h1>
          <div className="blog_container">
            {data &&
              data.blogPageCollection.items.map((post, index) => (
                <Link href={`blog/${post.slug}`} key={index}>
                  <a>
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
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="basic_container">

<div>
  <div>
    Search Write Tejas chaudhari Get unlimited access to the best of Medium for less than $1/week. Become a member
  </div>
  <div >
    <h2>Next.js Full-Stack Web App (2024)</h2>
    <p>Hey guys 😃, are you planning to build a full-stack web application? If so, you’ve landed on the perfect blog post! I’m happy to introduce you to a Next.js full-stack starter template that I have designed to streamline the process of creating a modern, feature-rich web application and eliminate the…</p>
    <span >6 min read</span>
  </div>
</div>
<hr />
<div>
  <p>
    Login Search Startups Venture Security AI Crypto Apps Events Startup Battlefield More
    Cruise robotaxis are back in Phoenix — but people are driving them Rebecca Bellan 05
    November 2019, US, San Francisco: A robot car of the General Motors subsidiary Cruise is
    on a test drive. (Photo by Andrej Sokolow/picture alliance via Getty Images) AI Google
    Cloud Next 2024: Watch the keynote on Gemini AI, enterprise reveals live right here
    TechCrunch Staff Apps WordPress.com owner Automattic acquires multiservice messaging app
    Beeper for $125M Sarah Perez AI TechCrunch Minute: Spotify rolls out an AI-powered
    playlist feature Alex Wilhelm Enterprise Google launches Code Assist, its latest
    challenger to GitHub’s Copilot Frederic Lardinois TechCrunch Early Stage Founder Summit
    April 25, Boston REGISTER TODAY The Latest Transportation Cruise robotaxis are back in
    Phoenix — but people are driving them Rebecca Bellan 10:04 PM GMT+5:30•April 9, 2024
    Cruise is redeploying robotaxis in Phoenix after nearly five months of paused
    operations, the company said in a blog post. The catch? The cars will be in so-called
    “manual mode,” so the... 05 November 2019, US, San Francisco: A robot car of the General
    Motors subsidiary Cruise is on a test drive. (Photo by Andrej Sokolow/picture alliance
    via Getty Images) AI Google Cloud Next 2024: Everything announced so far Christine Hall
    9:43 PM GMT+5:30•April 9, 2024 Don’t have time to be in Las Vegas? That’s OK: We’ve
    summed up the most important parts of this year’s Google Cloud Next. Thomas Kurian, Google
    Cloud, Google Cloud Next 2024 Apps eBay adds an AI-powered ‘shop the look’ feature to
    its iOS app Sarah Perez 9:38 PM GMT+5:30•April 9, 2024 EBay on Tuesday launched a new
    generative AI-powered feature to appeal to fashion enthusiasts: a “shop the look” section
    within its iOS mobile app that will suggest a carousel of images... AI TechCrunch Minute:
    Spotify rolls out an AI-powered playlist feature Alex Wilhelm 9:30 PM GMT+5:30•April 9,
    2024 Starting in just a few countries, the new AI playlist feature will roll out to more
    markets over time. AI Google Cloud Next 2024: Watch the keynote on Gemini AI, enterprise
    reveals live right here TechCrunch Staff 9:30 PM GMT+5:30•April 9, 2024 It’s time for
    Google’s annual look up to the cloud, this time with a big dose of AI. At 9 a.m. PT,
    Google Cloud CEO Thomas Kurian will kick off the opening keynote for this year’s Google
    Clou... Apps YouTube launches new Shopping features to help creators market products and
    grow their earnings Aisha Malik 9:30 PM GMT+5:30•April 9, 2024 The launch of the new
    features come as TikTok Shop is seeking to take on YouTube Shopping and other competitors
    in the space. YouTube icon Privacy As AI accelerates, Europe’s flagship privacy
    principles are under attack, warns EDPS Natasha Lomas 9:26 PM GMT+5:30•April 9, 2024 The
    European Data Protection Supervisor (EDPS) has warned key planks of the bloc’s data
    protection and privacy regime are under attack from industry lobbyists and could face a
    critical recept... Digital transformation concept. Binary code. AI (Artificial
    Intelligence). AI Meta confirms that its Llama 3 open source LLM is coming in the next
    month Ingrid Lunden 8:38 PM GMT+5:30•April 9, 2024 Meta’s Llama families, built as
    open-source products, represent a different philosophical approach to how AI should
    develop as a wider technology. Meta AI day TechCrunch Early Stage 2024 Apr 25 Get The
    Nuts & Bolts To Scale Your Startup Join 1500 Founders & VCs Apps WordPress.com owner
    Automattic acquires multiservice messaging app Beeper for $125M

 Sarah Perez 7:43 PM
    GMT+5:30•April 9, 2024 Beeper, a multiservice messaging app, has been acquired by
    Automattic, the parent company of WordPress.com, for $125 million. The acquisition will
    enable Automattic to add the... AppsYouTube launches new Shopping features to help
    creators market products and grow their earnings Aisha Malik 6:39 PM GMT+5:30•April 9,
    2024 The launch of the new features come as TikTok Shop is seeking to take on YouTube
    Shopping and other competitors in the space. YouTube icon Apps Google Docs gets AI
    grammar checking for Spanish speakers Aisha Malik 5:36 PM GMT+5:30•April 9, 2024 The new
    feature, which Google says is powered by its latest AI model, offers context-aware
    suggestions that focus on clarity, conciseness, formality, and correctness. AI Google
    Assistant can now read web pages aloud in 42 languages Frederic Lardinois 5:03 PM
    GMT+5:30•April 9, 2024 Google today announced a major expansion of its Google Assistant
    voice feature that enables it to read aloud web pages in 42 languages on Android devices.
    AI Google’s Hybrid Video AI helps filmmakers transform video with AI and real actors
    Frederic Lardinois 4:18 PM GMT+5:30•April 9, 2024 Google today announced a new video AI
    tool, called Hybrid Video AI, which combines AI with the work of real actors to create
    more natural, high-quality video. AI Google’s Hybrid Video AI helps filmmakers transform
    video with AI and real actors Frederic Lardinois 4:18 PM GMT+5:30•April 9, 2024 Google
    today announced a new video AI tool, called Hybrid Video AI, which combines AI with the
    work of real actors to create more natural, high-quality video. AI Google’s Hybrid
    Video AI helps filmmakers transform video with AI and real actors Frederic Lardinois
    4:18 PM GMT+5:30•April 9, 2024 Google today announced a new video AI tool, called
    Hybrid Video AI, which combines AI with the work of real actors to create more natural,
    high-quality video. AI A look at the future of AI in healthcare Natasha Lomas 4:07 PM
    GMT+5:30•April 9, 2024 ProPublica: The robots arent coming for your job; theyre
    coming for your heart. AI Google’s Hybrid Video AI helps filmmakers transform video
    with AI and real actors Frederic Lardinois 4:18 PM GMT+5:30•April 9, 2024 Google today
    announced a new video AI tool, called Hybrid Video AI, which combines AI with the work
    of real actors to create more natural, high-quality video. AI A look at the future of AI
    in healthcare Natasha Lomas 4:07 PM GMT+5:30•April 9, 2024 ProPublica: The robots
    arent coming for your job; theyre coming for your heart. AI Google’s Hybrid Video AI
    helps filmmakers transform video with AI and real actors Frederic Lardinois 4:18 PM
    GMT+5:30•April 9, 2024 Google today announced a new video AI tool, called Hybrid Video
    AI, which combines AI with the work of real actors to create more natural, high-quality
    video. AI A look at the future of AI in healthcare Natasha Lomas 4:07 PM GMT+5:30•April
    9, 2024 ProPublica: The robots
     </p>
      </div>
      </div>
    </>
  );
}

export default Index;
