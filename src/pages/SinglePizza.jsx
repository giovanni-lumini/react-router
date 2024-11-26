import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function SinglePizza() {

    const { id } = useParams();
    const url = "http://127.0.0.1:3000/pizze/${id}"
    console.log(url);

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        [])

    return (
        <>
            <h1>Pizza id: {id}</h1>
            {/* {
                pizza ? (

                    <div>
                        <Jumbotron title={pizza.name} description={pizza?.description} bgImageUrl={`http://127.0.0.1:3000/${pizza.image}`} />

                        <section className="pizza_details">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card border-0 rounded-4 shadow-lg">
                                            <img className="card-img-top rounded-4" src={`http://127.0.0.1:3000/${pizza.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h3>{pizza.name}</h3>
                                        <div>
                                            <p>
                                                {pizza.description}
                                            </p>
                                            <div className="price">€{pizza.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    <div>loading...</div>
                )
            } */}
        </>
    )
}