import Section from "../components/Section";
import PeopleGrid from "../components/PeopleGrid";
import { faculty, phdStudents, undergraduate, alumni } from "../data/people";

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <Section heading="Assistant Professor" headingAlignment="left">
        <PeopleGrid people={faculty} />
      </Section>

      <Section heading="Ph.D. Students" headingAlignment="left">
        <PeopleGrid people={phdStudents} />
      </Section>

      <Section heading="Undergraduates" headingAlignment="left">
        <PeopleGrid people={undergraduate} />
      </Section>

      <Section heading="Alumni" headingAlignment="left">
        <PeopleGrid people={alumni} />
      </Section>
    </div>
  );
}
