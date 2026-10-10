import { NextSeo } from "next-seo";
import Section from "components/Section";
import PeopleGrid from "components/PeopleGrid";
import AlumniCarousel from "components/AlumniCarousel";
import ScrollReveal from "components/ScrollReveal";
import { faculty, phdStudents, undergraduate, alumni } from "../data/people";

export default function PeoplePage() {
  return (
    <>
      <NextSeo title="People | Kun Li Research Group" description="Meet the people and alumni of the Kun Li Research Group at Tsinghua AIR." canonical="https://www.likun.tech/people" />
      <div className="site-people-page">
        <header className="people-page-hero">
          <p className="home-section-kicker"><span className="home-kicker-line" /> THE PEOPLE BEHIND THE RESEARCH</p>
          <h1 className="site-page-title">Meet our <span className="home-accent">people</span>.</h1>
          <p className="site-page-intro">A curious team exploring scientific agents, world models, and scalable computing for discovery.</p>
        </header>
        <ScrollReveal>
          <Section heading="Principal Investigator" headingAlignment="left">
            <PeopleGrid people={faculty} featured />
          </Section>
        </ScrollReveal>
        <ScrollReveal>
          <Section heading="Graduate Researchers" headingAlignment="left">
            <PeopleGrid people={phdStudents} />
          </Section>
        </ScrollReveal>
        <ScrollReveal>
          <Section heading="Undergraduate Researchers" headingAlignment="left">
            <PeopleGrid people={undergraduate} />
          </Section>
        </ScrollReveal>
        <ScrollReveal>
          <Section heading="Alumni" headingAlignment="left">
            <AlumniCarousel people={alumni} />
          </Section>
        </ScrollReveal>
      </div>
    </>
  );
}
