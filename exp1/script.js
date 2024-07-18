const htmlCodeTextarea = document.getElementById("html-code");
// const cssCodeTextarea = document.getElementById("css-code");
const outputFrame = document.getElementById("output-frame");
console.log(outputFrame);

function updateOutput() {
  const htmlCode = htmlCodeTextarea.value;
  // const cssCode = `<style>${cssCodeTextarea.value}</style>`;
  // const combinedCode = `${htmlCode}\n${cssCode}`;

  outputFrame.contentDocument.open();
  outputFrame.contentDocument.write(htmlCode);
  outputFrame.contentDocument.close();
}

htmlCodeTextarea.addEventListener("input", updateOutput);
// cssCodeTextarea.addEventListener("input", updateOutput);

// Initial output update
updateOutput();

function slide() {
  let slideValue = document.getElementById("slider").value;
  document.getElementById(
    "my-img"
  ).style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;
  console.log(`polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`);
}
