function mostrarSenha() {
    document.getElementById('pass').type = 'text';
}

function ocultarSenha() {
    document.getElementById('pass').type = 'password';
}

function seguranca() {
    document.getElementById('pass').type = 'password';
}

document.getElementById('olho').addEventListener('mousedown', mostrarSenha)
document.getElementById('olho').addEventListener('mouseup', ocultarSenha)

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', seguranca)
