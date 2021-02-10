
export let code = "._button_yhu79_1 {\n  background-color: #61dafb;\n}\n";
let json = {"button":"_button_yhu79_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}