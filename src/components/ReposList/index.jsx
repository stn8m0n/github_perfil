import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false); // Adiciona estado para erro

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false); // Reseta o erro ao iniciar a nova busca
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) { // Verifica se a resposta não é OK (status diferente de 200)
                    throw new Error('Usuário não encontrado');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 2000);
            })
            .catch(err => {
                setEstaCarregando(false);
                setDeuErro(true); // Seta o erro para true em caso de erro
                console.error(err);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : deuErro ? ( // Condicional para mostrar a mensagem de erro
                <h1>Erro: Usuário não encontrado</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listName}>
                                <b>Nome: </b>
                                {name}
                            </div>
                            <div className={styles.listLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>
                            <a
                                className={styles.listLink}
                                target="_blank"
                                href={html_url}
                                rel="noopener noreferrer"
                            >
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList;
