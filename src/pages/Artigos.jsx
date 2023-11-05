// /*import { List, X } from "@phosphor-icons/react"
// import { Link } from "react-router-dom"*/

// import { useState } from "react"

import styles from "./Artigos.module.css"
import Header from "../components/Header"




function Artigos() {



return (
    <body>
        <Header /> 
        <main className= {styles.conteudo_pagina}>
            <section className={styles.desktop}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Artigos</h1>
                </div>
                <section className={styles.card_conteudo}>
                    <p>O comedouro automático tradicional funciona pela ação da gravidade. O tutor coloca a ração no reservatório e, conforme o pet se alimenta, uma nova ração é liberada. O único problema desses objetos é que, como a ração está sempre disponível, se não cuidar, o cachorro ou gato pode acabar engordando. <a href="https://blog.cobasi.com.br/comedouro-automatico/" className={styles.data_descr}>https://blog.cobasi.com.br/comedouro-automatico/</a></p>
                    {/* <div className={styles.vidio}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TdMz7EMKBdY?si=BSo_eiKQ7nBbPHlH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>       */}

                    
                    <div className={styles.container}>
                        <div className={styles.gallery_wrapper}>
                            <div className={styles.gallery}>
                            <div className={styles.vidio} id="slide_1">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/gfOaMKVdj8I?si=_arwv3F1KVLjT8ng" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>      
                            <div className={styles.vidio} id="slide_2">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/blvkJBAcGY0?si=xRuj2ifewE-jp9ED" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3AwJcboWMhU?si=uy9MyBXnzdQh8kd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_4">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3AwJcboWMhU?si=uy9MyBXnzdQh8kd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_5">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2F528zFXesU?si=kbmJ6xR_bK_9d6MG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/TdMz7EMKBdY?si=ADCYIN9x4xc2RqXw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_7">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/PZG1ax_i8PI?si=7LOpdgUcYN58Q7sk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_8">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/7iYo5MnOayc?si=EERxG5Kw-tKckGZt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/MuU_I9cysKc?si=0VG6ECt1UmUpPsCY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={styles.vidio} id="slide_10">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RkLAryD1xRU?si=0S5vxGSy4DQm3pf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            {/* <div className={styles.vidio} id="slide_11">
                            </div>
                            <div className={styles.vidio} id="slide_12">
                            </div>
                            <div className={styles.vidio} id="slide_13">
                            </div> */}
                            {/* <img id="slide_2" src="https://source.unsplash.com/random/250x250/?animal" alt="Animal Image" className={`${styles.item} ${styles.current_item}`}/>
                            <img id="slide_3" src="https://source.unsplash.com/random/250x250/?street" alt="Street Image" className={`${styles.item} ${styles.current_item}`}/>
                            <img id="slide_4" src="https://source.unsplash.com/random/250x250/?zoo" alt="Zoo Image" className={`${styles.item} ${styles.current_item}`}/>
                            <img id="slide_5"src="https://source.unsplash.com/random/250x250/?zoo" alt="Model Image" className={`${styles.item} ${styles.current_item}`}/> */}
                            </div>
                            <div className={styles.slide_nav}>
                                <a href="#slide_1"></a>
                                <a href="#slide_2"></a>
                                <a href="#slide_3"></a>
                                <a href="#slide_4"></a>
                                <a href="#slide_5"></a>
                                <a href="#slide_6"></a>
                                <a href="#slide_7"></a>
                                <a href="#slide_8"></a>
                                <a href="#slide_9"></a>
                                <a href="#slide_10"></a>
                                {/* <a href="#slide_11"></a>
                                <a href="#slide_12"></a>
                                <a href="#slide_13"></a> */}
                            </div>
                        </div>  
                    </div>

                </section>
            </section>

            <section className={styles.mobile}>
                <div className={styles.card_titulo}>
                    <h1 className={styles.titulo}>Artigos</h1>
                </div>
                <section className={styles.card_conteudo}>
                <p>O comedouro automático tradicional funciona pela ação da gravidade. O tutor coloca a ração no reservatório e, conforme o pet se alimenta, uma nova ração é liberada. O único problema desses objetos é que, como a ração está sempre disponível, se não cuidar, o cachorro ou gato pode acabar engordando. <a href="https://blog.cobasi.com.br/comedouro-automatico/">https://blog.cobasi.com.br/comedouro-automatico/</a></p>
                    <div className={styles.container}>
                    {/* <button className={styles.arrow_left} aria-label="Previous image">◀</button>
                    <button className={styles.arrow_right} aria-label="Next Image">▶</button> */}
                    <div className={styles.gallery_wrapper}>
                        <div className={styles.gallery}>
                        <div className={styles.item_current_item} id="slide_1">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gfOaMKVdj8I?si=_arwv3F1KVLjT8ng" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>      
                                <div className={styles.item_current_item} id="slide_2">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/blvkJBAcGY0?si=xRuj2ifewE-jp9ED" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_3">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3AwJcboWMhU?si=uy9MyBXnzdQh8kd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3AwJcboWMhU?si=uy9MyBXnzdQh8kd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_5">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2F528zFXesU?si=kbmJ6xR_bK_9d6MG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_6">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TdMz7EMKBdY?si=ADCYIN9x4xc2RqXw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_7">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PZG1ax_i8PI?si=7LOpdgUcYN58Q7sk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_8">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7iYo5MnOayc?si=EERxG5Kw-tKckGZt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_9">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MuU_I9cysKc?si=0VG6ECt1UmUpPsCY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className={styles.item_current_item} id="slide_10">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RkLAryD1xRU?si=0S5vxGSy4DQm3pf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                        {/* <img src="https://source.unsplash.com/random/250x250/?beach" alt="Beach Image" className={styles.item_current_item}/>
        <img src="https://source.unsplash.com/random/250x250/?animal" alt="Animal Image" className={styles.item_current_item}/>
        <img src="https://source.unsplash.com/random/250x250/?street" alt="Street Image" className={styles.item_current_item}/>
        <img src="https://source.unsplash.com/random/250x250/?zoo" alt="Zoo Image" className={styles.item_current_item}/>
        <img src="https://source.unsplash.com/random/250x250/?model" alt="Model Image" className={styles.item_current_item}/> */}
                        </div>
                    </div>
                    </div>
                </section>
            </section>
        </main>
    </body>
)
}

export default Artigos


