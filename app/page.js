import Image from "next/image";
import "../styles/style.css";
import Link from "next/link";
import { Button } from "react-bootstrap";


export default function Home() {
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
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm <span>Brecht<br />a</span> Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Brecht Marquita, a skilled and
              creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
            </p>
            <div className="action__btns">
              <Button className="hire__me">Hire Me</Button>
              <Button className="portfolio">Portfolio</Button>
            </div>
          </div>
          <div className="image">
            <Image src={"/assets/images/brecht.jpg"} width={300} height={350} />

          </div>
        </div>
      </section>
    </body>
  );
}
