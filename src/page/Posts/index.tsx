import { Link, Outlet } from "react-router";


export default function Post() {
  return (
    <div className="p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Posts Page</h1>
        <Link to="/posts/new" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Create New Post
        </Link>
        
        {/* <div className="space-y-4"> */}
        <div className="flex gap-10">
            <ul className="flex flex-col w-[300px]">
                <Link to="/posts/1" className="p-4 underline border rounded hover:bg-gray-100">Post 1</Link>
                <Link to="/posts/2" className="p-4 underline border rounded hover:bg-gray-100">Post 2</Link>
                <Link to="/posts/3" className="p-4 underline border rounded hover:bg-gray-100">Post 3</Link>
                <Link to="/posts/4" className="p-4 underline border rounded hover:bg-gray-100">Post 4</Link>
                <Link to="/posts/5" className="p-4 underline border rounded hover:bg-gray-100">Post 5</Link>
            </ul>
            <Outlet/>
        </div>    

    </div>
  );
}
