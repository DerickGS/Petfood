import Componente from "../../img/motor servo.png"

import styles from "./Componentes_geral.module.css"
import Header from "../../components/Header"



function MotorServo() {

return (

<body>
    <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Motor servo</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                        <p className={styles.conteudo_secundario_paragrafo}>Os servos motores são atuadores utilizados onde é necessário ter um controle de movimento, com posicionamento de alta precisão e reversão. São amplamente usados em projetos robóticos, máquinas CNC, sistemas automatizados, aeromodelismo, entre outros.
Os servos CC (corrente contínua) são formados basicamente por um pequeno motor CC, um potenciômetro interno como sensor de posição, uma caixa de engrenagens para alteração do torque e um circuito eletrônico para o acionamento.
</p>
                        
                    </div>
                </section>
            </section>

            <section className={styles.desktop}>
                <div className={styles.card_titulo_motor_servo}>
                    <h1 className={styles.titulo}>Motor servo</h1>
                </div>
                <section className={styles.conteudo}>
                    <div  className={styles.card_conteudo}>
                        <div className={styles.box_img}>
                            <img className={styles.conteudo_principal_imagem} src={Componente} alt="Imagem do projeto" />  
                        </div>
                       <div className={styles.card_texto}>
                       <p className={styles.conteudo_secundario_paragrafo}>Os servos motores são atuadores utilizados onde é necessário ter um controle de movimento, com posicionamento de alta precisão e reversão. São amplamente usados em projetos robóticos, máquinas CNC, sistemas automatizados, aeromodelismo, entre outros.
Os servos CC (corrente contínua) são formados basicamente por um pequeno motor CC, um potenciômetro interno como sensor de posição, uma caixa de engrenagens para alteração do torque e um circuito eletrônico para o acionamento.
</p>
                       </div>
                       
                    </div>
                </section>
            </section>
        </main>
</body>

    )
}

export default MotorServo