import Componente from "../../img/bluetooth.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function Modulo_Bluetooth() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Modulo Bluetooth</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>O que é o módulo bluetooth? O Módulo Bluetooth possibilita transmitir e receber dados através de comunicação sem fio. Este módulo pode ser utilizado para criação de comunicação wireless para troca de informações entre dispositivos.
No projeto utilizamos do módulo bluettoth para fazer conexão direta do arduino para o aplicativo.
</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_bluetooth}>
                    <h1 className={styles.titulo}>Modulo Bluetooth</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>O que é o módulo bluetooth? O Módulo Bluetooth possibilita transmitir e receber dados através de comunicação sem fio. Este módulo pode ser utilizado para criação de comunicação wireless para troca de informações entre dispositivos.
No projeto utilizamos do módulo bluettoth para fazer conexão direta do arduino para o aplicativo.
</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default Modulo_Bluetooth