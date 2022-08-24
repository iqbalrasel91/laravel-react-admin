import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Typography, Avatar} from 'antd';
import React from 'react';
import './MainLayout.css'
import {Link} from "react-router-dom";

const {Header, Content, Sider, Footer} = Layout;

const Title = Typography;
// const items = [
//     {label: 'item 1', key: 'item-1', icon: React.createElement(LaptopOutlined)},
//     {label: 'item 2', key: 'item-2', icon: React.createElement(NotificationOutlined)},
//     {
//         label: 'sub menu',
//         key: 'submenu',
//         icon: React.createElement(UserOutlined),
//         children: [{label: 'item 3', key: 'submenu-item-1'}],
//     },
// ];


const App = ({children}) => (

    <Layout>
        <Header className="header">
            <div className="logo">
                <Title style={{float: "left", color: "#fff"}}>LOGO TITLE</Title>
            </div>
            <Avatar size="large" icon={<UserOutlined/>} style={{float: "right", marginTop: "10px"}}/>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        {React.createElement(UserOutlined)}
                        <span>Deshboard</span>
                        <Link to="/"/>
                    </Menu.Item>
                    <Menu.Item key="2">
                        {React.createElement(LaptopOutlined)}
                        <span>Login</span>
                        <Link to="/dashboard"/>
                    </Menu.Item>
                    <Menu.Item key="3">
                        {React.createElement(NotificationOutlined)}
                        <span>User</span>
                        <Link to="/user"/>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
                <Breadcrumb style={{margin: '16px 0',}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 500}}>
                    {children}
                </Content>

                <Footer style={{textAlign: 'center',}}>
                    Ant Admin ©2022 Created by Iqbal
                </Footer>
            </Layout>
        </Layout>
    </Layout>
);

export default App;