import AdminLayout from "../components/Templates/AdminLayout";
import { AppWrapper } from "../context/appContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <AdminLayout>
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
    // </AdminLayout>
  );
}

export default MyApp;
