import { Link, Outlet } from "react-router";


export default function Hook() {
  return (
    <div className="px-4">
    <h1 className="text-3xl font-bold m-4 text-center">Hook</h1>
    <div className="flex gap-10">
        <ul className="flex flex-col w-[300px] gap-4">
          <li className="flex flex-col gap-2">
            <Link to="/hook/use-state" className="p-4 underline border rounded hover:bg-gray-100">Use State</Link>
            <Link to="/hook/use-effect" className="p-4 underline border rounded hover:bg-gray-100">Use Effect</Link>
            <Link to="/hook/use-context" className="p-4 underline border rounded hover:bg-gray-100">Use Context</Link>
            <Link to="/hook/use-ref" className="p-4 underline border rounded hover:bg-gray-100">Use Ref</Link>
            <Link to="/hook/use-memo" className="p-4 underline border rounded hover:bg-gray-100">Use Memo</Link>
            <Link to="/hook/use-callback" className="p-4 underline border rounded hover:bg-gray-100">Use Callback</Link>

          </li>
        </ul>
        <Outlet/>
    </div>
    </div>
  )
}
