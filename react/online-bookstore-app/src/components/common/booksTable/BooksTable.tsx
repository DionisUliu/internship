import { Space, Table, Button, Input } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import "./BooksTable.scss";
import { Link } from "react-router-dom";
import { IBook } from "../../../models/IBook/IBook";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import ModalBook from "../modalBook/ModalBook";
import { fetchBooks } from "../../../redux/slices/bookSlice";
const { Search } = Input;

const BooksTable: React.FC = () => {
  const [showModal, setshowModal] = useState(false);
  const books = useSelector((state: RootState) => state.books.booksData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  const columns: ColumnsType<IBook> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
      render: (text) => <Link to="">{text}</Link>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Publication",
      dataIndex: "publication",
      key: "publication",
    },
    {
      title: "Genre",
      key: "genre",
      dataIndex: "genre",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={""}>
            <MoreOutlined />
          </Link>
          <Link to={""}>
            <EditOutlined />
          </Link>
          <Link to={""}>
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="books-table-container">
      <div className="button-and-search-container">
        <Search
          className="books-search-bar"
          placeholder="Search by name"
          enterButton="Search"
          size="large"
          // loading
        />
        <Button
          className="add-book-button"
          type="primary"
          onClick={() => setshowModal(true)}
        >
          Add new Book
        </Button>
      </div>
      <Table
        className="table-books-style"
        columns={columns}
        dataSource={books}
      />
      <ModalBook showModal={showModal} setshowModal={setshowModal} />
    </div>
  );
};
export default BooksTable;
