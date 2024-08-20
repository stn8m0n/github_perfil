import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={`${nomeUsuario}'s avatar`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
};

export default Perfil;


// import styles from './Perfil.module.css';


    
// const Perfil = ({nomeUsuario}) => {
//     return (
//         <header className={styles.header}>
//                 <img className="perfil-avatar" src={`https://github.com/${nome}.png`} />
//                 <h1 className="perfil-titulo">
//                     {nomeUsuario}
//                 </h1>
//             </header>
//         )
// }
// export default Perfil