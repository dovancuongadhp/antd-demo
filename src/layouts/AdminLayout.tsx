import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import SideBarAdmin from '@/components/Sidebar/SidebarAdmin';
import { Outlet, useLocation } from 'react-router-dom';

const { Header, Content } = Layout;

const AdminLayout: React.FC = () => {
    const location = useLocation();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarAdmin></SideBarAdmin>
      <Layout>
        <Header style={{ padding: 0 , background: "#fff"}} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Do Van Cuong - React</Footer> */}
      </Layout>
    </Layout>
  );
};

export default AdminLayout;