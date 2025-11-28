import { useParams } from "react-router";

export default function EditPost() {
  const { id } = useParams();
  return (
    <div>
      <p>Edit Post {id}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia unde
        libero ea molestiae adipisci. Maxime nisi quasi suscipit nostrum
        recusandae, fugiat quaerat reiciendis aperiam dignissimos tenetur quo
        voluptatibus magnam officiis!
      </p>
    </div>
  );
}
