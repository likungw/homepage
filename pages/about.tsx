import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery, { Photo } from "components/Gallery";
import TalkList from "components/TalkList";
import ScrollReveal from "components/ScrollReveal";

import headshot from "public/headshot.jpg";
import airLogo from "public/schools/airlogo.png";
import msftLogo from "public/schools/msft.png";
import pkuLogo from "public/schools/pku.png";
import sduLogo from "public/schools/sdu.png";
import casLogo from "public/schools/cas.png";
import thuLogo from "public/schools/thu.png";
import { talks } from "../data/talks";

export const connectLinks = [
  { label: "Email", href: "mailto:likungw@gmail.com" },
  { label: "WeChat", href: "https://www.likun.tech/ventures/wechat.jpg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thu-kunli" },
  { label: "Twitter", href: "https://x.com/KunLi90358191" },
  { label: "Bilibili", href: "https://space.bilibili.com/484878899" },
  { label: "Xiaohongshu", href: "https://www.likun.tech/ventures/xiaohongshu.jpg" },
  { label: "Google Scholar", href: "https://scholar.google.com.hk/citations?user=2J-7nxUAAAAJ&hl=en" }
];

export const FullName = "Kun Li";
export const SiteURL = "https://www.likun.tech";

const education = [
  {
    title: "Assistant Professor",
    description: "Tsinghua University, reporting to Prof. Yunxin Liu",
    time: "2025.12 - Present",
    advisor: "Prof. Yunxin Liu & Prof. Ting Cao",
    imageSrc: thuLogo,
  },
  {
    title: "Senior Research Scientist",
    description: "Microsoft Research, reporting to Prof. Ting Cao",
    time: "2022.07 - 2025.12",
    advisor: "Prof. Ting Cao",
    imageSrc: msftLogo,
  },
  {
    title: "Ph.D. in Computer Architecture",
    description: "Institute of Computing Technology, CAS, advised by Prof. Yunquan Zhang",
    time: "2016.09 – 2022.06",
    advisor: "Prof. Yunquan Zhang",
    imageSrc: casLogo,
  },
  {
    title: "Research Intern",
    description: "Microsoft Research",
    time: "2021.09 - 2022.03",
    advisor: "Prof. Ting Cao",
    imageSrc: msftLogo,
  },
  {
    title: "Research Intern",
    description: "Peking University, advised by Prof. Yifeng Chen",
    time: "2017.07 – 2018.06",
    advisor: "Prof. Yifeng Chen",
    imageSrc: pkuLogo,
  },
  {
    title: "B.E. in  Computer Science and Technology",
    description: "Shandong University",
    time: "2012.09 – 2016.06",
    imageSrc: sduLogo,
  },
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
  "Kun Li is an Assistant Professor at Tsinghua University studying scalable computing, scientific world models, and self-improving scientific intelligence.";

const futureTalks = talks.filter((talk) => new Date(talk.date).getTime() > Date.now());

export default function About() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: "/about/",
          site_name: FullName,
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <div className="about-page mx-auto flex flex-col gap-14 pb-6 md:gap-20">
        <section aria-labelledby="about-heading" className="about-hero grid items-start gap-9 sm:grid-cols-[minmax(0,1fr)_260px] md:gap-12 animate-in">
          <div className="min-w-0">
            <p className="about-kicker mb-4 text-xs font-semibold uppercase tracking-[0.18em]">
              About the PI
            </p>
            <h1 id="about-heading" className="about-name text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Kun Li <span className="text-2xl font-normal tracking-normal text-secondary sm:text-3xl">李琨</span>
            </h1>
            <p className="mt-2 text-base text-secondary">
              Assistant Professor · Tsinghua University
            </p>
            <Image
              src={airLogo}
              alt="Institute for AI Industry Research (AIR), Tsinghua University"
              className="mt-3 h-11 w-auto object-contain object-left"
              priority
            />
            <div className="about-copy mt-7 space-y-4 text-secondary">
              <p>
                I am an Assistant Professor at the{" "}
                <Link href="https://air.tsinghua.edu.cn/en/info/1046/1962.htm" underline>
                  Institute for AI Industry Research (AIR), Tsinghua University
                </Link>
                . Previously, I was a Senior Research Scientist at{" "}
                <Link href="https://www.microsoft.com/en-us/research/" underline>
                  Microsoft Research
                </Link>
                . I received my Ph.D. from the{" "}
                <Link href="https://www.ict.ac.cn/" underline>
                  Institute of Computing Technology, Chinese Academy of Sciences
                </Link>
                .
              </p>
              <p>
                My research connects high-performance computing, scientific world models,
                and AI for Science. Our long-term vision is to build verifiable,
                self-improving scientific intelligence that advances models,
                methods, and computational tools.
              </p>
            </div>
            {/* One consistent row of pill links; wraps gracefully on smaller screens. */}
            <div className="about-connect" aria-label="Contact and social profiles">
              <div className="about-connect-primary">
                {connectLinks.map((link) => (
                  <Link href={link.href} className="about-main-link" key={link.label}>
                    {link.label} <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Restore the original draggable, spring-loaded, hover-to-flip portrait. */}
          <div className="relative mx-auto flex w-[260px] flex-col items-center sm:mx-0 sm:items-start">
            <div className="relative h-[337px] w-[260px]">
              <Photo
                src={headshot}
                alt="Portrait of Kun Li"
                width={226}
                height={300}
                rotate={6.3}
                index={1}
                flipDirection="left"
                meta={
                  <span className="flex flex-col gap-3">
                    <span>Kun Li<br />Tsinghua AIR</span>
                    <span>Researching HPC × AI × Science</span>
                  </span>
                }
              />
            </div>
            <p className="text-xs text-secondary">Drag · Hover to flip</p>
          </div>
        </section>

        {/* The original About gallery: four candid photographs, with the same
            spring entrance, gentle rotations, drag behavior and flip animation. */}
        <section aria-label="Moments beyond research" className="about-gallery-wrap min-w-0">
          <p className="about-kicker mb-2 text-xs font-semibold uppercase tracking-[0.17em]">
            Beyond the research
          </p>
          <Gallery activities={[]} />
        </section>

        <aside className="about-recruitment relative overflow-hidden rounded-2xl p-5 sm:p-6 animate-in" style={{ animationDelay: "110ms" }}>
          <span className="about-recruitment-line absolute bottom-0 left-0 top-0 w-1" aria-hidden="true" />
          <div className="about-recruitment-layout">
            <div className="min-w-0">
              <p className="about-recruitment-kicker text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Join our group
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                Curious minds are welcome.
              </h2>
              <p className="about-copy mt-3 text-secondary">
                I recruit 2–3 Ph.D. students each year and welcome applications
                from prospective postdoctoral researchers and long-term interns.
                If you are interested in scientific agents, scientific world models, or scalable computing,
                please send your CV and a short description of your research interests.
              </p>
            </div>
            <div className="about-recruitment-aside">
              <p className="about-recruitment-kicker text-xs font-semibold uppercase tracking-[0.13em]">
                Opportunities
              </p>
              <div className="about-recruitment-roles" aria-label="Open positions">
                <span>Ph.D. students</span>
                <span>Postdoctoral researchers</span>
                <span>Research interns</span>
              </div>
              <Link href="mailto:likungw@gmail.com" className="about-main-link about-recruitment-cta">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </aside>

        <div className="about-details flex flex-col gap-14 md:gap-16">
          <ScrollReveal>
          <Section heading="About me" headingAlignment="right">
            <div className="about-copy space-y-4 text-secondary">
              <p>
                My work spans high-performance computing and artificial intelligence,
                with publications at <strong className="text-primary">NeurIPS, SC, PPoPP, ATC,
                ASPLOS, PLDI, ICS, ISC, TACO, and TPDS</strong>. It has been recognized
                by distinctions including a PPoPP Best Paper Award, the SC&apos;25
                Best Student Paper Award Finalist, and the SC&apos;24 Reproducibility
                Challenge Finalist.
              </p>
              <p>
                I have received the CCF Outstanding Doctoral Dissertation Award,
                the ACM SIGHPC China Outstanding Doctoral Dissertation Award,
                the CCF HPC Youth Talent Award, and the ACM SIGHPC China Rising
                Star Award.
              </p>
            </div>
          </Section>
          </ScrollReveal>

          <ScrollReveal>
          <Section heading="Service" headingAlignment="right">
            <p className="about-copy text-secondary">
              I serve on program committees including PPoPP 2026 (Distinguished
              Reviewer and Best Paper selection), ISC 2026, SC 2026, ASPLOS 2027,
              PPoPP 2027, FAISys 2026, HPCA 2027, and ICS 2027. I have also
              given keynote and invited talks at CCF HPC China and ACM ChinaSC,
              and serve on the executive committee of the CCF Technical Committee
              on High-Performance Computing and Computer Architecture.
            </p>
          </Section>
          </ScrollReveal>

          <ScrollReveal>
          <Section heading="Experience" headingAlignment="right">
            <Workplaces items={education} />
          </Section>
          </ScrollReveal>

          <ScrollReveal>
          <Section heading="Selected Awards" headingAlignment="right">
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={`${award.title}-${award.time}`} className="grid grid-cols-[minmax(0,1fr)_76px] gap-3 sm:grid-cols-[minmax(0,1fr)_112px]">
                  <div className="min-w-0">
                    {award.link ? (
                      <Link href={award.link} className="font-medium underline-offset-4 hover:underline">
                        {award.title}
                      </Link>
                    ) : (
                      <p className="font-medium">{award.title}</p>
                    )}
                    {award.description && <p className="mt-1 text-xs leading-5 text-secondary">{award.description}</p>}
                  </div>
                  <time className="pt-0.5 text-right text-xs text-secondary sm:text-sm">
                    {award.time}
                  </time>
                </li>
              ))}
            </ul>
          </Section>
          </ScrollReveal>

          {futureTalks.length > 0 && (
            <ScrollReveal>
            <Section heading="Upcoming Talks" headingAlignment="right">
              <TalkList talks={[...futureTalks]} />
            </Section>
            </ScrollReveal>
          )}
        </div>
      </div>
    </>
  );
}
