import Componente from "../../img/Módulo relé.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function ModuloRele() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Módulo relé</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>O relé em si possui dois pinos que estão conectados à uma bobina e três pinos “de saída”, chamados, comum, normalmente aberto e normalmente fechado. Quando a bobina não está energizada o comum fecha circuito com o normalmente fechado. Quando a bobina é energizada, o comum fecha o circuito normalmente aberto. Dessa forma você consegue jogar de um circuito para outro que esteja ligado nos pinos do seu relé e mantendo seu Arduino isolado.
</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_rele}>
                    <h1 className={styles.titulo}>Módulo relé</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>O relé em si possui dois pinos que estão conectados à uma bobina e três pinos “de saída”, chamados, comum, normalmente aberto e normalmente fechado. Quando a bobina não está energizada o comum fecha circuito com o normalmente fechado. Quando a bobina é energizada, o comum fecha o circuito normalmente aberto. Dessa forma você consegue jogar de um circuito para outro que esteja ligado nos pinos do seu relé e mantendo seu Arduino isolado.
</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default ModuloRele