import { Modal } from "antd";
import React from "react";
import BookForm from "../bookForm/BookForm";

type ModalType = {
  showModal: boolean;
  setshowModal: (showModal: boolean) => void;
};

const ModalBook: React.FC<ModalType> = ({ showModal, setshowModal }) => {
  return (
    <div className="modal_container">
      <Modal
        title="Add new book"
        visible={showModal}
        onCancel={() => {
          setshowModal(false);
        }}
        okText="Submit"
        onOk={() => {
          console.log("hello there");
        }}
      >
        <BookForm />
      </Modal>
    </div>
  );
};

export default ModalBook;
