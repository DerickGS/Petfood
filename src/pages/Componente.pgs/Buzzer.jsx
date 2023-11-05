import Componente from "../../img/buzzer.png"


import {ArrowLeft} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function Buzzer() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Buzzer</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>Durante o projeto, utilizamos de Buzers para auxiliar no alerta de reservatório, onde quando o reservatório está vazio, o led vermelho acenderá e logo em seguida, o buzzer emitirá um som de alerta, afim de alertar o dono para repor o reservatório, de acordo com o lado que o led vermelho estiver aceso.</p>
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_buzzer}>
                    <h1 className={styles.titulo}>Buzzer</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <div className={styles.card_texto}>
                        <p className={styles.conteudo_secundario_paragrafo}>Durante o projeto, utilizamos de Buzers para auxiliar no alerta de reservatório, onde quando o reservatório está vazio, o led vermelho acenderá e logo em seguida, o buzzer emitirá um som de alerta, afim de alertar o dono para repor o reservatório, de acordo com o lado que o led vermelho estiver aceso.</p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default Buzzer