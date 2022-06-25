import "./BookForm.scss";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form, Input, Select, DatePicker, InputNumber } from "formik-antd";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import { createNewBook } from "../../../redux/slices/bookSlice";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

type BookFormType = {
  setShowModal: (showModal: boolean) => void;
};

const BookForm: React.FC<BookFormType> = ({ setShowModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const BookFormSchema = Yup.object().shape({
    title: Yup.string()
      .max(30, `${t("bookForm.error.titleMax")}`)
      .required(`${t("bookForm.error.titleReq")}`),
    author: Yup.string()
      .max(30, `${t("bookForm.error.authorMax")}`)
      .required(`${t("bookForm.error.authorReq")}`),
    publication: Yup.string().required(`${t("bookForm.error.publication")}`),
    genre: Yup.string().required(`${t("bookForm.error.genre")}`),
    pages: Yup.number()
      .required(`${t("bookForm.error.pages")}`)
      .min(5, `${t("bookForm.error.pagesMin")}`),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          publication: "",
          genre: "",
          pages: 0,
        }}
        validationSchema={BookFormSchema}
        onSubmit={(values) => {
          const dateArray = new Date(values.publication)
            .toLocaleDateString()
            .split("/");
          let newDate = "";
          for (let i = 2; i >= 0; i--) {
            newDate = newDate + "-" + dateArray[i];
          }

          newDate = newDate.slice(1);
          const newBook = {
            title: values.title,
            author: values.author,
            genre: values.genre,
            pages: values.pages,
            publications: [newDate],
          };

          dispatch(createNewBook(newBook));
        }}
      >
        {({ errors, values }) => (
          <Form {...layout} name="add_book">
            <Form.Item
              name="title"
              label="Title"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Input
                name="title"
                placeholder={t("bookForm.titlePlaceHolder")}
              />
            </Form.Item>
            <Form.Item
              name="author"
              label="Author"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Input
                name="author"
                placeholder={t("bookForm.authorPlaceHolder")}
              />
            </Form.Item>
            <Form.Item
              name="genre"
              label="Genre"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Select name="genre" placeholder={t("bookForm.genrePlaceHolder")}>
                <Select.Option value="fiction">Fiction</Select.Option>
                <Select.Option value="mystery">Mystery</Select.Option>
                <Select.Option value="thriller">Thriller</Select.Option>
                <Select.Option value="historical">Historical</Select.Option>
                <Select.Option value="romance">Romance</Select.Option>
                <Select.Option value="fantasy">Fantasy</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="publication"
              label="Publication"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <DatePicker name="publication" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="pages"
              label="Pages"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <InputNumber
                name="pages"
                min={1}
                max={10}
                style={{ width: "100% " }}
              />
            </Form.Item>

            <div className="buttons">
              <Form.Item name="cancel">
                <Button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  htmlType="button"
                >
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item name="sumbitButton">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BookForm;
