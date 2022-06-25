import { Col, Divider, Row } from "antd";
import BookImages from "../bookImages/BookImages";
import "./BookDetails.scss";
interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}
const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const BookDetails: React.FC = () => {
  return (
    <div>
      <h1
        className="site-description-item-profile-p"
        style={{ marginBottom: 24, fontSize: 30 }}
      >
        Book Details
      </h1>

      <Row>
        <Col span={12}>
          <DescriptionItem title="Title" content="XXXXXX" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Publication" content="XX/XX/XXX" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Author" content="XXX XXX" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Genre" content="XXX" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Pages" content="200" />
        </Col>
      </Row>
      <Divider />
      <BookImages />
    </div>
  );
};
export default BookDetails;
