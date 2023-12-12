import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { EyeFilled, RocketFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Who = () => {
  return (
    <Row
      justify={"space-evenly"}
      align={"middle"}
      id="what"
      style={{ padding: "70px" }}
    >
      <Col span={7} style={{ marginRight: "20px" }}>
        <Title style={{ textAlign: "left" }}>¿Qué es Move 4it?</Title>

        <Paragraph
          style={{
            textAlign: "justify",
            paddingLeft: "30px",
            paddingRight: "30px",
            textIndent: "20px",
          }}
        >
          Somos la revolución del bienestar laboral, un programa interactivo e
          innovador diseñado para impulsar la salud, la conexión y el
          rendimiento dentro de tu equipo. Con desafíos emocionantes,
          asesoriamiento experto y una comunidad activa, Move4it va más allá de
          la salud física.
        </Paragraph>
      </Col>
      <Col span={16}>
        <Row align={"middle"} justify={"space-between"}>
          <Col span={12}>
            <Card
              title={
                <>
                  <EyeFilled style={{ marginRight: "10px" }} />
                  Visión
                </>
              }
              style={{
                margin: "10px",
                border: "0.1px solid #ffffff",
                boxShadow:
                  "inset 0px 0px 2px rgba(0, 0, 0, 0.9), -20px 20px 20px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Row>
                <Col>
                  En Move4it, visualizamos un mundo laboral donde cada individuo
                  está inspirado a moverse, a vivir de forma activa y saludable.
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Card
              title={
                <>
                  <RocketFilled style={{ marginRight: "10px" }} />
                  Mision
                </>
              }
              style={{
                margin: "10px",
                border: "0.0px solid black",
                boxShadow:
                  "inset 0px 0px 2px rgba(0, 0, 0, 0.9), -20px 20px 20px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Row>
                <Col>
                  Nuestra visión es ser la fuerza motriz detrás de un cambio
                  significativo en las empresas, al fomentar un bienestar
                  integral que transforme la vida de los empleados y, en última
                  instancia, la salud y la felicidad de las comunidades a nivel
                  global."
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Who;
