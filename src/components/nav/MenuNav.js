import React from "react";
import { Button, Row, Col, Affix } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const MenuNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <Row>
      <Col>
        <Button
          type={location.hash === "" ? "primary" : "link"}
          style={styles.btn}
        >
          <Link smooth to="#">
            Inicio
          </Link>
        </Button>
      </Col>
      <Col>
        <Button
          type={location.hash === "#what" ? "primary" : "link"}
          style={styles.btn}
        >
          <Link smooth to="#what">
            ¿Qué es Move 4it?
          </Link>
        </Button>
      </Col>

      <Col>
        <Button
          type={location.hash === "#services" ? "primary" : "link"}
          style={styles.btn}
          onClick={() => navigate("#services")}
        >
          Servicios y Valores
        </Button>
      </Col>
      <Col>
        <Button
          type={location.hash === "#problems" ? "primary" : "link"}
          style={styles.btn}
          onClick={() => navigate("#problems")}
        >
          Problemas y Beneficios
        </Button>
      </Col>
      <Col>
        <Button
          type={location.hash === "#faq" ? "primary" : "link"}
          style={styles.btn}
          onClick={() => navigate("#faq")}
        >
          FAQ
        </Button>
      </Col>
      <Col>
        <Button
          type={location.hash === "#contact" ? "primary" : "link"}
          style={styles.btn}
          onClick={() => navigate("#contact")}
        >
          Contacto
        </Button>
      </Col>
      <Col>
        <Button
          type={"primary"}
          style={{ ...styles.btn, marginLeft: "10px" }}
          onClick={() => navigate("#portal")}
          icon={<UserOutlined />}
        >
          Portal Cliente
        </Button>
      </Col>
    </Row>
  );
};

const styles = {
  btn: {
    color: "white",
  },
  menu: {
    width: window.innerWidth > 900 ? "100%" : "200px",
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MenuNav;
