/*import { List, X } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { useState } from "react"*/
import { Link } from "react-router-dom"

import Arduino_Uno from "../img/Arduino Uno.png";
import bluetooth from "../img/bluetooth.png";
import bomba_da_água from "../img/bomba da água.png"
import fonte_12v from "../img/fonte 12v.png";
import motor_servo from "../img/motor servo.png";
// import Módulo_gsm_sim800L from "../img/Módulo gsm (sim800L).png";
import Módulo_relé from "../img/Módulo relé.png";
import Protoboards  from "../img/protoboards.png"
import sensor_de_peso from "../img/sensor de peso.png"
import leds from "../img/legs.png"
import buzzer from "../img/buzzer.png"

import styles from "./Componentes.module.css"
import Header from "../components/Header"

function Componentes() {
return (
<body>
    <Header />
    <main className={styles.conteudo_pagina}>
    <section className={styles.left}>   
    <div className={styles.card_titulo}>
        <h1 className={styles.titulo}>Componentes</h1>
    </div>

    <section  className={styles.card_conteudo}>
        <p className={styles.conteudo_secundario_paragrafo}>Componentes são as partes que formam uma placa Arduino, uma plataforma de prototipagem eletrônica que permite criar projetos interativos. Além disso, existem módulos Arduino, que são placas eletrônicas que podem ser acopladas ao Arduino para adicionar mais funcionalidades, como comunicação via Internet, displays, acelerômetros, etc... Vejam abaixo os componentes utizidados para este projeto.</p>
    </section>
    <br />
    </section>
        <div className={styles.componente}>
            
                <div className={styles.card_componente}>
                <Link className={styles.button_options} to={"/Arduino_Uno"}>
                    <img src={Arduino_Uno} alt="Arduino Uno" className={styles.img_componente}/>
                    <p>Arduino Uno</p>
                </Link>                    
                </div>

                {/* <div className={styles.card_componente}>
                <Link className={styles.button_options} to={"/ModuloBluetooth"}>
                    <img src={bluetooth} alt="bluetooth" className={styles.img_componente}/>
                    <p>Modulo Bluetooth</p>
                </Link>
                </div> */}

                <div className={styles.card_componente}>
                <Link className={styles.button_options} to={"/BombaDágua"}>
                    <img src={bomba_da_água} alt="bomba da água" className={styles.img_componente}/>
                    <p>Bomba d’água</p>
                </Link>   
                </div>

                <div className={styles.card_componente}>
                <Link className={styles.button_options} to={"/Fonte12v"}>
                    <img src={fonte_12v} alt="fonte 12v" className={styles.img_componente}/>
                    <p>Fonte 12v</p>
                </Link> 
                </div>

                <div className={styles.card_componente}>
                <Link className={styles.button_options} to={"/MotorServo"}>
                    <img src={motor_servo} alt="motor servo" className={styles.img_componente}/>
                    <p>Motor servo</p>
                </Link>
                </div>
            
            {/* <div className={styles.card_componente}>
                
                <img src={Módulo_gsm_sim800L} alt="Módulo gsm (sim800L)" className={styles.img_componente}/>
                <p>Módulo gsm (sim800L)</p>
                
            </div> */}

            <div className={styles.card_componente}>
            <Link className={styles.button_options} to={"/Leds"}>
                <img src={leds} alt="Leds" className={styles.img_componente}/>
                <p>Leds</p>
            </Link>
            </div>

            <div className={styles.card_componente}>
            <Link className={styles.button_options} to={"/ModuloRele"}>
                <img src={Módulo_relé} alt="Módulo relé" className={styles.img_componente}/>
                <p>Módulo relé</p>
            </Link>
            </div>

            <div className={styles.card_componente}>
            <Link className={styles.button_options} to={"/Protoboards"}>
                <img src={Protoboards} alt="Protoboards" className={styles.img_componente}/>
                <p>Protoboards</p>
            </Link>
            </div>
            
            <div className={styles.card_componente}>
            <Link className={styles.button_options} to={"/SensorPePeso"}>
                <img src={sensor_de_peso} alt="Sensor de peso" className={styles.img_componente}/>
                <p>Sensor de peso</p>
            </Link>
            </div>
            
            <div className={styles.card_componente}>
            <Link className={styles.button_options} to={"/Buzzer"}>
                <img src={buzzer} alt="Buzzer" className={styles.img_componente}/>
                <p>Buzzer</p>
            </Link>
            </div>

        </div>
    </main>
</body>
)
}

export default Componentes