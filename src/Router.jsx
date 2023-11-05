import { Routes, Route } from "react-router-dom"

import Inicio from "./pages/Inicio"
import Aplicativo from "./pages/Aplicativo"
import Componentes from "./pages/Componentes"
import Artigos from "./pages/Artigos"
import Criadores from "./pages/Criadores"


import ArduinoUno from "./pages/Componente.pgs/ArduinoUno"
import ModuloBluetooth from "./pages/Componente.pgs/ModuloBluetooth"
import BombaDágua from "./pages/Componente.pgs/BombaDágua"
import Fonte12v from "./pages/Componente.pgs/Fonte12v"
import MotorServo from "./pages/Componente.pgs/MotorServo"
import Leds from "./pages/Componente.pgs/Leds"
import ModuloRele from "./pages/Componente.pgs/ModuloRele"
import Protoboards from "./pages/Componente.pgs/Protoboards"
import SensorPePeso from "./pages/Componente.pgs/SensorDePeso"
import Buzzer from "./pages/Componente.pgs/Buzzer"


function Router() {
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Aplicativo" element={<Aplicativo />} />
            <Route path="/Componentes" element={<Componentes />} />
            <Route path="/Artigos" element={<Artigos />} />
            <Route path="/Criadores" element={<Criadores />} />

            <Route path="/Arduino_Uno" element={<ArduinoUno />} />
            <Route path="/ModuloBluetooth" element={<ModuloBluetooth />} />
            <Route path="/BombaDágua" element={<BombaDágua />} />
            <Route path="/Fonte12v" element={<Fonte12v />} />
            <Route path="/MotorServo" element={<MotorServo />} />
            <Route path="/Leds" element={<Leds />} />
            <Route path="/ModuloRele" element={<ModuloRele />} />
            <Route path="/Protoboards" element={<Protoboards />} />
            <Route path="/SensorPePeso" element={<SensorPePeso />} />
            <Route path="/Buzzer" element={<Buzzer />} />




        </Routes>
    )
}

export default Router