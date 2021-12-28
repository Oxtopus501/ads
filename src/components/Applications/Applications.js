import React, { useEffect } from "react";

import rootStore from "../../store/RootStore/instance";
import Header from "../Header/Header";
import Table from "../Table/Table";

function Applications() {
  useEffect(() => {
    rootStore.applicationsListStore.getApplications("random_user?size=10");
  });

  return (
    <>
      <Header />
      <Table />
    </>
  );
}

export default Applications;
