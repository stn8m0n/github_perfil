// import { url } from "inspector";
import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const[repos, setRepos] = useState([]);//criar o estado qeu ira armazenar a lista de repositórios [] para fazer desestruturação do useState () é uma função e como argumento a gente passa um array vazio 
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            // setRepos(resJson);
                setTimeout(() =>{
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 2000);
            // console.log (resJson)
            // console.log(resJson)
        })
    }, [nomeUsuario]); //uma função () que recebe um arrow function, vai ser chamado quando o componente for montado

    return (
        <div className="container">
            { estaCarregando ? ( //
                <h1>carregando ...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listName} >
                                <b>Nome: </b>
                                {name}
                            </div>
                            <div className={styles.listLanguage} >
                                <b>Linguagem: </b>
                                {language}
                            </div >
                            <a className={styles.listLink} target="_blank" href={html_url}>Visitar no GitHub</a> {/*Quando pega um atributo do HTML e quer preencher ele com conteudo dinamico, tem que utilizar as chaves por conta do jsx */}
                        </li>
                    ))}
                    {/* <li>Repositório</li> */}
                </ul>
            )}
        </div>
    )
}

export default ReposList;
