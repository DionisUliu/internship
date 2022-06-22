import { Button, PageHeader } from "antd";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="appView-container">
      <PageHeader
        className="site-page-header"
        title="Softup Bookstore"
        avatar={{
          src: "../softup-logo.png",
          style: { width: 70 },
        }}
        extra={[
          <Button key="1" type="primary">
            Logout
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};
export default AppHeader;
