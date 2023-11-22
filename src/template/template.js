import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export function Template() {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <p>Footer</p>
        </div>
    );
}