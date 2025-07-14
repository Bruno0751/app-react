import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notyf from './../../context/notyfInstance';

export default function usePages() {
    // const notyf = useContext(Notyf);
    const [fregueses, setFregueses] = useState([]);
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            findAll();
        }
    }, []);

    const showAlertMessage = (type: string, message: string, duration: Number, ripple: Boolean) => {
        notyf.open({
            type: type,
            message: message,
        });
    };

    const findAll = async () => {
        console.log('[DEBUG] Executando findAll...');
        return axios.get('http://localhost:9091/v1/fregues')
            .then(response => {
                console.log(response)
                setFregueses(response.data);
            })
            .catch(error => {
                // console.log('Erro ao buscar fregueses:', error);
                notyf.open({ type: 'default', message: 'Erro ao buscar fregueses' });
                if (error.code === "ERR_NETWORK") {
                    notyf.open({ type: 'warning', message: error.config.url });
                }
                // toast.error('Erro ao buscar fregueses');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        fregueses,
        loading,
        showAlertMessage,
    };
}
