import { Outlet } from "react-router";
import type { BannerProps } from "../type/type";
import Banner from "./Banner";

export default function AuthLayout() {
  const banner: BannerProps = {
    title: "Welcome to Auth Section",
    description: "Please login or register to container.",
    buttonText: "Auth Banner",
  };
  return (
    <>
      {/* <ul className='flex gap-4 justify-center my-4'>  
            <Link to="/auth/login">Login</Link> 
            <Link to="/auth/register">Register</Link>
     </ul> */}

      <Banner banner={banner} />

      <Outlet />
    </>
  );
}
