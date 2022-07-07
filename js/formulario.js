const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if(resposta.ok) {
    formulario.innerHTML = "<p class= 'font-2-l' style= 'grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #F7F7F7;'><span style=' color: #317A00'> Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em 24 horas.</span></p>"
  } else {
    formulario.innerHTML = "<p class= 'font-2-l' style= 'grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #F7F7F7;'> <span style=' color: #E00000;'> Erro no Envio</span>, você pode enviar diretamente para nosso email em:contato@bikcraft.net</p>"
  }
}


function envirarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  
  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', envirarFormulario);