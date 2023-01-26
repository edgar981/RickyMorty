const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
// const regexPassw = /([0-9])/gm; //(?=.*[A-Z])(?=.*[$@$!%*?&])
const regexPassw = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,10}/;

export default function validate (inputs){
    const errors = {};

    if (!inputs.username){
        errors.username = 'Por favor, completa este campo';
    } else if (!regexEmail.test(inputs.username)){
        errors.username = 'El nombre de usuario debe ser un email';
    } else if (inputs.username.length > 35){
        errors.username = 'El nombre de usuario debe contener menos caracteres';
    }else if (!regexPassw.test(inputs.password)){
        errors.password = 'La contraseña debe contener entre 6-10 caracteres y un número';
    }
    //
    // if(inputs.password.length < 6 || inputs.password.length > 10) {
    //     errors.password = 'La contraseña debe contener entre 6-10 caracteres'
    // }

    return errors;

}
