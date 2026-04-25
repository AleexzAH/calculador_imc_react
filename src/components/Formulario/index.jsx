import { useState } from 'react';
import  './main.css';


const formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [media, setMedia] = useState(0);

    function calculaMedia() {
        setMedia = peso / (altura * altura);
    }

    function getStatusIMC(media) {
        if (media < 18.5) {
            return "Abaixo do peso";
        } else if (media < 25) {
            return "Peso normal";
        } else if (media < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }


    return (
        <>
            <div className="container">
                <div className="calculadora">
                    <h1>Calculadora de IMC</h1>
                    <h2>Preencha os campos abaixo para saber seu IMC</h2>
                    <input type="number" min={1} max={2.5} step="0.01" placeholder="Altura em metros" onChange={(e) => setAltura(e.target.value)}/>
                    <input type="number"  min={20} max={300} step="0.1" placeholder="Peso em kg" onChange={(e) => setPeso(e.target.value)}/>
                    <button   disabled={peso <= 0 || altura <= 0} style={{opacity: peso <= 0 || altura <= 0 ? 0.5 : 1, cursor: peso <= 0 || altura <= 0 ? "not-allowed" : "pointer" }} className="btn-form" type="submit" onClick={(e) => setMedia(peso / (altura * altura))}>Verificar</button>
                </div>
                {media !== 0 && (
                    <div className="resultado">
                        <h3>O seu IMC atual é: {media.toFixed(2)}</h3>
                        <p>Status: {getStatusIMC(media)}</p>
                    </div>
                )}
                {altura > 2.5 && (
                    <div className="erro">
                        <p>Você digitou uma altura improvável. Máximo 2,5 metros.</p>
                    </div>
                )}
                {peso > 300 && (
                    <div className="erro">
                        <p>Você digitou um peso improvável. Máximo 300kg.</p>
                    </div>
                )}
            </div>
        </>
    
    );
}

export default formulario;