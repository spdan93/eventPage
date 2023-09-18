function entrar() {
    let senha = document.querySelector('#senha');

    if (senha.value == "rarosmomentos") {
        window.location.href = '../view/.html';
        // window.open('../view/home.html', '_blank');

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token);
    } else {
        $('#msgError').removeClass('hidden');
    }
};