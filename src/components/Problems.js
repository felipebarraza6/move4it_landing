import React from "react";
import { Row, Col, Card, Typography, Carousel, Tag, Button, Steps } from "antd";
import { PhoneFilled, PlusCircleFilled, SmileFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Problems = () => {
  const src =
    "https://th.bing.com/th/id/R.a42334ae0f1fe63a524dd804d9b6b3ec?rik=j9DeQFcvKvQc%2fg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fNestle-Logo.png&ehk=mkxHyeOa3dHqtm8PLQzvhzQsDCYGCqXJWGKcXuxiDts%3d&risl=&pid=ImgRaw&r=0";

  const description1 =
    "Expertos te orientarán de manera personalizada a encontrar las mejores soluciones que se adapten a tus necesidades.";
  const description2 =
    "Durante la implementación especialistas te acompañarán para que conozcas y seas un experto en tu plataforma.";
  const description3 =
    "Vive la experiencia, fortalece tu cultura organizacional y gestiona tu activo más valioso, las personas!";

  return (
    <Row
      justify={"center"}
      align={"middle"}
      id="who"
      style={{ padding: "50px", paddingBottom: "100px" }}
    >
      <Col>
        <Title style={{ textAlign: "center" }}>
          ¿Listo para vivir la experiencia Move4it?
        </Title>
      </Col>
      <Col span={24} style={{ marginTop: "50px" }}>
        <Steps
          current={3}
          items={[
            {
              title: "Agenda una llamada",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "12px" }}>
                  {description1}
                </Paragraph>
              ),
              icon: <PhoneFilled style={{ fontSize: "30px" }} />,
            },
            {
              title: "Súmate a la experiencia",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "12px" }}>
                  {description2}
                </Paragraph>
              ),
              icon: <PlusCircleFilled style={{ fontSize: "30px" }} />,
            },
            {
              title: "Crea un lugar de trabajo más feliz",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "12px" }}>
                  {description3}
                </Paragraph>
              ),
              icon: <SmileFilled style={{ fontSize: "30px" }} />,
            },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Problems;
