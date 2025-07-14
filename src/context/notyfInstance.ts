import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const notyf = new Notyf({
  duration: 100000, // tempo em milissegundos (padrão: 2000)
  position: { x: 'left', y: 'top' },
  ripple: true, // efeito de onda (padrão: true)
  dismissible: true, // permite fechar manualmente (padrão: false)
  types: [
    {
      type: 'error',
      background: '#dc3545',
      icon: {
        className: 'fa-solid fa-circle-xmark',
        tagName: 'i',
        text: ''
      }
    },
    {
      type: 'success',
      background: '#28a745',
      icon: {
        className: 'fa-solid fa-check',
        tagName: 'i',
        text: ''
      }
    },
    {
      type: 'warning',
      background: '#ffc107',
      icon: {
        className: 'fa-solid fa-bell',
        tagName: 'i',
        text: ''
      }
    },
    {
      type: 'default',
      background: '#3B7DDD',
      icon: {
        className: 'fa-solid fa-question',
        tagName: 'i',
        text: ''
      }
    }
  ]
});
export default notyf;