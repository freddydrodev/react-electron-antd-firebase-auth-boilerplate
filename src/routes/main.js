import PrivatePage from "../containers/PrivatePage/PrivatePage.js";
import PublicPage from "../containers/PublicPage/PublicPage.js";
import LogPage from "../containers/LogPage/LogPage.js";

const routes = [
  { path: "/app", component: PrivatePage },
  { path: "/public", component: PublicPage },
  { path: "/", component: LogPage }
];

export default routes;
