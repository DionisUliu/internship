import { Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import BookForm from "../bookForm/BookForm";

type ModalType = {
  showModal: boolean;
  setshowModal: (showModal: boolean) => void;
};

const BookModal: React.FC<ModalType> = ({ showModal, setshowModal }) => {
  const { t } = useTranslation();
  return (
    <div className="modal_container">
      <Modal
        className="modal-style"
        title={t("bookForm.TITLE_FIELD_BOOK_FORM")}
        visible={showModal}
        onCancel={() => {
          setshowModal(false);
        }}
        destroyOnClose={true}
        footer={null}
      >
        <BookForm setShowModal={setshowModal} />
      </Modal>
    </div>
  );
};

export default BookModal;
