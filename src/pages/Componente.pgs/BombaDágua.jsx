import Componente from "../../img/bomba da água.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function BombaDágua() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Bomba d’água</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>A Bombinha de Água é um acessório essencial para trabalhar com projetos com Arduino, de forma a possibilitar a condução da água ou de outros líquidos de forma rápida e eficiente, permitindo controlar a vazão liberada pelo equipamento, a qual possibilita até 500ml por minuto. Já a Bombinha de Ar é capaz de trabalhar como um minicompressor ou uma mini bomba de vácuo, podendo atuar das mais dversas formas em projetos maker diy com Arduino.
Um projeto de Irrigador com Arduino vai depender basicamente de alguns itens essenciais, como o próprio microcontrolador, um conjunto de sensores de umidade do solo para definir o momento certo de liberação da bomba, um relé, e o principal acessório nesse caso, a Mini Bomba de Água.
Quando acionada, a Mini Bomba de Água é a responsável pela impulsão da água por meio de seus condutores, desde o reservatório, até os canos onde ao final ela deverá chegar, a um pote de flores, por exempl
</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_bomba}>
                    <h1 className={styles.titulo}>Bomba d’água</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>A Bombinha de Água é um acessório essencial para trabalhar com projetos com Arduino, de forma a possibilitar a condução da água ou de outros líquidos de forma rápida e eficiente, permitindo controlar a vazão liberada pelo equipamento, a qual possibilita até 500ml por minuto. Já a Bombinha de Ar é capaz de trabalhar como um minicompressor ou uma mini bomba de vácuo, podendo atuar das mais dversas formas em projetos maker diy com Arduino.
Um projeto de Irrigador com Arduino vai depender basicamente de alguns itens essenciais, como o próprio microcontrolador, um conjunto de sensores de umidade do solo para definir o momento certo de liberação da bomba, um relé, e o principal acessório nesse caso, a Mini Bomba de Água.
Quando acionada, a Mini Bomba de Água é a responsável pela impulsão da água por meio de seus condutores, desde o reservatório, até os canos onde ao final ela deverá chegar, a um pote de flores, por exempl
</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default BombaDágua