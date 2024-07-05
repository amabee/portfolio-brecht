import Image from "next/image";
import "../../styles/style.css";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const services = () => {
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
                            <div className="card" style={{ width: "18rem", height: "auto", background: "#b9dfeb", borderRadius: "10px", marginLeft: "150px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}><i class="bi bi-tools"></i><br />WEB DEVELOPMENT</h2>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>With a passion for creating dynamic and responsive websites, I specialize in web development, combining creativity with technical expertise to build seamless and user-friendly digital experiences.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "auto", background: "#b9dfeb", borderRadius: "10px", marginLeft: "150px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}><i class="bi bi-tools"></i><br />UI/UX</h2>
                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>I excel in crafting intuitive and visually appealing user interfaces, ensuring seamless and engaging user experiences. My work combines aesthetic design with user-centric functionality to create products that users love.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="card" style={{ width: "18rem", height: "auto", background: "#b9dfeb", borderRadius: "10px", marginLeft: "150px" }}>
                                <div className="card-body">
                                    <h2 className="card-title text-center" style={{ textAlign: "center", marginTop: "5px" }}><i class="bi bi-controller"></i><br />Game Developement</h2>

                                    <p className="card-text" style={{ textAlign: "center", marginTop: "13px" }}>I specialize in game development, merging creativity and technical skills to create immersive and interactive gaming experiences.</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </body>
    )
}

export default services;
