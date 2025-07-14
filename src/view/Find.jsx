import './../style/Sass.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePages from './hook/usePages';

export default function Find() {
    const hooks = usePages();
    if (hooks.loading) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            <div>
                <h2>Lista de Usuários</h2>
                {/* <button onClick={() => showAlertMessage('error', 'Erro ao buscar fregueses')}>Mostrar Notyf</button> */}
                <ul>
                    {hooks.fregueses.map(obj => (
                        <li key={obj.id}>
                            {obj.name} ({obj.email})
                        </li>
                    ))}
                </ul>
            </div>
            <ToastContainer />
        </>
    )
}
