import { Space, Table, Tag, Button, Input } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ModalBook from "../modalBook/ModalBook";
import "./BooksTable.scss";

interface DataType {
  key: string;
  title: string;
  author: string;
  publication: string;
  genre: string[];
}
const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
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
    render: (_, { genre }) => (
      <>
        {genre.map((tag) => {
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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <MoreOutlined />
        </a>
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "Te Mjeret",
    author: "Viktor Hygo",
    publication: "New York No. 1 Lake Park",
    genre: ["roman", "drame"],
  },
];

const { Search } = Input;

const BooksTable: React.FC = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <div className="books-table-container">
      <div className="button-and-search-container">
        <Search
          className="books-search-bar"
          placeholder="Search with name"
          enterButton="Search"
          size="large"
          loading
        />
        <Button
          className="add-book-button"
          type="primary"
          onClick={() => setshowModal(true)}
        >
          Add new book
        </Button>
      </div>
      <Table
        className="table-books-style"
        columns={columns}
        dataSource={data}
      />
      <ModalBook showModal={showModal} setshowModal={setshowModal} />
    </div>
  );
};
export default BooksTable;
