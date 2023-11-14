import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const SidebarPublic: React.FC = () => {
    const listNavBar = [
        {key: "/",label: "Home"},
        {key: "/shop",label: "Shop"},
        {key: "/admin",label: <Link to={"/admin"}>Admin</Link>}
    ]

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          items={listNavBar.map((item)=>{
            return {
                key: item.key,
                label: item.label
            }
          })}
        />
      </Header>
    </Layout>
  );
};

export default SidebarPublic;