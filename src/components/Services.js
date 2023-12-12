import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { ClearOutlined } from "@ant-design/icons";
const { Title } = Typography;
const Services = () => {
  return (
    <Row
      justify={"space-between"}
      align={"middle"}
      style={{
        padding: "20px",
        background:
          "linear-gradient(90deg, rgba(205,205,205,1) 0%, rgba(205,205,205,1) 20%, rgba(210,210,210,1) 31%, rgba(237,237,237,1) 62%, rgba(205,205,205,1) 88%)",
      }}
    >
      <Col>
        <Card icon={<ClearOutlined />} style={{ width: "250px" }}>
          <Card.Meta
            title="Monitorea en tiempo real"
            description="Analiza el uso de beneficios y re-conoce los hábitos de tu equipo."
          />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "250px" }}>
          <Card.Meta
            title="Tu empresa deja huella"
            description="Cada acción que realizas en la app se transforma en donaciones a causas."
          />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "250px" }}>
          <Card.Meta
            title="Elige lo que necesitas"
            description="Plataforma modular que permite que cada líder de RRHH seleccione los beneficios para sus colaboradores"
          />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "250px" }}>
          <Card.Meta
            title="100% Flexible"
            description="Te permite realizar una compra única a la billetera de tu empleado, o tomar planes mensuales de beneficos para incentivar"
          />
        </Card>
      </Col>
      <Col>
        <Card icon={<ClearOutlined />} style={{ width: "250px" }}>
          <Card.Meta
            title="Monitorea en tiempo real"
            description="Analiza el uso de beneficios y re-conoce los hábitos de tu equipo."
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Services;
