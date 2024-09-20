import { createStore } from "vuex";
import auth from "./modules/auth";
import concessions from "./modules/concessions";
import map from "./modules/map";
import users from "./modules/users";
import notification from "./modules/notification";

export default createStore({
  modules: {
    auth,
    concessions,
    map,
    users,
    notification,
  },
});
