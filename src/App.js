import 'antd/dist/antd.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout';
import Login from './Component/Login/Login';
import User from './Component/User/User';
import Dashboard from './Component/Dashboard/Dashboard';


const LoginStateCheck = (props) => {

    //const isLoggedIn = localStorage.getItem('isLoggedIn')
    const isLoggedIn = false;
    console.log(isLoggedIn);
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
            </Routes>
        </MainLayout>
    </Router>
);

