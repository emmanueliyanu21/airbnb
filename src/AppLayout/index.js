import { Layout } from "antd";

import AppHeader from "../components/AppHeader/AppHeader";
import TopAppHeader from "../components/TopAppHeader/TopHeader";
import SideMenu from "../components/SideMenu/SideMenu";
import PageContent from "../components/PageContent";

const { Content } = Layout;

function AppLayout() {
  return (
    <>
      <Layout>
        <TopAppHeader />
        <AppHeader />
        <Layout>
          <SideMenu />
          <Layout>
            <Content
              className="content-bk"
              style={{
                margin: "24px 0px",
                minHeight: 280,
              }}
            >
              <PageContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default AppLayout;
