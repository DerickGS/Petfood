import Componente from "../../img/fonte 12v.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function Fonte12v() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Fonte 12v</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}> A fonte de alimentação é um componente de aparelhos eletrônicos 
que serve para transformar a energia elétrica que chega pelas 
tomadas em uma corrente elétrica contínua. Ou seja, ela recebe a 
energia em 110V ou 220V e transforma na voltagem adequada para o 
funcionamento do aparelho, que geralmente é 12V.

</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_fonte12v}>
                    <h1 className={styles.titulo}>Fonte 12v</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}> A fonte de alimentação é um componente de aparelhos eletrônicos 
que serve para transformar a energia elétrica que chega pelas 
tomadas em uma corrente elétrica contínua. Ou seja, ela recebe a 
energia em 110V ou 220V e transforma na voltagem adequada para o 
funcionamento do aparelho, que geralmente é 12V.

</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default Fonte12v