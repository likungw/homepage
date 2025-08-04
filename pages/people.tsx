import { NextSeo } from "next-seo";
import { FullName, SiteURL } from "./about";
import Section from "../components/Section";
import PeopleGrid from "../components/PeopleGrid";
import { faculty, phdStudents } from "../data/people";

const seoTitle = `People | ${FullName}`;
const seoDesc = `People in ${FullName}'s group`;

export default function PeoplePage() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `${SiteURL}/people`,
          description: seoDesc,
          site_name: FullName,
        }}
      />

      <div className="flex flex-col gap-16 md:gap-24">
        <Section heading="Faculty" headingAlignment="left">
          <PeopleGrid people={faculty} />
        </Section>

        <Section heading="Ph.D. Student" headingAlignment="left">
          <PeopleGrid people={phdStudents} />
        </Section>
      </div>
    </>
  );
}
