import { useCallback, useState } from "react";
import Section from "../../components/UI/section";
import TableBreadCrumbs from "../../components/features/timetable/bread-crumbs";
import Table from "../../components/features/timetable/table";

function TimeTable() {
  const [category, setCategory] = useState("all");
  const clickHandler = useCallback((e) => {
    e.preventDefault();
    setCategory(e.target.getAttribute("href"));
  }, []);

  return (
    <Section>
      <Section.Header
        className={"!gap-5"}
        title={"find your time"}
        subTitle={"find your time"}
      >
      <TableBreadCrumbs onClick={clickHandler} category={category}/>      
      </Section.Header>
      <Section.Body>
        <Table className={"w-max max-w-full"} category={category}/>
      </Section.Body>
    </Section>
  );
}


export default TimeTable;
