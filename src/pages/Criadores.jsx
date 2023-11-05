/*import { List, X } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"*/
import { InstagramLogo } from "@phosphor-icons/react"
import Header from "../components/Header"
import Bruno from "../img/bruno.png"
import Derick from "../img/Derick.png"
import Francisco from "../img/francisco.png"


/*import { useState } from "react"*/

import styles from "./Criadores.module.css"


function Criadores() {
    return (
<body>
    <Header /> 
    <main className={styles.conteudo_pagina}>    
        <section>
            <div className={styles.card_titulo}>
                <h1 className={styles.titulo}>Equipe</h1>
            </div>

            <div className={styles.card_criadores}>

                    <div className={styles.card}>
                        <a href="https://www.instagram.com/derickgaldi/"rel="noopener" >
                            <img src={Derick} alt="foto Derick Galdino" />
                            <div className={styles.container}>
                                <button className={styles.InstagramLogo}><InstagramLogo size={32} /></button>
                                <h4><b>Derick Galdino</b></h4>
                            </div>  
                        </a>
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.instagram.com/bruno_sutil_desenhos/"rel="noopener" >
                            <img src={Bruno} alt="foto Bruno Sutil" />
                            <div className={styles.container}>
                                <button className={styles.InstagramLogo}><InstagramLogo size={32} /></button>
                                <h4><b>Bruno Sutil</b></h4>
                            </div>
                        </a> 
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.instagram.com/fr_ancisco6539"rel="noopener" >
                            <img src={Francisco} alt="foto Francisco" />
                            <div className={styles.container}>
                                <button className={styles.InstagramLogo}><InstagramLogo size={32} /></button>
                                <h4><b>Francisco</b></h4>
                            </div>  
                        </a>
                    </div>
                    
                
            </div>
            
        </section>
    </main>
</body>
)
}


export default Criadores