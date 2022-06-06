import { baseUrl } from "./BASE_URL";

export const FOOTER_LIST_CONTACTS = {
  header: "Контакты",
  content: [
    {
      upper: "Для регионов",
      lower: "1488228",
    },
    {
      upper: "E-mail",
      lower: "1488228",
    },
    {
      upper: "Корпоративный сайт",
      lower: "1488228",
    },
    {
      upper: "Мы в соцсетях",
      lower: (
        <>
          <img src={baseUrl + "/footerIcons/Fb.svg"} alt="" />
          <img src={baseUrl + "/footerIcons/Vk.svg"} alt="" />
          <img src={baseUrl + "/footerIcons/Insta.svg"} alt="" />
          <img src={baseUrl + "/footerIcons/Ok.svg"} alt="" />
          <img src={baseUrl + "/footerIcons/Youtube.svg"} alt="" />
        </>
      ),
    },
    {
      upper: "Скачайте наше приложение",
      lower: (
        <>
          <img src={baseUrl + "/footerIcons/AppleStoreBadge.png"} alt="" />
          <img src={baseUrl + "/footerIcons/GooglePlayBadge.png"} alt="" />
        </>
      ),
    },
  ],
};
