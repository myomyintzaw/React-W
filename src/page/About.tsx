
import Banner from "../components/Banner";
import type { BannerProps } from "../type/type";

export default function About() {
    const banner:BannerProps={
        title:"Welcome to About Page",
        description:"Learning React is fun and easy",
        buttonText:"Read More",
      }
  return (
    <>
    <Banner banner={banner}/>
      <div className="h-screen bg-amber-200 flex items-center justify-center flex-col text-center">
        <h1>About</h1>
      </div>
    </>
  );
}
