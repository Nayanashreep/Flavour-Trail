import { useParams } from "react-router-dom";

export default function RestaurantDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Restaurant #{id}</h2>
      <p>Menu will be displayed here...</p>
      <p>User reviews will be displayed here...</p>
    </div>
  );
}
