import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { UserOutlined, StarFilled } from "@ant-design/icons";

import StatusFilter from "./StatusFilters";
import SearchByName from "./SearchByName";

const { Header, Content, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "Characters ",
      itemIcon: <UserOutlined />,
      onClick: () => navigate("/characters"),
    },
    {
      key: "2",
      label: "Favorites ",
      itemIcon: <StarFilled />,
      onClick: () => navigate("/favorites"),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          width: "80vw",
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <SearchByName />
        <StatusFilter />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
