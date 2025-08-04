import { NextSeo } from "next-seo";
import { FullName, SiteURL } from "./about";
import Section from "components/Section";
import PeopleGrid from "components/PeopleGrid";
import { faculty, phdStudents } from "../data/people";

export default function PeoplePage() {
  const seoTitle = `People | ${FullName}`;
  const seoDesc = `Faculty and students associated with ${FullName}.`;

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
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <div className="flex flex-col gap-16 md:gap-20 animate-in">
        {/* Faculty 区块 */}
        <Section heading="Faculty" headingAlignment="left">
          <PeopleGrid people={faculty} />
        </Section>

        {/* Ph.D. Students 区块 */}
        <Section heading="Ph.D. Students" headingAlignment="left">
          <PeopleGrid people={phdStudents} />
        </Section>
      </div>
    </>
  );
}
