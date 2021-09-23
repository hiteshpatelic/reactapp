import { Logo } from "../logo/logo";
import "./sidebar.css";
import { Link } from 'react-router-dom'


export const Sidebar = ()=>{
    return(
        <>
            <Logo/>
            <div className="menu">
                <div className="navtitle">
                    <h6 className="mb-0">Dashboard</h6>
                </div>
                <ul className="navLink mb-0">
                    <Link className="link" to="/dashboard/add-admin"><li>Admins Data</li></Link>
                    <Link className="link" to="/dashboard/action-om-admin"><li>action</li></Link>
                    <Link className="link" to="/dashboard/email"><li>email</li></Link>
                </ul>
            </div>
        </>
    );
}