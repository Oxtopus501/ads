import { action, makeObservable, observable } from "mobx";

export default class ApplicationsListStore {
  applicationsList = [];

  constructor(baseUrl) {
    makeObservable(this, {
      applicationsList: observable,
      getApplications: action,
    });

    this.baseUrl = baseUrl;
  }

  getApplications(params) {
    fetch(`${this.baseUrl}users/${params}`, {
      method: "GET",
    })
      .then(action((response) => response.json()))
      .then(
        action((data) => {
          // eslint-disable-next-line no-console
          console.log(data);
          this.applicationsList = data;
        })
      )
      .catch(
        action((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
      );
  }
}
