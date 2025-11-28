import { Link, useParams } from "react-router";

export default function ServiceDetail() {
  const params = useParams();
  console.log("params :>>", params);

  // const { serviceId } = useParams<{ id?: string }>();
  const { serviceId } = useParams();
  console.log("serviceId :>>", serviceId);
  return (
    <div>
      {/* <p>Service Details {id}</p> */}
      {/* <p>Service Details {serviceId}</p> */}
      

      <Link to={`/service/${serviceId}/edit`}>Edit Service {serviceId}</Link>
      
    </div>
  );
}
