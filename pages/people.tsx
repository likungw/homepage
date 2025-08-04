import Section from "../components/Section";
import PeopleGrid from "../components/PeopleGrid";
import { faculty, phdStudents } from "../data/people";

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <Section heading="Faculty" headingAlignment="left">
        <PeopleGrid people={faculty} />
      </Section>

      <Section heading="Ph.D. Students" headingAlignment="left">
        <PeopleGrid people={phdStudents} />
      </Section>
    </div>
  );
}
