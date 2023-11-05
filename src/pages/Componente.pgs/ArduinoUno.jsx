import Arduino_Uno from "../../img/Arduino Uno.png"

import {ArrowLeft} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function ArduinoUno_pg() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Arduino</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Arduino_Uno} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>O Arduino serve para facilitar o aprendizado de programação, ensinando as pessoas a desenvolverem projetos de eletrônica e de robótica, automatizar escritório, criar um novo brinquedo ou jogos, etc.
A lista de possibilidades é enorme. Com a conexão com outros acessórios, como displays, módulos de relés, teclados, dentre outros é possível controlar abertura de portas e cortinas, controlar volume de som e muito mais.
Noprojeto utilizamos do arduino para controlar os sensores e módulos a fim de armazenam seus valores e distribuir comandos de acordo com as informações que recebe.</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_arduino}>
                    <h1 className={styles.titulo}>Arduino</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Arduino_Uno} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>O Arduino serve para facilitar o aprendizado de programação, ensinando as pessoas a desenvolverem projetos de eletrônica e de robótica, automatizar escritório, criar um novo brinquedo ou jogos, etc.
A lista de possibilidades é enorme. Com a conexão com outros acessórios, como displays, módulos de relés, teclados, dentre outros é possível controlar abertura de portas e cortinas, controlar volume de som e muito mais.
Noprojeto utilizamos do arduino para controlar os sensores e módulos a fim de armazenam seus valores e distribuir comandos de acordo com as informações que recebe.</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default ArduinoUno_pg