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
import ExternalLink from "../components/ExternalLink";
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
          <h1>Kun Li（李琨）</h1>

          {/* 职位行 */}
          <div className="text-secondary mt-1">
            Assistant Professor @ Tsinghua University
          </div>

          {/* Logo 行（新的一行，放大并左对齐） */}
          <div className="mt-2">
            <Image
              src={airLogo}
              alt="Institute for AI Industry Research (AIR), Tsinghua University"
              priority
              className="h-12 w-auto" // ✅ 控制大小：改 h-10/h-12/h-14...
            />
          </div>

          {/* 正文简介 */}
          <div className="text-secondary mt-6 space-y-4">
            <p>
              Dr. Kun Li is an Assistant Professor at the <ExternalLink  href="https://air.tsinghua.edu.cn/index.htm" target="_blank">Institute for AI Industry Research (AIR), Tsinghua University</ExternalLink>. He was previously a Senior Research Scientist at <ExternalLink  href="https://www.microsoft.com/en-us/research/" target="_blank">Microsoft Research</ExternalLink>. He received his Ph.D. degree from the <ExternalLink href="https://www.ict.ac.cn/" target="_blank">Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS)</ExternalLink>, and conducted research internships at Microsoft Research and <ExternalLink href="https://www.pku.edu.cn/" target="_blank">Peking University</ExternalLink>. His research focuses
              on HPC, AI for Science and Embodied AI.
            </p>
 
          </div>

          <div className="text-secondary mt-6 space-y-4">
            <p>
              Highly self-motivated undergraduate and PhD students are welcome to apply early for internships. If you are interested in Physical AI, AI for Science, and HPC, please feel free to contact me.
            </p>
 
          </div>

          <div className="mt-6">
            <Link href="/about">CV</Link>
          </div>
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
    .map((post) =>
      pick(post, ["slug", "title", "description", "time", "awards"])
    );

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
