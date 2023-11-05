/*import { List, X } from "phosphor-icons/react"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"*/
// import Projeto from "../img/projeto.png"
import Tela_celular from "../img/image 33.png"
import Logo_mit from "../img/image 39.png"
import bluetooth from "../img/bluetooth.png";

/*import { useState } from "react"*/

import styles from "./Aplicativo.module.css"
import Header from "../components/Header"

function Aplicativo() {
    
return (
    <body>
        <Header />
        <main className={styles.conteudo_pagina}>   
            <section className={styles.desktop}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Aplicativo</h1>
                </div>
                <section className={styles.conteudo}>
                    <div className={styles.card_conteudo}>
                        <div className={styles.imgs}>
                            <img className={styles.img_2} src={bluetooth} alt="Modulo bluetooth" />
                            <img className={styles.img_3} src={Logo_mit} alt="Logo do app mit" />
                        </div>
                        <h2 className={styles.conteudo_principal_escrito_subtitulo}>link prara o  instalar o para controlar o aplicativo</h2>
                        <a href="https://apps.apple.com/br/app/mit-app-inventor/id1422709355?ign-itscg=30200&ign-itsct=apps_box">
                        <button className={styles.button_1}>Aplicativo</button>
                        </a>
                    </div>
                    <div className={styles.box_img}>
                <img className={styles.img_1} src={Tela_celular} alt="Aplicativo do pet food" />
                </div>
                </section>
            </section>

            <section className={styles.mobile}>
            <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Aplicativo</h1>
                </div>
                <section>
                    <div className={styles.card_conteudo}>
                        <div className={styles.img}>
                            <img className={styles.img_1} src={Tela_celular} alt="Aplicativo do pet food" />
                        </div>
                        
                        <img className={styles.img_2} src={bluetooth} alt="Modulo bluetooth" />
                        <img className={styles.img_3} src={Logo_mit} alt="Logo do app mit" />
                        <h2 className={styles.conteudo_principal_escrito_subtitulo}>link prara o  instalar o para controlar o aplicativo</h2>
                        <a href="https://apps.apple.com/br/app/mit-app-inventor/id1422709355?ign-itscg=30200&ign-itsct=apps_box">
                        <button className={styles.button_1}>Aplicativo</button>
                        </a>
                    </div>
                </section>
            </section>
        </main>
    </body>
)
}

export default Aplicativo