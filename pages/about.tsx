import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";
import { ActivityType } from "components/Activity";

import cuhkLogo from "public/schools/CUHK.png";
import umnLogo from "public/schools/UMN.png";
import msftLogo from "public/schools/msft.png";
import pkuLogo from "public/schools/pku.png";
import sduLogo from "public/schools/sdu.png";
import casLogo from "public/schools/cas.png";

import githubLogo from "public/Github.png";
import jupyterLogo from "public/projects/jupyter.png";
import qianjianLogo from "public/ventures/qianjian.png";
import stayLogo from "public/ventures/stay.jpeg";
import openaiLogo from "public/projects/openai-logo.png";
import nosediveLogo from "public/projects/nosedive.png";
import canvasLogo from "public/projects/canvas.png";
import isjobsLogo from "public/ventures/davis001.jpg";
import surgeLogo from "public/ventures/surge.svg";
import misqLogo from "public/ventures/misq.png";

import avatar from "public/avatar.png";

import { GetStaticProps } from "next";
import { Project, allProjects } from "../.contentlayer/generated";
import { pick } from "lib/pick";
import MDXComponents from "../components/MDXComponents";
import { getActivities, getActivity } from "../lib/strava";

export const connectLinks = [
  { label: "Email", href: "mailto:likungw@gmail.com" },
  { label: "WeChat", href: "https://www.likun.tech/ventures/wechat.jpg" },
  { label: "Twitter", href: "https://x.com/KunLi90358191" },
  { label: "Bilibili", href: "https://space.bilibili.com/484878899" },
  { label: "Xiaohongshu", href: "https://www.likun.tech/ventures/xiaohongshu.jpg" },
  { label: "Google Scholar", href: "https://scholar.google.com.hk/citations?user=2J-7nxUAAAAJ&hl=en" }
];

export const FullName = "Kun Li";
export const SiteURL = "https://www.likun.tech";

const education = [
  {
    title: "Senior Researcher / Researcher",
    description: "Microsoft Research",
    time: "2022.07 - Present",
    advisor: "Prof. Ting Cao",
    imageSrc: msftLogo,
  },
  {
    title: "Ph.D. in Computer Architecture",
    description: "Institute of Computing Technology, Chinese Academy of Sciences\n University of Chinese Academy of Sciences",
    time: "2016.09 – 2022.06",
    advisor: "Prof. Yunquan Zhang",
    imageSrc: casLogo,
  },
  {
    title: "Research Intern, System Group",
    description: "Microsoft Research",
    time: "2021.09 - 2022.03",
    advisor: "Prof. Ting Cao",
    imageSrc: msftLogo,
  },
  {
    title: "Research Intern, Parallel Theory Lab",
    description: "Peking University",
    time: "2017.07 – 2018.06",
    advisor: "Prof. Yifeng Chen",
    imageSrc: pkuLogo,
  },
  {
    title: "B.E. in  Computer Science and Technology (Elite Program)",
    description: "Shandong University",
    time: "2012.09 – 2016.06",
    imageSrc: sduLogo,
  },
];

const sideProjects = [
  {
    title: "ChatGPT Quick Actions for Raycast",
    time: "2023",
    description: "Invoke ChatGPT anywhere on your Mac",
    imageSrc: openaiLogo,
    link: "https://github.com/alanzchen/chatgpt-quick-actions",
  },
  {
    title: "Canvas Tools",
    time: "2022",
    description: "A set of CLI tools for Canvas LMS",
    imageSrc: canvasLogo,
    link: "https://github.com/alanzchen/Canvas-Tools"
  },
  {
    title: "Jupyter Desktop",
    time: "2020",
    description: "macOS App for Jupyter Lab",
    imageSrc: jupyterLogo,
    link: "https://github.com/alanzchen/jupyter-desktop",
  },
  {
    title: "Nosedive",
    time: "2017",
    description: "Parody website of Black Mirror's Nosedive",
    imageSrc: nosediveLogo,
    link: "https://github.com/alanzchen/nosedive/",
  }
];

const ventures = [
  {
    title: "IS Jobs",
    time: "2022 -",
    description: "Crowdsourced database for IS job posts",
    imageSrc: isjobsLogo,
    link: "https://isjobs.xyz",
  },
  {
    title: "MISQ Insider (as founding coordinator)",
    time: "2021 -",
    description: "MISQ-affiliated student blog for interviews",
    imageSrc: misqLogo,
    link: "https://www.linkedin.com/company/misqinsider/",
  },
  {
    title: "Surge.fm",
    time: "2020 -",
    description: "Crowdsourced self-organizing news aggregator",
    imageSrc: surgeLogo,
    link: "https://surge.fm",
  },
  {
    title: "浅见 (Qianjian)",
    time: "2014 - 18",
    description: "Online campus media for CUHK(SZ)",
    imageSrc: qianjianLogo,
    link: "https://qianjian.space",
  },
  {
    title: "月台 (Stay)",
    time: "2015 - 17",
    description: "Campus magazine for CUHK(SZ)",
    imageSrc: stayLogo,
    link: "https://archive.qianjian.space/stay/",
  }
];

const awards = [
  {
    title: "CCF Youth Talent Award in High Performance Computing",
    description: "Recognizing outstanding HPC contributions in China aged 40 or younger, as youngest recipient at 31.",
    time: "2024",
    link: "https://mp.weixin.qq.com/s/T_lkOX7GvrnK-owixr5DZQ",
  },
  {
    title: "ACM SIGHPC China Rising Star Award",
    description:"≤3 nationwide in HPC fields each year",
    time: "2024",
    link: "https://mp.weixin.qq.com/s/v8am92KG7jePh5uHxYzCmg",
  },
 {
    title: "CCF Outstanding Doctoral Dissertation Award",
    description:"Prestigious CS PhD award (≤10 nationwide each year)",
    time: "2022",
    link: "https://www.ccf.org.cn/Membership/Individual_member/Honor/yxbsxwlwjljh/",
  },
  {
    title: "ACM SIGHPC China Outstanding Doctoral Dissertation Award",
    description:"≤3 nationwide in HPC fields each year",
    time: "2022",
    link: "https://www.acmturc.com/2022_bak/cn/doctoral_thesis_award.html",
  },
  {
    title: "President’s Award of the Chinese Academy of Sciences ",
    description:"Highest honor for CAS graduate students",
    time: "2022",
    link: "http://www.iedu.cas.cn/contentcrawler/detail/993c0a5549154bd6b141f7a2b6b53ea9",
  },
  {
    title: "President’s Award of Institute of Computing Technology ",
    description:"Highest honor for ICT graduate students",
    time: "2022", 
  },
  {
    title: "Multiple scholarships from UCAS ",
    description: "National Scholarship, UCAS-BHPB Scholarship, UCAS-Sugon Scholarship", 
    time: "Before 2022", 
  },
  {
    title: "National Parallel Application Challenge Bronze Award ",
    time: "2016", 
  },
];

const seoTitle = `About | ${FullName}`;
export const seoDesc =
  "Assistant Professor in Information Systems. For a more humane & productive future.";

export default function About({ projects, activities }: { projects: Project[]; activities: ActivityType[] }) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `/about/`,
          site_name: `${FullName}`,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="hidden sm:block">
          <Gallery activities={activities}/>
        </div>
        <div className="-mb-8 sm:hidden animate-in">
          <Image
            src={avatar}
            width={48}
            height={48}
            alt={`avatar of ${FullName}`}
          />
        </div>
        <div
          className="flex flex-col gap-16 animate-in sm:animate-none md:gap-16"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Section heading="About me" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                Dr. Kun Li is currently a Senior Researcher at Microsoft Research, specializing in <strong>high-performance computing (HPC) systems</strong>. 
                He received his Ph.D. degree in Computer Architecture from the State Key Laboratory of Computer Architecture, 
                Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS) in 2022.
              </p>

              <p>
                He has been recognized with numerous honors, including the <strong>CCF Outstanding Doctoral Dissertation Award</strong>, <strong>ACM SIGHPC China Outstanding Doctoral Dissertation Award</strong>,  <strong>CCF Youth Talent Award in HPC</strong>, and <strong>ACM SIGHPC China Rising Star Award</strong>. His work has been published in top-tier CCF-A conferences such as <strong>SC</strong>, <strong>PPoPP</strong>, <strong>ATC</strong>, <strong>ASPLOS</strong>, and <strong>ICS</strong>, earning the <strong>Best Paper Award at PPoPP’24</strong>, <strong>SC’25 Best Student Paper Award Finalist</strong>, and <strong>SC’25 Reproducibility Challenge Candidate</strong>. 
              </p>

              <p>
                He serves as a keynote speaker at CCF HPC China 2024, as an Executive Committee Member of the CCF Technical Committee on High-Performance Computing and Computer Architecture, and as a Program Committee Member for PPoPP 2026.
              </p>

            </div>
          </Section>
          <Section heading="Research" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                My research focuses on <strong>highly scalable computing systems</strong> at the intersection of <strong>high-performance computing (HPC)</strong> and <strong>artificial intelligence (AI)</strong>. I aim to advance this vision through three core research directions: 
              </p>
              <ul className="list-decimal ml-10">
                <li><strong>Scalable foundation models</strong> – Enhancing the efficiency and scalability of large-scale model training and inference on cutting-edge HPC infrastructures.</li>
                <li><strong>Matrix-centric scientific computing</strong> – Transforming scientific algorithms and applications into unified matrix-based representations to break traditional trade-offs in performance, accuracy, and scalability.</li>
                <li><strong>Embodied scientific intelligence</strong> – Advancing reinforcement learning and AI4Science to create autonomous agents capable of multi-scale scientific reasoning and discovery.</li>
              </ul>

            </div>
          </Section>
          <Section heading="Connect" headingAlignment="right">
            <ul className="flex flex-wrap gap-4 sm:gap-6 animated-list">
              {connectLinks.map((link) => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Experience" headingAlignment="right">
            <div className="flex flex-col w-full gap-4">
              <Workplaces items={education} />
            </div>
          </Section>
          <Section heading="Selected Awards" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <ul className={`flex flex-col gap-1`}>
                {awards.map((award, index) => (
                  <li className="" key={index}>
                    {/* 父容器：左右分布 + 垂直居中 */}
                    <div className="flex justify-between items-center gap-2">{/* ✅ items-center */}
                      
                      {/* 左侧：奖项标题 + 描述 */}
                      <div className="flex flex-col gap-px">
                        {award.link ? (
                          <Link href={award.link}>
                            {award.title}
                          </Link>
                        ) : (
                          <p>{award.title}</p>
                        )}
                        {award.description && (
                          <p className="text-sm text-secondary">{award.description}</p>
                        )}
                      </div>

                      {/* 右侧：时间列（固定宽度 + 右对齐，与 Workplaces 一致 w-32） */}
                      <p className="text-secondary w-32 text-right">{/* ✅ 统一 w-32 */}
                        {award.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* 
          <Section heading="Initiatives" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>Initiatives I have founded, co-founded, or advised. </p>
              <Workplaces items={ventures} isAnimated />
            </div>
          </Section>
          <Section heading="Side Projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>I am also a self-taught full-stack developer. I build stuff for fun :) </p>
              <Workplaces items={sideProjects} isAnimated />
            </div>
          </Section>
          */}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const projects = allProjects
    .sort((a, b) => parseInt(b.time.slice(0, 4)) - parseInt(a.time.slice(0, 4)))
    .map((post) =>
    pick(post, ["slug", "title", "description", "time"])
  );

  let activities: ActivityType[] = [];
  try {
    activities = await getActivities();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      projects: projects,
      activities: activities
    },
    revalidate: 3600,
  };
};