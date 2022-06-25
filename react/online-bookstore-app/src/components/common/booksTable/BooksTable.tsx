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
import {
  fetchBooksFromAPI,
  SearchQueryFromAPI,
  deleteBookFromAPI,
} from "../../../redux/slices/bookSlice";
const { Search } = Input;

const BooksTable: React.FC = () => {
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromAPI() as any);
  }, [dispatch]);

  const onSearch = (searchQuery: string) =>
    dispatch(SearchQueryFromAPI(searchQuery));

  let books: IBook[] = useSelector((state: RootState) => state.books.booksData);
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery
  );
  if (searchQuery) {
    books = books.filter((book) => book.title === searchQuery);
  }

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
            <div>
              <EditOutlined />
            </div>
          </Link>
          <div onClick={() => dispatch(deleteBookFromAPI(record.title))}>
            <DeleteOutlined />
          </div>
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
          onSearch={onSearch}
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
