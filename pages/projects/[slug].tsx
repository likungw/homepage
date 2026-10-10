import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Link from "components/Link";
import { researchProjects, ResearchProject } from "../../data/projects";
import { researchDirections } from "../../data/research";

type Props = { project: ResearchProject };

export default function ResearchProjectPage({ project }: Props) {
  const direction = researchDirections.find((entry) => entry.number === project.direction);
  return (
    <>
      <NextSeo
        title={`${project.title} | Kun Li Research Group`}
        description={project.summary}
        canonical={`https://www.likun.tech/projects/${project.slug}`}
      />
      <article className="project-detail">
        <Link href="/projects" className="project-detail-back">← All research directions</Link>
        <div className="project-detail-hero">
          <div className="project-detail-glow" aria-hidden="true" />
          <p className="home-section-kicker"><span className="home-kicker-line" /> {direction?.title ?? "Research"} / Project</p>
          <div className="project-detail-metadata"><span>{project.eyebrow}</span><span className="project-status">{project.status}</span></div>
          <h1>{project.title}<span className="home-accent">.</span></h1>
          <p className="project-detail-lead">{project.summary}</p>
          <div className="project-detail-actions">
            {project.paperUrl && <Link href={project.paperUrl} className="home-cta-primary">Read the paper <span aria-hidden="true">↗</span></Link>}
            <Link href="/publications" className="home-cta-secondary">All publications <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="project-detail-body">
          <section>
            <p className="project-detail-label">THE IDEA</p>
            <h2>Project overview</h2>
            <p>{project.overview}</p>
            {project.status === "Concept demo" && <p className="project-template-note">Demo content — replace with verified research descriptions before publication.</p>}
          </section>
          <aside>
            <p className="project-detail-label">TOPICS</p>
            <h2>Research focus</h2>
            <ul>{project.focus.map(item => <li key={item}><span aria-hidden="true">✳</span>{item}</li>)}</ul>
          </aside>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: researchProjects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = researchProjects.find((entry) => entry.slug === params?.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
};
