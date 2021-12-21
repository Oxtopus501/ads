import React from "react";

import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import NewApplication from "../NewApplication/NewApplication";
import Table from "../Table/Table";

function Applications() {
  const [modalIsActive, setModalIsActive] = React.useState(false);
  return (
    <>
      <Header setModalIsActive={setModalIsActive} />
      <Table />
      <Modal isActive={modalIsActive} setIsActive={setModalIsActive} />
    </>
  );
}

export default Applications;
