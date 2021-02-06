/* eslint-disable no-console */
const encode = document.querySelector(".encoder");
const result = document.querySelector(".text-area-output");
const inputValue = document.querySelector(".text-area-input");
const decode = document.querySelector(".decoder");
const copybut = document.querySelector(".copy");

encode.addEventListener("click", () => {
  result.value = encodeURIComponent(inputValue.value);
  // console.log(result.value);
});
decode.addEventListener("click", () => {
  result.value = decodeURIComponent(inputValue.value);
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
