import { faculty, phdStudents } from "../data/people";
import PeopleGrid from "../components/PeopleGrid";

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* Faculty */}
      <PeopleGrid people={faculty} />

      {/* Ph.D. Students */}
      <PeopleGrid people={phdStudents} />
    </div>
  );
}
