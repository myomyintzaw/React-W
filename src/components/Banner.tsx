import type { BannerProps } from "../type/type";
import Button from "./Button";

export default function Banner({ banner }: { banner: BannerProps }) {
  return (
    <div className=" h-[400px] flex items-center justify-center flex-col text-center">
      <h1 className="text-4xl font-bold mb-4">{banner.title}</h1>
      <p className="text-lg">{banner.description}</p>
      <Button bgColor="bg-green-500" buttonText={banner.buttonText}/>
      <Button buttonText={"Click Here"}/>
      <Button bgColor="bg-red-700" textColor="text-green-300" buttonText={"Delete"}/>

    </div>
  );
}
