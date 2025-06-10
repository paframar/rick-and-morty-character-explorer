import React from "react";
import { UserOutlined, StarFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    getItem("Characters", "1", <UserOutlined />),
    getItem("Favorites", "2", <StarFilled />),
  ];
  return (
    <Layout style={{ minHeight: "80vh", minWidth: "80vw" }}>
      <Sider>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ minHeight: "80vh" }}>
        <Header style={{ background: colorBgContainer }}>
          <h1>Rick and Morty Character Explorer</h1>
        </Header>
        <Content style={{ padding: 50 }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Rick and Morty Character Explorer ©{new Date().getFullYear()} Created
          by Pablo Marconi
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
