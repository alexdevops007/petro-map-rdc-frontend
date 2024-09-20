import { createStore } from "vuex";
import auth from "./modules/auth";
import concessions from "./modules/concessions";
import map from "./modules/map";
import users from "./modules/users";
import notification from "./modules/notification";
import activity from "./modules/activity";

export default createStore({
  modules: {
    activity,
    auth,
    concessions,
    map,
    users,
    notification,
  },
});
