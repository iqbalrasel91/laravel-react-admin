import 'antd/dist/antd.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout';
import Login from './Component/Login/Login';
import User from './Component/User/User';
import Dashboard from './Component/Dashboard/Dashboard';


const LoginStateCheck = () => {
    //const isLoggedIn = localStorage.getItem('isLoggedIn')
    const isLoggedIn = true;
    return isLoggedIn ? <MainApp/> : <Login/>;
}
export default LoginStateCheck;

const MainApp = () => (
    <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route exact path="/Dashboard" element={<Dashboard/>}/>
                <Route exact path="/user" element={<User/>}/>
                <Route exact path="/Role" element={<User/>}/>
            </Routes>
        </MainLayout>
    </Router>
);

