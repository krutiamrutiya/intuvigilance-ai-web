import { Col, Layout, Row, Typography } from "antd";
import { type JSX } from "react";
const { Title } = Typography;
import "./publicLayout.scss";

interface LayoutProps {
  title?: string;
  children: string | number | JSX.Element | JSX.Element[] | null | undefined;
}
const PublicLayout = ({ title, children }: LayoutProps) => {
  return (
    <Layout className="vh-100">
      <Row gutter={0} align={"middle"} className="vh-100">
        <Col xl={12}>
          <div className="form-section">
            <Title level={2} className="mb-40">
              {title}
            </Title>
            {children}
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default PublicLayout;
