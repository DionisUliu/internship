import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import sq from "../../components/locals/al/al";
import en from "../../components/locals/en/en";
i18next.languages = ["en", "sq"];
i18next
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: "en",
    fallbackLng: "en",
    resources: {
      sq,
      en,
    },
  })
  .catch((err: any) => console.error(err));
export default i18next;
