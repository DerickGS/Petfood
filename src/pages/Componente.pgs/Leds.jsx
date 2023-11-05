import Componente from "../../img/legs.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function Leds() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Leds</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>No projeto, utilizaremos leds, componentes que emitem luz de diversar cores, onde utilaremos os leds, verde, amarelo e vermelho, afim de servirem como referencia visual do quanto ainda há de ração e água nos reservatórios, sendo verde para cheio, amarelo pra medio e vermelho pra vazio.</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_leds}>
                    <h1 className={styles.titulo}>Leds</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>No projeto, utilizaremos leds, componentes que emitem luz de diversar cores, onde utilaremos os leds, verde, amarelo e vermelho, afim de servirem como referencia visual do quanto ainda há de ração e água nos reservatórios, sendo verde para cheio, amarelo pra medio e vermelho pra vazio.</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default Leds