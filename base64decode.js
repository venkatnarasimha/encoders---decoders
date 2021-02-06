/* eslint-disable no-console */
function base64Decode(url) {
  return atob(url);
}
const inputValue = document.querySelector(".text-area-input");
const button = document.querySelector(".but");
const outputValue = document.querySelector(".text-area-output");
const copybut = document.querySelector(".copy");
let input = "";
inputValue.addEventListener("change", () => {
  // console.log("changed");
  input = inputValue.value;
  // console.log(input);
});
button.addEventListener("click", () => {
  const res = base64Decode(input);
  // console.log("clcl");
  outputValue.value = res;
});
copybut.addEventListener("click", () => {
  const copy = document.querySelector(".text-area-output");
  console.log("clicked:", copy.value);
  copy.focus();
  copy.select();
  document.execCommand("copy");
  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log(`Copying text command was ${msg}`);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
});
