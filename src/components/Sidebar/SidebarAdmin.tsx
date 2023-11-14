import React, { useState } from "react";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Public</Link>, "/", <DesktopOutlined />),
  getItem("User Manager", "3", <UserOutlined />, [
    getItem(<Link to="/admin/user">User</Link>, "/admin/user"),
  ]),
];

const SideBarAdmin: React.FC = () => {
  const location = useLocation();
  console.log(location);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[`${location.pathname}`]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SideBarAdmin;
