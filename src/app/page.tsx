import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {NewArrivals,TopSelling} from "@/constants/routes";
import BrowseSection from "@/components/BrowseSection";
import CommentSection from "@/components/CommentSection";

export default function Home() {
  return (
      <div className={"overflow-hidden"}>
          <Hero/>
          <Section title={"NEW ARRIVALS"} products={NewArrivals} marginLine={true} />
          <Section title={"Top Selling"} products={TopSelling} marginLine={false} />
          <BrowseSection/>
          <CommentSection/>
      </div>
  );
}
