import { createStore } from "vuex";
import auth from "./modules/auth";
import concessions from "./modules/concessions";
import users from "./modules/users";

export default createStore({
  modules: {
    auth,
    concessions,
    users,
  },
});
