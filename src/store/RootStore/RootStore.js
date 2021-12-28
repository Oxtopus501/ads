import { action, makeObservable, observable } from "mobx";

import ApplicationsListStore from "../ApplicationsListStore/ApplicationsListStore";

const BASE_URL = "https://random-data-api.com/api/";

export default class RootStore {
  applicationsListStore = new ApplicationsListStore(BASE_URL);

  constructor() {
    makeObservable(this, {});
  }
}
