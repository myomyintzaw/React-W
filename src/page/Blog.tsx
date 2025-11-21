import Banner from "../components/Banner";
import type { BannerProps } from "../type/type";

export default function Blog() {
  const banner: BannerProps = {
    title: "Welcome to React Basic",
    description: "Learning React is fun and easy",
    buttonText: "Read",
  };
  return (
    <>
    <Banner banner={banner}/>
      <div className="h-screen bg-rose-200 flex items-center justify-center flex-col text-center">
        <h1>Blog</h1>
      </div>
    </>
  );
}
