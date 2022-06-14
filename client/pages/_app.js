import AdminLayout from "../components/Templates/AdminLayout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <AdminLayout>
    <Component {...pageProps} />
    // </AdminLayout>
  );
}

export default MyApp;
