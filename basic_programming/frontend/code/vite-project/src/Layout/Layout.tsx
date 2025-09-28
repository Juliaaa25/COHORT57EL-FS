import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";


export default function Layout():JSX.Element {
  return (
    <div>
        <NavBar />
        <Outlet />
        <main>Hello</main>
        <footer>
            Здесь будет подвал
        </footer>
      
    </div>
  )
}
