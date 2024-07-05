import React from 'react'
import Image from "next/image";
import "../../styles/gallery.css";
import "../../styles/style.css";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const gallery = () => {
    return (
        <body>
            <style></style>
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
            <section class="container">

                <div>
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/448548935_435454615930298_605393154574242066_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHOKiPvm4eM-RISqiMBYoacnxpOSeCbaEyfGk5J4JtoTHvoUiSewlTd9Yh3xt5BdFeoWAzpmhjKDf5uY-Q4niln&_nc_ohc=CWb5GDDwlGMQ7kNvgElcYso&_nc_ht=scontent-hkg4-1.xx&oh=00_AYDLthPWKNq72_ICaS11qMGTBqozYTLJbIZHLlBvxylX-A&oe=668DE8AA" alt="First description" />
                    <span class="description">First description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/446809338_424261170382976_6659707115408640229_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFHqKtLSnXmc37i3JH3CGmuF5ZxWYoBxtcXlnFZigHG11EMeHYcA0ztFtV-beQ2ZcbsbQlHGJpseyz_zMmmL3Z7&_nc_ohc=cfOO-HobQRAQ7kNvgE-6b9W&_nc_ht=scontent-hkg4-1.xx&oh=00_AYBmdJXcXFJaI0QBgFRxcGftmFqmdwwzDo5B9mOYqE9eJA&oe=668DEFF9" alt="Second description" />
                    <span class="description">Second description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/431030182_376637408478686_3651756187313029672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGx1SbTHPAKYdbBG7IMVFIozHkEaoOV3ZbMeQRqg5Xdli4LBKTMfiTDYp16A5SV3HGRODGDRJg2l6WdEKIRIJA7&_nc_ohc=M331A78jM1IQ7kNvgFeJRnP&_nc_ht=scontent-hkg1-2.xx&oh=00_AYB8g-yIw_LEfQwRg9H0S6KIw8nDk-S73JYs7ZpMLY3e_A&oe=668DC7FE" alt="Third description" />
                    <span class="description">Third description
                    </span>
                </div>
                <div>
                    <img src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/431326429_372498895559204_4020238146254321937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKlCDpoav64nRjT23sryby98Wc0n2ydsH3xZzSfbJ2wURkF5qWh93iUktpk49OMCp_Gq9SpVzvK4KE6y7Tgip-&_nc_ohc=VLOcipYIr1UQ7kNvgHne3gw&_nc_ht=scontent-hkg1-2.xx&oh=00_AYBqOb-dw1ht9lSlmh3y3E6yuBGto823vG9xFBdaDvLhnQ&oe=668DD724" alt="Fourth description" />
                    <span class="description">Fourth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/429572004_372489235560170_6305053420956811883_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIB85Qq1AaG9X6ymsVoifFtF4Jo6b5K-q0Xgmjpvkr6hzWku2zrN_B9cEmtjr8PULY2r3UHRt81pOCsghhQQAG&_nc_ohc=ZN-nunUp88wQ7kNvgHhK1xi&_nc_ht=scontent-hkg1-1.xx&oh=00_AYAAN3NCAxpVncpjuOhVGhZsvAQkVDk1fqQf6tzsJ-BDzQ&oe=668DED70" alt="Fifth description" />
                    <span class="description">Fifth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/429572004_372489235560170_6305053420956811883_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIB85Qq1AaG9X6ymsVoifFtF4Jo6b5K-q0Xgmjpvkr6hzWku2zrN_B9cEmtjr8PULY2r3UHRt81pOCsghhQQAG&_nc_ohc=ZN-nunUp88wQ7kNvgHhK1xi&_nc_ht=scontent-hkg1-1.xx&oh=00_AYAAN3NCAxpVncpjuOhVGhZsvAQkVDk1fqQf6tzsJ-BDzQ&oe=668DED70" alt="Sixth description" />
                    <span class="description">Sixth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Seventh description" />
                    <span class="description">Seventh description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Eighth description" />
                    <span class="description">Eighth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Ninth description" />
                    <span class="description">Ninth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Tenth description" />
                    <span class="description">Tenth description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Eleventh description" />
                    <span class="description">Eleventh description</span>
                </div>
                <div>
                    <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/431335691_372489125560181_4473182077726126091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE59TyNExZ-eVVvHaebn_4d38Hb9SmjCTTfwdv1KaMJNNQy-0ji8Va-l8iWKUVz9g6nPzkCg-4NR9H0l50yaLkr&_nc_ohc=gZDkd2_AYBAQ7kNvgEehcYB&_nc_ht=scontent-hkg4-2.xx&oh=00_AYBJwg7WIND6Y46-4YjSmb9aDbteUrMYm6rmQP2-qMDuJA&oe=668DE3DD" alt="Twelfth description" />
                    <span class="description">Twelfth description</span>
                </div>
            </section>
        </body>
    )
}

export default gallery