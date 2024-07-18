const htmlCodeTextarea = document.getElementById("html-code");
const cssCodeTextarea = document.getElementById("css-code");
const outputFrame = document.getElementById("output-frame");

function updateOutput() {
  const htmlCode = htmlCodeTextarea.value;
  const cssCode = `<style>${cssCodeTextarea.value}</style>`;
  const combinedCode = `${htmlCode}\n${cssCode}`;

  outputFrame.contentDocument.open();
  outputFrame.contentDocument.write(combinedCode);
  outputFrame.contentDocument.close();
}

htmlCodeTextarea.addEventListener("input", updateOutput);
cssCodeTextarea.addEventListener("input", updateOutput);

// Initial output update
updateOutput();
