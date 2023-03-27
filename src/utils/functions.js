import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function onFocus(item) {

  if(item !== '') {

    document.getElementById(item).focus();
  }
};

export function showAlert(message, icon, item = '') {

  onFocus(item);
  const swalAlert = withReactContent(Swal);

  swalAlert.fire({
    title: message,
    icon: icon
  });
};


export function confirmAlert(name) {

  const swalAlert = withReactContent(Swal);

  const alert = swalAlert.fire({

    title: `¿Está seguro de eliminar el producto ${name}?`,
    icon: 'question',
    text: 'No se podrá dar marcha atrás',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'

  }).then((result) => {

    return result.isConfirmed;
  });

  return alert;
}