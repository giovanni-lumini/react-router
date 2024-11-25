import { useState, useEffect } from 'react'

export default function AppMain() {

    /* creiamo una const con useSate vuoto */
    const [pizzeData, setPizzeData] = useState({})

    /* creiamo una funzione per la chiamata API fetch */
    function fetchData(url = "http://127.0.0.1:3000/pizze") {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setPizzeData(data)
            })
    }

    /* creiamo una funzione che richiama la chiamata API, da inserire nell'onClick del button */
    function handleClick(e) {
        fetchData()
    }
    /* con useEffect, la chiamata API avviene già all'apertura della pagina, senza cliccare sul button */
    /* useEffect(fetchData, []) */

    return (
        <>
            <div className="text-center-p2">
                <button type="button" onClick={handleClick} className="btnn" >Scopri le Pizze</button>
            </div>

            <section className="pizze">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {/* i dati sono in data (visto nel consolelog che l'array è in results), quindi mappiamo su data */}
                        {
                            pizzeData.data ?
                                pizzeData.data.map(pizza => (
                                    <div className="col" key={pizza.id}>
                                        <div className="card text-center">
                                            <img className="img" src={pizza.image} alt="" />
                                            <p>
                                                {pizza.name}
                                            </p>
                                        </div>
                                    </div>
                                )) :
                                <p>No results yet</p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


