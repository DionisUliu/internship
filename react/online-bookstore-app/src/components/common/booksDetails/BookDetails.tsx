import { Col, Divider, Row, Layout } from "antd";
import BookImages from "../bookImages/BookImages";
import "./BookDetails.scss";
interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const { Content } = Layout;

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const BookDetails: React.FC = () => {
  return (
    <>
      <Layout style={{ padding: "24px 24px 24px", height: "100vh" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "50vh",
          }}
        >
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
        </Content>
      </Layout>
    </>
  );
};
export default BookDetails;
