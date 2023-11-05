import Componente from "../../img/sensor de peso.png"


import {ArrowLeft} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function SensorDePeso() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Sensor de peso</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>Um sensor de pressão converte uma quantidade física de 'pressão' em um sinal de padrão industrial. Ele oferece uma interface padronizada e frequentemente é referido como transmissor de pressão ou transdutor de pressão.
No projeto utilizamos de sensores de peso nas tijélas de comida e água, bem como nos reservatórios, afim de mandar informações para o arduino e assim fazer o programa funcionar.</p>
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_sensor_de_peso}>
                    <h1 className={styles.titulo}>Sensor de peso</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                    <Link className={styles.button_options} to={"/Componentes"}> <ArrowLeft size={32} /></Link>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <div className={styles.card_texto}>
                        <p className={styles.conteudo_secundario_paragrafo}>Um sensor de pressão converte uma quantidade física de 'pressão' em um sinal de padrão industrial. Ele oferece uma interface padronizada e frequentemente é referido como transmissor de pressão ou transdutor de pressão.
No projeto utilizamos de sensores de peso nas tijélas de comida e água, bem como nos reservatórios, afim de mandar informações para o arduino e assim fazer o programa funcionar.</p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default SensorDePeso