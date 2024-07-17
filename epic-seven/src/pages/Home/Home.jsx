import CarouselBanner from "../../components/CarouselBanners";
import InitialSection from "../../components/InitialSection";

export default function Home() {
  return (
    <div className="containerMain">
      <InitialSection />

      <CarouselBanner />
    </div>
  );
}
