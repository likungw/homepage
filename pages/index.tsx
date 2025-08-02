import { GetStaticProps } from "next";
import {
  allPosts,
  allProjects,
  allPublications,
  Post,
  Project,
  Publication,
} from ".contentlayer/generated";
import { pick } from "lib/pick";

import Link from "components/Link";
import Section from "components/Section";
import PostList from "components/postlist";

import { Photo } from "components/Gallery";
import headshot from "../public/headshot.jpg";
import { FullName } from "./about";
import { TalkList } from "./talks";
import Award from "../components/Award";
import { talks } from "../data/talks";
import { IconExternalLink } from "../components/Icons";

const futureTalks = talks.filter((talk) => new Date(talk.date) > new Date());

type HomeProps = {
  posts: Post[];
  projects: Project[];
  publications: Publication[];
};

export default function Home({ posts, projects, publications }: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-4xl mx-auto px-4">
        {/* 个人简介 + 头像 */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 animate-in">
          {/* 左侧：简介 */}
          <div className="flex-1">
            <h1>{`Kun Li`}</h1>
            <p
              className="text-secondary max-w-full"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Senior Researcher @ Microsoft Research
              <br />
              <br />
              Dr. Kun Li is currently a Senior Researcher at Microsoft Research,
              focusing on high-performance computing (HPC) systems. He received
              his Ph.D. degree with the State Key Laboratory of Computer
              Architecture, Institute of Computing Technology, Chinese Academy
              of Sciences (ICT, CAS) in 2022. He was recognized with CCF
              Outstanding Doctoral Dissertation Award, ACM SIGHPC China
              Outstanding Doctoral Dissertation Award, CCF HPC Youth Talent
              Award, ACM SIGHPC China Rising Star Award, among others. His
              representative works have been continuously published at top-tier
              CCF-A conferences such as SC, PPoPP, ATC, ASPLOS, and ICS,
              receiving the Best Paper Award at PPoPP’24, Best Student Paper
              Award Finalist SC’25, and SC’25 Reproducibility Challenge
              Candidate. He is a keynote speaker at the CCF HPCChina 2024
              conference, an Executive Member of the CCF Technical Committee on
              High-Performance Computing and Computer Architecture.
              <br />
              <br />
              <Link href="">CV</Link>
            </p>
          </div>

          {/* 右侧：照片 */}
          <div className="md:w-[200px] shrink-0 hidden md:block">
            <Photo
              src={headshot}
              meta={
                <span className="flex flex-col gap-3">
                  <span className="block">
                    2024-03-01 <br />
                    PHOTO AT Edinburgh
                  </span>
                  <Link href={`/about`}>{`More photos ↗`}</Link>
                </span>
              }
              alt="Headshot"
              width={210}
              height={280}
              rotate={6.3}
              index={1}
              flipDirection="left"
            />
          </div>
        </div>

        {/* Upcoming Talks */}
        {futureTalks.length > 0 && (
          <div
            className="flex flex-col gap-8 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h2>Upcoming Talks</h2>
            <ul className="flex flex-col gap-8">{TalkList(futureTalks)}</ul>
          </div>
        )}

        {/* Recent blog posts */}
        <div
          className="flex flex-col items-start gap-8 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2>Recent blog posts</h2>
          <PostList posts={posts} />
          <Link href="/blog" className="items-start underline text-secondary">
            Read all posts
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter((_, i) => i < 4)
    .map((post) => pick(post, ["slug", "title", "publishedAt", "image"]));

  const projects = allProjects
    .sort((a, b) => parseInt(b.time.slice(0, 4)) - parseInt(a.time.slice(0, 4)))
    .map((post) =>
      pick(post, ["slug", "title", "description", "time", "awards"])
    );

  const publications = allPublications
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((publication) => {
      return pick(publication, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "journal",
        "awards",
        "media_coverage",
        "url",
      ]);
    });

  return {
    props: { posts, projects, publications },
  };
};
 