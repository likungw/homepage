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
    title: "Senior Researcher",
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
    title: "INFORMS ISS Nunamaker-Chen Dissertation Award",
    description: "2nd Runner-up",
    time: "2024",
  },
  {
    title: "Best Dissertation Award @ WITS",
    time: "2023",
  },
  {
    title: "Best Completed Research Paper Runner-up @ WeB",
    time: "2023",
  },
  {
    title: "Best Student Paper Runner-up @ CIST",
    time: "2023",
  },
  {
    title: "Best Paper Award @ ICIS, General Track",
    time: "2022",
  },
  {
    title: "Best Student Paper Award @ WITS",
    time: "2022",
  },
  {
    title: "Carlson School of Management Dissertation Fellowship",
    time: "2022",
  },
  {
    title: "First Place @ China Bridge Case Competition ($6,000)",
    description: "As Faculty Mentor, I coached a team of 4 undergraduate students.",
    time: "2021",
  },
  {
    title: "Dean’s Small Research Grant",
    time: "2020",
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
                Dr. Kun Li is currently a Senior Researcher at Microsoft Research, focusing on high-performance computing (HPC) systems. He received his Ph.D. degree with the State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS) in 2022. He was recognized with CCF Outstanding Doctoral Dissertation Award, ACM SIGHPC China Outstanding Doctoral Dissertation Award, CCF HPC Youth Talent Award, ACM SIGHPC China Rising Star Award, among others. His representative works have been continuously published at top-tier CCF-A conferences such as SC, PPoPP, ATC, ASPLOS, and ICS, receiving the Best Paper Award at PPoPP’24, Best Student Paper Award Finalist SC’25, and SC’25 Reproducibility Challenge Candidate. He is a keynote speaker at the CCF HPCChina 2024 conference, an Executive Member of the CCF Technical Committee on High-Performance Computing and Computer Architecture. 
              </p>
            </div>
          </Section>
          <Section heading="Research" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                My research focuses on <strong>highly scalable computing systems</strong> at the intersection of <strong>high-performance computing (HPC)</strong> and <strong>artificial intelligence (AI)</strong>. I pursue this vision through three primary directions:
              </p>
              <ul className="list-decimal ml-10">
                <li><strong>Scalable foundation models</strong> – Optimizing large-scale model training and inference for both efficiency and scalability on state-of-the-art HPC systems.</li>
                <li><strong>Matrix-centric scientific computing</strong> – Reformulating scientific algorithms and applications into unified matrix-based representations to break traditional trade-offs in performance, accuracy, and scalability.</li>
                <li><strong>Embodied scientific intelligence</strong> – Applying reinforcement learning and AI-for-Science methodologies to enable autonomous, multi-scale scientific discovery.</li>
              </ul>
              <p>
                I integrate <strong>system architecture design</strong>, <strong>compiler and kernel optimization</strong>, and <strong>large-scale experimental evaluation</strong> to transform emerging computing architectures into practical breakthroughs in scalable AI and HPC.
              </p>

            </div>
          </Section>
          <Section heading="Connect" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
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
                {awards.map((award) => (
                  <li className="" key="award">
                    <div className="flex justify-between gap-2">
                      <div className="flex flex-col gap-px">
                        <p>{award.title}</p>
                        {award.description && <p className="text-sm text-secondary">{award.description}</p>}
                      </div>
                      <p className="text-secondary">{award.time}</p>
                    </div>
                </li>
                ))}
              </ul>
            </div>
          </Section>
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