import "./BookForm.scss";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { useTranslation } from "react-i18next";
import { DatePicker, Select } from "antd";
import type { DatePickerProps } from "antd";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

const BookForm = () => {
  const { t } = useTranslation();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const BookFormSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, `${t("error.BOOK_CHAR_ERROR")}`)
      .required(`${t("error.BOOK_TITLE_ERROR")}`),
    author: Yup.string()
      .max(20, `${t("error.BOOK_CHAR_ERROR")}`)
      .required(`${t("error.BOOK_AUTHOR_ERROR")}`),
    publication: Yup.string().required(`${t("error.BOOK_PUBLICATION_ERROR")}`),
    genre: Yup.string().required(`${t("error.BOOK_GENRE_ERROR")}`),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          publication: "",
          genre: "",
        }}
        validationSchema={BookFormSchema}
        onSubmit={(values) => {
          //   dispatch(
          //     loginUser(
          //       {
          //         username: values.username,
          //         password: values.password,
          //       },
          //       navigate
          //     ) as any
          //   );
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
              <Input name="title" placeholder="Les Miserables" />
            </Form.Item>
            <Form.Item
              name="author"
              label="Author"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Input name="author" placeholder="Victor Hugo" />
            </Form.Item>
            <Form.Item
              name="genre"
              label="Genre"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Select placeholder="Fantasy">
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
              <DatePicker onChange={onChange} />
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BookForm;
