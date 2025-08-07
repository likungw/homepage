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
import TalkList from "../components/TalkList";
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
            <h1>{`Kun Li （李琨）`}</h1>
            <p
              className="text-secondary max-w-full"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Senior Researcher @ Microsoft Research
              <br />
              <br />
              <p>
                Dr. Kun Li received his Ph.D. degree from the State Key Laboratory of Computer Architecture, 
                Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS) in 2022. He has been recognized with numerous honors, including the <strong>CCF Outstanding Doctoral Dissertation Award</strong>, <strong>ACM SIGHPC China Outstanding Doctoral Dissertation Award</strong>,  <strong>CCF Youth Talent Award in HPC</strong>, and <strong>ACM SIGHPC China Rising Star Award</strong>. His work has been published in top-tier CCF-A conferences such as <strong>SC</strong>, <strong>PPoPP</strong>, <strong>ATC</strong>, <strong>ASPLOS</strong>, and <strong>ICS</strong>, earning the <strong>Best Paper Award at PPoPP’24</strong>, <strong>SC’25 Best Student Paper Award Finalist</strong>, and <strong>SC’25 Reproducibility Challenge Candidate</strong>. 
              </p>

              <p>
                He serves as a keynote speaker at CCF HPC China 2024, as an Executive Committee Member of the CCF Technical Committee on High-Performance Computing and Computer Architecture, and as a Program Committee Member for PPoPP 2026.
              </p>
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
            <TalkList talks={futureTalks} />
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
 