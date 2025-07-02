import './../style/Sass.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Find() {
    const [fregueses, setFregueses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:9091/v1/fregues')
            .then(response => {
                setFregueses(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar fregueses:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <div>
                <h2>Lista de Usuários</h2>
                <ul>
                    {fregueses.map(obj => (
                        <li key={obj.id}>
                            {obj.name} ({obj.email})
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
