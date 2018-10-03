import SignIn from "../pages/SignIn/SignIn.js";
import SignUp from "../pages/SignUp/SignUp.js";
import PasswordForget from "../pages/PasswordForget/PasswordForget.js";

const routes = [
  { path: "/register", component: SignUp },
  { path: "/passwordForget", component: PasswordForget },
  { path: "/", component: SignIn }
];

export default routes;
