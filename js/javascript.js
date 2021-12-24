let btnSendHeaderForm = document.querySelector('#btnSendHeaderForm');
let headerInputEmail = document.querySelector('#headerInputEmail');
let btnSendFooterForm = document.querySelector('#btnSendFooterForm');
let footerInputEmail = document.querySelector('#footerInputEmail');

btnSendHeaderForm.addEventListener('click', () => checkForm(headerInputEmail));
btnSendFooterForm.addEventListener('click', () => checkForm(footerInputEmail));

function checkForm(input){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(input.value)){
       headerInputEmail.classList.remove('border-danger' , 'border-2');
    }else{
        headerInputEmail.classList.add('border-danger' , 'border-2');
    }
}