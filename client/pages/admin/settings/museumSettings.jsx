import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../../components/Templates/AdminLayout";
import { useAppContext } from "../../../context/appContext";

const MuseumSettings = () => {
  const { adminRoutes } = useAppContext();

  return (
    <AdminLayout>
      <AdminTitle>Museum Settings</AdminTitle>
      <AdminBody>
        {adminRoutes.map((route) => (
          <div key={route.id} className="">
            <p>{route.title}</p>
            <p>{route.route}</p>
          </div>
        ))}
      </AdminBody>
    </AdminLayout>
  );
};

export default MuseumSettings;
