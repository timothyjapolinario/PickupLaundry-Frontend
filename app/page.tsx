import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import ServicesTable from "./components/services/ServicesTable";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <ServicesTable />
    </div>
  );
}
