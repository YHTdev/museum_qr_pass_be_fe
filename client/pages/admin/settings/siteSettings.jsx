import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../../components/Templates/AdminLayout";

const SiteSettings = () => {
  return (
    <AdminLayout>
      <AdminTitle>Site Settings</AdminTitle>
      <AdminBody>
        <div className="grid grid-cols-2 ">
          <h1>Site </h1>
        </div>
      </AdminBody>
    </AdminLayout>
  );
};

export default SiteSettings;
