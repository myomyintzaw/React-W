import { Link, useParams } from "react-router";

export default function PostDetails() {
  const { id } = useParams();
  return (
    <div className="px-4">
      <h1>Hello world {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta,
        voluptates aliquid delectus animi fugiat qui nihil recusandae eius quos
        rem quaerat cupiditate asperiores incidunt quas necessitatibus, officiis
        ipsum magni.
      </p>
      <Link className="text-blue-500" to={`/posts/${id}/edit`}>Edit Post</Link>
    </div>
  );
}
