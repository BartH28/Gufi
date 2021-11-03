import React from "react";




export default function Rodape(){
    
    const data = new Date().getFullYear();

    return(

    

        <footer className="rodapePrincipal">
            <section className="rodapePrincipal-patrocinadores">
            <div className="container">
                <p>Escola SENAI de Informática - {data}</p>
            </div>
            </section>
        </footer>
    )
}


