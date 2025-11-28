import { useParams } from "react-router"


export default function ServiceEdit() {
    const {serviceId}=useParams();
    console.log("Editing service with ID:",serviceId);

  return (
    <div className="h-screen bg-amber-300 w-2xs">
      <p>Edit Service {serviceId}</p>
    </div>
  )
}
