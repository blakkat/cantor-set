const htmlValue = `<div class="cantor l"></div>
  <div class="cantor r"></div>`;

const addDivs = () => {
  const emptyDivs = [...document.querySelectorAll(".cantor:empty")];
  emptyDivs.map((div) => {
    div.innerHTML = htmlValue;
  });
};

const howDeep = (x) => (f) => {
  if (x > 0) {
    f();
    howDeep(x - 1)(f);
  }
};

howDeep(7)(() => addDivs());
