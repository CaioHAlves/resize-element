const resizable = document.getElementById("resizable");

let isResizing = false;

resizable.addEventListener("mousedown", (event) => {
  const rect = resizable.getBoundingClientRect();

  // Verifica se o mouse está na área de redimensionamento
  if (event.clientX >= rect.right - 10 && event.clientY >= rect.bottom - 10) {
    isResizing = true;
  }
});

document.addEventListener("mousemove", (event) => {
  if (isResizing) {
    const rect = resizable.getBoundingClientRect();

    // Atualiza largura e altura
    resizable.style.width = `${event.clientX - rect.left}px`;
    resizable.style.height = `${event.clientY - rect.top}px`;
  }
});

document.addEventListener("mouseup", () => {
  isResizing = false;
});
