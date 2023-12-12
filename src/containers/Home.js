import React from "react";
import { Layout, Affix, Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import logo from "../assets/img/logo.png";
import MenuNav from "../components/nav/MenuNav";
import Sliders from "../components/Sliders";
import Who from "../components/Who";
import Services from "../components/Services";
import What from "../components/What";
import Problems from "../components/Problems";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
const { Content, Header } = Layout;

const Home = () => {
  return (
    <Layout>
      <div>
        <Row
          justify={"end"}
          style={{ backgroundColor: "#001529", padding: "10px" }}
        >
          <Col>
            <FacebookFilled
              style={{
                fontSize: "20px",
                color: "white",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <InstagramFilled
              style={{
                fontSize: "20px",
                color: "white",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <TwitterCircleFilled
              style={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Col>
        </Row>
      </div>
      <Affix>
        <Header style={styles.header}>
          <div>
            <img src={logo} alt="logo" style={styles.logo} />
          </div>
          <MenuNav />
        </Header>
      </Affix>
      <Content>
        <Sliders />
        <Who />
        <Services />
        <What />
        <Problems />
        <Faq />
        <Footer />
      </Content>
    </Layout>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 24px",
  },
  logo: {
    width: "100px",
  },
};

export default Home;
