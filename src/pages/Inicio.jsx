/*import { Link } from "react-router-dom"*/

// import projeto from "../img/projeto.png"
import progeto_1 from "../img/projeto real 1.png"
import progeto_2 from "../img/projeto real 2.png"
import Bob from "../img/Bob.png"
import FamiliaBob from "../img/Bob familia.png"
import Header from "../components/Header"
/*import { useState } from "react"*/

import styles from "./Inicio.module.css"

function Inicio() {



return (


<body>
    <Header /> 
    <main className= {styles.conteudo_pagina}>
        <section className={styles.mobile}>
        <div className={styles.card_titulo_1}>
                <h1 className={styles.titulo} translate="no">Pet-food</h1>
            </div>
            <div className={styles.box_img}>
                <img className={styles.conteudo_principal_imagem} src={progeto_1} alt="Imagem do projeto" />  
            </div>
            <section className={styles.conteudo}>
                <div  className={styles.card_conteudo_1}>
                    <h2 className={styles.conteudo_principal_escrito_subtitulo}>O que o PetFood faz por você?</h2>
                    <p className={styles.conteudo_secundario_paragrafo}>O Pet-Foot visa ajudar  e auxiliar as pessoas a cuidar de seus pets, ele é um alimentador automático que conta com divérsos componentes que te ajudaram a cuidar e inspecionar o seu pét.</p>
                </div>
                <div className={styles.box_img}>
                <img className={styles.conteudo_principal_imagem} src={progeto_2} alt="Imagem do projeto" />  
                </div>
            </section>
            
            <div className={styles.card_titulo_2}>
                <h1 className={styles.titulo}>Como surgiu o projeto</h1>
            </div>
            <div className={styles.box_img}>
                <img className={styles.conteudo_principal_imagem} src={Bob} alt="Imagem do projeto" />  
            </div>
            <section className={styles.conteudo}>
                <div  className={styles.card_conteudo_2}>
                    <p className={styles.conteudo_secundario_paragrafo}>   O PetFood, surgiu a partir de uma necessidade, referente ao Pet da minha família, Bob, onde muitas vezes meus tios acabavam não tendo muito tempo de repor as tigelas dele devido ao cotidiano muito corrido, e sempre pediam pra alguem repor por eles, então, a partir daí, criamos o PetFood, uma solução para cuidar dos pets e ajudar as pessoas de tal maneira que eles não precisam se preocupar demais e podem continuar com suas atividades cotidianas enquanto o pet está sendo bem cuidado e alimentado. </p>
                </div>
                <div className={styles.box_img}>
                <img className={styles.conteudo_principal_imagem} src={FamiliaBob} alt="Imagem do projeto" />  
                </div>
            </section>
        </section>

        <section className={styles.desktop}>
            <section className={styles.conteudo}>
                <div className={styles.box_1}>
                <div className={styles.card_titulo_1}>
                <h1 className={styles.titulo} translate="no">Pet-food</h1>
                </div>
                <div  className={styles.card_conteudo_1}>
                    <h2 className={styles.conteudo_principal_escrito_subtitulo}>O que o PetFood faz por você?</h2>
                    <p className={styles.conteudo_secundario_paragrafo}>O Pet-Foot visa ajudar  e auxiliar as pessoas a cuidar de seus pets, ele é um alimentador automático que conta com divérsos componentes que te ajudaram a cuidar e inspecionar o seu pét.</p>
                </div>
                </div>
                <div className={styles.box_img_1}>
                <img className={styles.conteudo_principal_imagem} src={progeto_2} alt="Imagem do projeto" />  
                <br />
                <img className={styles.conteudo_principal_imagem} src={progeto_1} alt="Imagem do projeto" /> 
                </div>
            </section>

            
            <div className={styles.card_titulo_2}>
                <h1 className={styles.titulo}>Como surgiu o projeto</h1>
            </div>
            <div className={styles.box_img_2}>
                <img className={styles.conteudo_principal_imagem} src={Bob} alt="Imagem do projeto" />  
                <br />
                <img className={styles.conteudo_principal_imagem} src={FamiliaBob} alt="Imagem do projeto" />
            </div>
            <section className={styles.conteudo}>
                <div  className={styles.card_conteudo_2}>
                    <p className={styles.conteudo_secundario_paragrafo}>   O PetFood, surgiu a partir de uma necessidade, referente ao Pet da minha família, Bob, onde muitas vezes meus tios acabavam não tendo muito tempo de repor as tigelas dele devido ao cotidiano muito corrido, e sempre pediam pra alguem repor por eles, então, a partir daí, criamos o PetFood, uma solução para cuidar dos pets e ajudar as pessoas de tal maneira que eles não precisam se preocupar demais e podem continuar com suas atividades cotidianas enquanto o pet está sendo bem cuidado e alimentado. </p>
                </div>
            </section>
        </section>

    </main>
</body>

)
}

export default Inicio