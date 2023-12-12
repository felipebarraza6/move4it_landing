import React from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";
import { PlayCircleOutlined, FormOutlined } from "@ant-design/icons";
import slide1 from "../assets/img/slider.jpg";

const { Title, Paragraph } = Typography;

const Sliders = () => {
  return (
    <Carousel style={{ marginTop: "0px" }}>
      <div>
        <div
          style={{
            margin: "0px",
            height: "500px",
            width: "100%",
            padding: "100px",
            color: "#fff",
            backgroundImage: `url(${slide1})`,
            backgroundPosition: "center left",
          }}
        >
          <Row>
            <Col>
              <Title
                level={2}
                style={{
                  color: "white",
                  backgroundColor: "#001529",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <strong>Move4it:</strong> Transforma tu empresa, eleva tu equipo
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ marginLeft: "20px", marginTop: "-30px" }}>
              <Title
                level={4}
                style={{
                  color: "white",
                  backgroundColor: "#001529",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Encuentra un estilo de vida balanceado, saludable y motivador.
              </Title>
              <Button
                icon={<PlayCircleOutlined />}
                size="large"
                type="primary"
                style={{ marginRight: "10px" }}
              >
                VIDEO
              </Button>
              <Button icon={<FormOutlined />} size="large" type="primary">
                Empieza ahora
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div
          style={{
            margin: "0px",
            height: "500px",
            width: "100%",
            padding: "100px",
            color: "#fff",
            backgroundImage: `url(${slide1})`,
            backgroundPosition: "center left",
          }}
        >
          <Row>
            <Col>
              <Title
                level={2}
                style={{
                  color: "white",
                  backgroundColor: "#001529",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Descubre Nuestro Programa Único de Actividades y Beneficios para
                Empresas y Empleados."
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ marginLeft: "20px", marginTop: "-30px" }}>
              <Title
                level={4}
                style={{
                  color: "white",
                  backgroundColor: "#001529",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Únete a la revolución del wellness, ¡juntos movemos el futuro!
              </Title>{" "}
              <Button
                icon={<PlayCircleOutlined />}
                size="large"
                type="primary"
                style={{ marginRight: "10px" }}
              >
                VIDEO
              </Button>
              <Button icon={<FormOutlined />} size="large" type="primary">
                Empieza ahora
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Carousel>
  );
};

export default Sliders;
