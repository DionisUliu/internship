import { Space, Table, Button, Input, Tag, Popconfirm } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import BookModal from "../modalBook/ModalBook";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IBook } from "../../../models/IBook/IBook";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import {
  fetchBooks,
  addSearchQuery,
  deleteBook,
  setEditableBook,
  deleteEditableBook,
} from "../../../redux/slices/bookSlice";
import { Breadcrumb, Layout } from "antd";
import "./BooksTable.scss";
import { getAllAuthors } from "../../../redux/slices/authorSlice";

const { Content, Footer } = Layout;
const { Search } = Input;
interface IDeleteBook extends IBook {
  _id: string;
}

const BooksTable: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks() as any);
    dispatch(getAllAuthors() as any);
  }, [dispatch]);

  const onEdit = (book: IBook) => {
    setshowModal(true);
    dispatch(setEditableBook(book));
  };
  const onHandleClick = () => {
    setshowModal(true);
    dispatch(deleteEditableBook());
  };
  const onConfirm = (record: IDeleteBook) => {
    dispatch(deleteBook(record) as any);
  };

  const onSearch = (searchQuery: string) =>
    dispatch(addSearchQuery(searchQuery));

  let books: IDeleteBook[] = useSelector(
    (state: RootState) => state.books.booksData
  );
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery
  );
  if (searchQuery) {
    books = books.filter(
      (book) =>
        book.title.toLowerCase() === searchQuery.toLowerCase() ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const columns: ColumnsType<IDeleteBook> = [
    {
      title: t("bookTable.TITLE"),
      dataIndex: "title",
      key: "name",
      render: (text: string) => <Link to="title">{text}</Link>,
    },
    {
      title: t("bookTable.PUBLICATION"),
      dataIndex: "publications",
      key: "publications",
      render: (publications: [{ date: string }]) => (
        <div>{new Date(publications[0].date).toLocaleDateString()}</div>
      ),
    },
    {
      title: t("bookTable.PAGES"),
      dataIndex: "pages",
      key: "pages",
      render: (pages: string) => <div>{pages}</div>,
    },
    {
      title: t("bookTable.GENRE"),
      key: "genre",
      dataIndex: "genre",
      render: (_, { genre }) => (
        <>
          {genre.split("_").map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: t("bookTable.ACTION"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`:${record.title}`}>
            <MoreOutlined />
          </Link>
          <Link to="">
            <div onClick={() => onEdit(record)}>
              <EditOutlined />
            </div>
          </Link>
          <Link to={""}>
            <Popconfirm
              title={t("bookTable.DELETE_CONFRIM")}
              onConfirm={() => onConfirm(record)}
              okText={t("bookTable.YES")}
              cancelText={t("bookTable.NO")}
            >
              <DeleteOutlined />
            </Popconfirm>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ padding: "0 24px 24px", height: "95vh" }}>
      <Breadcrumb style={{ margin: "16px 0" }} />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="books-table-container">
          <div className="button-and-search-container">
            <Search
              className="books-search-bar"
              placeholder={t("bookTable.SEARCH_FIELD_PLACEHOLDER")}
              enterButton={t("bookTable.SEARCH_BUTTON")}
              size="large"
              onSearch={onSearch}
              // loading
            />
            <Button
              className="add-book-button"
              type="primary"
              onClick={onHandleClick}
            >
              {t("bookTable.ADD_NEW_BOOK_BUTTON")}
            </Button>
          </div>
          <Table
            className="table-books-style"
            columns={columns}
            dataSource={books}
          />
          <BookModal setshowModal={setshowModal} showModal={showModal} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created with ReactJS by Dionis Uliu
      </Footer>
    </Layout>
  );
};

export default BooksTable;
