import Image from "next/image";
import "../../styles/style.css";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const about = () => {
    return (
        <body>
            <nav>
                <div className="nav__content">
                    <div className="logo">
                        <Link href="#">B R E C H T</Link>
                    </div>
                    <label for="check" className="checkbox">
                        <i className="ri-menu-line"></i>
                    </label>
                    <input type="checkbox" name="check" id="check" />
                    <ul>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/services"}>Services</Link></li>
                        <li><Link href={"/gallery"}>My Gallery</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <section className="section">
                <Container className="section__container" style={{ display: "flex", justifyContent: "center" }}>

                    <Row style={{ flexWrap: "nowrap", alignItems: "center" }}>

                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "18rem", background: "#b9dfeb", borderRadius: "10px", marginLeft: "0px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}>Elementary</h2>
                                    <h4 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center", marginTop: "13px" }}>2013-2014</h4>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>Gusa Elementary School</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "18rem", background: "#b9dfeb", borderRadius: "10px", marginLeft: "5px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}>High School</h2>
                                    <h4 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center", marginTop: "13px" }}>2017-2018</h4>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>Cugman National High</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "18rem", background: "#b9dfeb", borderRadius: "10px", marginLeft: "5px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}>Senior High School</h2>
                                    <h4 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center", marginTop: "13px" }}>2020-2021</h4>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>SHS: Phinma Cagayan de Oro College</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "18rem", background: "#b9dfeb", borderRadius: "10px", marginLeft: "5px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}>College</h2>
                                    <h4 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center", marginTop: "13px" }}>Current</h4>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>Phinma Cagayan de Oro College</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </body>
    )
}

export default about;
