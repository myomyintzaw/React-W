import { Link, Outlet } from "react-router";
import { useName } from "../components/context/NameContext";


export default function Service() {
  const {name,setName} = useName();
  return (
    <div className="h-screen bg-green-200 flex items-center justify-center flex-col text-center p-20 m-20">
      <h1>Service</h1>
      <div className="flex justify-between gap-20">
      {/* <ul className="flex flex-col"> */}
      <ul className="flex  flex-col w-[200px] gap-4">
        <Link to="/service/1">Service 1</Link>
        <Link to="/service/2">Service 2</Link>
        <Link to="/service/3">Service 3</Link>
      </ul>
       <Outlet/>
      </div>
      <b>{name}</b>
      <button className="" onClick={()=>setName(name==="John Done"?"Rose":"John Done")}>Change Name</button>
    </div>
  )
}
