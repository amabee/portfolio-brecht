import Image from "next/image";
import "../../styles/style.css";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const contact = () => {
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
                <section className="section">
                    <div className="section__container" style={{display:"flex", justifyContent:"center"}}>
                        <Container >
                            <div className="form-box">
                                <h1>Contact Me</h1>
                                <form  method="post">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input className="form-control" id="name" type="text" name="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input className="form-control" id="email" type="email" name="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" id="message" name="Message"></textarea>
                                    </div>
                                    <Button className="btn" style={{width:"100%", marginTop:"20px"}} variant="primary">Submit</Button>

                                </form>
                            </div>
                        </Container>

                    </div>
                </section>

            </section >
        </body >
    )
}

export default contact