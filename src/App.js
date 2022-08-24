import 'antd/dist/antd.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout';
import Login from './Component/Login';
import User from './Component/User/User';
import Dashboard from './Component/Dashboard/Dashboard';


function App() {
    return (
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
}

export default App;
