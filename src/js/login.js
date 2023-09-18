function entrar() {
    let senha = document.querySelector('#senha');

    if (senha.value == "rarosmomentos") {
        // window.location.href="http://localhost:5500/src/view/home.html";
        window.open('http://localhost:5500/src/view/home.html');
        // window.location.replace("http://localhost:5500/src/view/home.html");

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token);
    } else {
        $('#msgError').removeClass('hidden');
    }
};