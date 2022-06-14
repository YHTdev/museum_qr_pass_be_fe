import AdminLayout, {
  AdminTitle,
  AdminBody,
} from "../components/Templates/AdminLayout";

export default function Home() {
  const n = 80; // Or something else

  return (
    <AdminLayout>
      <AdminTitle>Dashboard</AdminTitle>
      <AdminBody>
        {[...Array(n)].map((e, i) => (
          <p className="" key={i}>
            {i}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            illum, eveniet veritatis molestias suscipit libero officia, in
            laboriosam repellendus voluptatibus sapiente! Quia deserunt natus
            rerum dignissimos quae. Quidem, atque ex.
          </p>
        ))}
      </AdminBody>
    </AdminLayout>
  );
}
