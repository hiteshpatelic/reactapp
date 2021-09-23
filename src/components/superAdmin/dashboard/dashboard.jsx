import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import "./dashboard.css"
import { BrowserRouter as Router } from 'react-router-dom'


export const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <Router>
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="content">
                    <div className="header">
                        <Header/>
                    </div>
                    <div className="content-body">
                        <Body/>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </Router>
        </div>
    );
}