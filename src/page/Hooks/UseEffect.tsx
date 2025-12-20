import { useEffect, useState } from "react";
import type { Post } from "../../type/type";

export default function UseEffect() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log("posts", posts);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rose");

  useEffect(() => {
    console.log("hello");
    const timer = setInterval(() => {
      console.log("track");
    }, 1000);

    //clearInterval(timer) cleanup function
    //option
    return () => clearInterval(timer);
  }, [name]);

  useEffect(() => {
    //browser will cancel the request if the component is unmounted (browser build in)
    const abortController = new AbortController();

    console.log("use effect");
    fetchPosts();

    return () => abortController.abort(); //clean up function
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000)); //no need in production
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>UseEffect</h1>

      <p>name:{name}</p>
      <button onClick={() => setName("bobo")}>Set Name</button>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Count</button>

      <div className="grid grid-cols-3 gap-4">
        {loading &&
          Array.from({ length: 9 }).map((_, index) => (
            <div className="bg-white py-1 mb-2 rounded-md p-2" key={index}>
              <div className="bg-slate-200 p-4 required-md">
                <div className="bg-slate-400 py-20 mb-2 rounded-md w-77"></div>
                <div className="bg-white py-2 mb-2 rounded-md px-2"></div>
                <div className="bg-white py-1 mb-2 rounded-md"></div>
              </div>
            </div>
          ))}
        <p className="text-2xl font-bold text-center">Loading...</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 p-4 rounded-md mb-4"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
