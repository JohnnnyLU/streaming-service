import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {Outlet} from "react-router-dom";

export function MainLayout () {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}