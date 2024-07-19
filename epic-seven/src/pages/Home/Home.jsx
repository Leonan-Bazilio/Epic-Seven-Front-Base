import CarouselBanner from "../../components/CarouselBanners";
import EventsTable from "../../components/EventsTable";
import InitialSection from "../../components/InitialSection";
import LatestReleases from "../../components/LatestReleases";
import SuggestionForm from "../../components/SuggestionForm";

export default function Home() {
  return (
    <div className="containerMain">
      <InitialSection />

      <CarouselBanner />

      <LatestReleases />

      <EventsTable />

      <SuggestionForm />
    </div>
  );
}
