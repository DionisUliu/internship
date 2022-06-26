import "./Settings.scss";
import { Layout } from "antd";
import { Dropdown, Menu, Space, Select } from "antd";
import i18n from "../../../services/translationServices/translationServices";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const { Option } = Select;

const Settings = () => {
  const { t } = useTranslation();
  const enLanguageHandler = async () => {
    await i18n.changeLanguage("en");
  };

  const sqLanguageHandler = async () => {
    await i18n.changeLanguage("sq");
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a onClick={enLanguageHandler}>
              <img src="../united-kingdom.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ENGLISH")}</b>
            </a>
          ),
          key: "en",
        },
        {
          label: (
            <a onClick={sqLanguageHandler}>
              <img src="../albania.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ALBANIA")}</b>
            </a>
          ),
          key: "sq",
        },
      ]}
    />
  );

  return (
    <>
      <Layout style={{ padding: "24px 24px 24px", height: "100vh" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "12vh",
            marginBottom: "30px",
          }}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24, fontSize: 30 }}
          >
            Settings
          </p>
        </Content>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "30vh",
          }}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24, fontSize: 20 }}
          >
            Change language
          </p>

          <Select defaultValue="Englisht" style={{ width: "20%" }}>
            <Option value="Englisht">
              <img src="../united-kingdom.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ENGLISH")}</b>
            </Option>
            <Option value="Albanian">
              <img src="../albania.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ALBANIA")}</b>
            </Option>
          </Select>
        </Content>
      </Layout>
    </>
  );
};
export default Settings;
