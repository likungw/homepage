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
    <div className="flex flex-col gap-16 max-w-4xl mx-auto px-4">
      {/* 个人简介 + 头像 */}
      <div className="flex flex-col md:flex-row md:items-start gap-8 animate-in">
        
        {/* 左侧：简介 */}
          <div className="flex-1">
            {/* 顶部：姓名/职称（左） + logo（右） */}
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h1 className="truncate">{`Kun Li （李琨）`}</h1>
                <div
                  className="text-secondary max-w-full"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  Assistant Professor @ Tsinghua University
                </div>
              </div>

              {/* 右侧 logo：与“姓名+职称”两行高度对齐 */}
              <div className="shrink-0">
                <Image
                  src={airLogo}
                  alt="AIR, Tsinghua University"
                  className="h-[46px] w-auto" // 你要更大就改成 h-[64px] / h-[72px]
                  priority
                />
              </div>
            </div>

            <div className="mt-6 text-secondary max-w-full">
              <div>
                Dr. Kun Li is a Senior Research Scientist at Microsoft Research and incoming
                Assistant Professor at the Institute for AI Industry Research (AIR), Tsinghua
                University. He received his Ph.D. degree from the Institute of Computing
                Technology, Chinese Academy of Sciences (ICT, CAS), and previously conducted
                research internships at Microsoft Research and Peking University. His research
                focuses on HPC × AI for Science. He has been recognized with numerous honors,
                including the <strong>CCF Outstanding Doctoral Dissertation Award</strong>,{" "}
                <strong>ACM SIGHPC China Outstanding Doctoral Dissertation Award</strong>,{" "}
                <strong>CCF Youth Talent Award in HPC</strong>, and{" "}
                <strong>ACM SIGHPC China Rising Star Award</strong>. His work has been published
                in top-tier CCF-A conferences such as <strong>SC</strong>, <strong>PPoPP</strong>,{" "}
                <strong>ATC</strong>, <strong>ASPLOS</strong>, and <strong>ICS</strong>, earning
                the <strong>Best Paper Award at PPoPP’24</strong>,{" "}
                <strong>SC’25 Best Student Paper Award Finalist</strong>, and{" "}
                <strong>SC’25 Reproducibility Challenge Finalist</strong>.
              </div>

              <div className="mt-6">
                <Link href="https://www.likun.tech/about">CV</Link>
              </div>
            </div>
          </div>


        {/* 右侧：照片（保持不变） */}
        <div className="md:w-[200px] shrink-0 hidden md:block">
          <Photo
            src={headshot}
            meta={
              <span className="flex flex-col gap-3">
                <span className="block">
                  2024-03-01 <br />
                  PHOTO AT Edinburgh
                </span>
                <Link href="/about">More photos ↗</Link>
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
    </div>
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
