import "./Settings.scss";
import { Layout } from "antd";
import { Select } from "antd";
import i18n from "../../../services/translationServices/translationServices";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const { Option } = Select;

const Settings = () => {
  const { t } = useTranslation();

  const languageHandler = async (language: string) => {
    await i18n.changeLanguage(language);
  };
  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         label: (
  //           <a onClick={enLanguageHandler}>
  //             <img src="../united-kingdom.png" style={{ marginRight: 5 }}></img>
  //             <b>{t("language.ENGLISH")}</b>
  //           </a>
  //         ),
  //         key: "en",
  //       },
  //       {
  //         label: (
  //           <a onClick={sqLanguageHandler}>
  //             <img src="../albania.png" style={{ marginRight: 5 }}></img>
  //             <b>{t("language.ALBANIA")}</b>
  //           </a>
  //         ),
  //         key: "sq",
  //       },
  //     ]}
  //   />
  // );

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
            {t("settings.SETTINGS")}
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
            {t("settings.CHANGE_LANGUAGE")}
          </p>
          <Select defaultValue={t("language.ENGLISH")} style={{ width: 250 }}>
            <Option value={t("language.ENGLISH")}>
              <div
                onClick={() => {
                  languageHandler("en");
                }}
              >
                <img
                  src="../united-kingdom.png"
                  style={{ marginRight: 5 }}
                  alt=""
                />
                <b>{t("language.ENGLISH")}</b>
              </div>
            </Option>
            <Option value={t("language.ALBANIA")}>
              <div
                onClick={() => {
                  languageHandler("sq");
                }}
              >
                <img src="../albania.png" style={{ marginRight: 5 }} alt="" />
                <b>{t("language.ALBANIA")}</b>
              </div>
            </Option>
          </Select>
        </Content>
      </Layout>
    </>
  );
};
export default Settings;
