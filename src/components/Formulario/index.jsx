import { useEffect, useState } from "react"

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0); //use cria func e devolve valor
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //mount quando ele é montado
    //update wusno atualizado
    //onmount quando desmontado


    useEffect(()=> {
        console.log("o componente iniciou");

        return () => {
            console.log(" O componente finalizou.")
        }
    }, []);

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.value);
        setNome(estadoAnterior=> {
            // console.log(estadoAnterior);

            //estadoAnterior = valornovo

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB +materiaC;
        const media = soma / 3;

        // console.log(soma);
        // console.log(media);

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado.</p>
            )
        }

    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento=> setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={evento=> setMateriaC(evento.target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario