const texto = `Quisiera que fueras mi San Valentín por siempre…
¿me lo permites? 💘

Desde que llegaste a mi vida, todo se siente diferente.
No porque todo sea perfecto, sino porque contigo todo se siente real.
Me haces sentir en casa, me haces sentir paz, y me haces sentir amor. 💖`;

let i = 0;

function escribirTexto() {
  const p = document.getElementById("typeText");
  p.textContent = texto.substring(0, i);
  i++;

  if (i <= texto.length) {
    setTimeout(escribirTexto, 35);
  }
}

escribirTexto();
