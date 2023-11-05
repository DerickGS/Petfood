import Componente from "../../img/protoboards.png"


import {ArrowLeft} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function Protoboards() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Protoboards</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>A protoboard é uma placa de ensaio que serve como um protótipo de um aparelho eletrônico, com uma matriz de contatos que possibilita construir circuitos de teste sem que haja necessidade de solda e, assim, garantindo segurança e agilidade em diferentes atividades. Ou seja, serve como um instrumento de teste: antes de soldar na placa, você testa no protótipo, e, se tudo der certo, parte para o projeto final.
</p>
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_protoboards}>
                    <h1 className={styles.titulo}>Protoboards</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>A protoboard é uma placa de ensaio que serve como um protótipo de um aparelho eletrônico, com uma matriz de contatos que possibilita construir circuitos de teste sem que haja necessidade de solda e, assim, garantindo segurança e agilidade em diferentes atividades. Ou seja, serve como um instrumento de teste: antes de soldar na placa, você testa no protótipo, e, se tudo der certo, parte para o projeto final.
</p>
                    </div>
                    
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default Protoboards