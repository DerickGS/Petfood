import { List, X } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useState } from "react"
import Logo from "../img/logo.png"


import styles from "./Header.module.css"

function Header() {


    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
    if (abrirMenu === true) {
        setAbrirMenu(false)
        return
    }

    setAbrirMenu(true)
}

return (
    <header>
        
        <div className={styles.mobile}>
            <div className={styles.menu}>
                <button onClick={handleAbrirFecharMenu}>
                    {
                        abrirMenu === true ? (
                        <X size={32} />
                        ) : (
                        <List size={32} />
                        )
                    }
                </button>
                <h1 className={styles.sla} translate="no">Pet-food</h1>
                <img className= {styles.logo} src={Logo} alt="Logo" />
            </div>
            <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                <nav>
                <Link className={styles.button_options} to={"/Inicio"}>Inicio</Link>
                {/* <Link className={styles.button_options} to={"/Aplicativo"}>Aplicativo</Link> */}
                <Link className={styles.button_options} to={"/Componentes"}>Componentes</Link>
                <Link className={styles.button_options} to={"/Artigos"}>Artigos</Link>
                <Link className={styles.button_options} to={"/Criadores"}>Criadores</Link>
                </nav>
            </div>
        </div>

        <div className={styles.desktop}>
            <div>
            <img className= {styles.logo} src={Logo} alt="Logo" />
            </div>
            <div>
                <nav className={styles.desktop_options}>
                <Link className={styles.button_options} to={"/Inicio"}>Inicio</Link>
                {/* <Link className={styles.button_options} to={"/Aplicativo"}>Aplicativo</Link> */}
                <Link className={styles.button_options} to={"/Componentes"}>Componentes</Link>
                <Link className={styles.button_options} to={"/Artigos"}>Artigos</Link>
                <Link className={styles.button_options} to={"/Criadores"}>Criadores</Link>
                </nav>
            </div>
        </div>

    </header>
)

}
export default Header