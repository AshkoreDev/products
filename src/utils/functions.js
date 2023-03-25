import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function showAlert(message, icon, item = '') {

  onFocus(item);
  const swalAlert = withReactContent(Swal);

  swalAlert.fire({
    title: message,
    icon: icon
  });
};

function onFocus(item) {

  if(item !== '') {

    document.getElementById(item).focus();
  }
};