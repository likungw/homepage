import type React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

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
import TalkList from "../components/TalkList";
import { Photo } from "components/Gallery";

import headshot from "../public/headshot.jpg";
import airLogo from "../public/schools/airlogo.png";

import { talks } from "../data/talks";

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

            {/* 用 div 包起来，避免 <p> 嵌套 <p> 触发 Parsing error */}
            <div
              className="text-secondary max-w-full"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Assistant Professor @ Tsinghua University
              <br />
              <br />

              <p>
                Dr. Kun Li is a Senior Research Scientist at Microsoft Research and
                incoming Assistant Professor at the Institute for AI Industry Research (AIR),
                Tsinghua University. He received his Ph.D. degree from the Institute of
                Computing Technology, Chinese Academy of Sciences (ICT, CAS), and previously
                conducted research internships at Microsoft Research and Peking University.
                His research focuses on HPC × AI for Science. He has been recognized with
                numerous honors, including the{" "}
                <strong>CCF Outstanding Doctoral Dissertation Award</strong>,{" "}
                <strong>ACM SIGHPC China Outstanding Doctoral Dissertation Award</strong>,{" "}
                <strong>CCF Youth Talent Award in HPC</strong>, and{" "}
                <strong>ACM SIGHPC China Rising Star Award</strong>. His work has been
                published in top-tier CCF-A conferences such as <strong>SC</strong>,{" "}
                <strong>PPoPP</strong>, <strong>ATC</strong>, <strong>ASPLOS</strong>, and{" "}
                <strong>ICS</strong>, earning the{" "}
                <strong>Best Paper Award at PPoPP’24</strong>,{" "}
                <strong>SC’25 Best Student Paper Award Finalist</strong>, and{" "}
                <strong>SC’25 Reproducibility Challenge Finalist</strong>.
              </p>

              <br />
              <Link href="https://www.likun.tech/about">CV</Link>
            </div>
          </div>

          {/* 右侧：logo + 照片（logo 在头像上方） */}
          <div className="md:w-[200px] shrink-0 hidden md:block">
            <div className="flex flex-col items-center gap-3">
              <Image
                src={airLogo}
                alt="Tsinghua AIR logo"
                width={190}
                height={56}
                priority
              />

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

        {/* Recent blog posts（已注释） */}
        <div
          className="flex flex-col items-start gap-8 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {/*
          <h2>Recent blog posts</h2>
          <PostList posts={posts} />
          <Link href="/blog" className="items-start underline text-secondary">
            Read all posts
          </Link>
          */}
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
    .map((post) => pick(post, ["slug", "title", "description", "time", "awards"]));

  const publications = allPublications
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((publication) =>
      pick(publication, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "journal",
        "awards",
        "media_coverage",
        "url",
      ])
    );

  return {
    props: { posts, projects, publications },
  };
};
