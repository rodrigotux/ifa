const oduData = [
  ["Èjì Ogbe","Um dos nomes mais conhecidos entre os 256 Odù do corpus de Ifá."],
  ["Òyèkú Méjì","Nome de um Odù associado ao sistema tradicional de Ifá."],
  ["Ìwòrì Méjì","Um dos Odù do sistema, estudado por meio de versos e narrativas."],
  ["Òdí Méjì","Nome tradicional de um dos Odù de Ifá."],
  ["Ìrosùn Méjì","Odù tradicionalmente incluído no conjunto dos 16 Odù Méjì."],
  ["Òwónrín Méjì","Um dos nomes presentes na estrutura tradicional dos Odù."],
  ["Òbàrà Méjì","Odù estudado dentro do corpus de Ifá."],
  ["Òkànràn Méjì","Nome tradicional de um dos Odù Méjì."],
  ["Ògúndá Méjì","Um dos Odù tradicionalmente associados ao corpus de Ifá."],
  ["Òsá Méjì","Odù tradicionalmente estudado através de versos e narrativas."],
  ["Ìká Méjì","Nome de um dos Odù Méjì da tradição."],
  ["Òtúrúpọ̀n Méjì","Um dos nomes encontrados na estrutura tradicional dos Odù."],
  ["Òtúrá Méjì","Odù tradicionalmente relacionado ao corpus de Ifá."],
  ["Ìrẹtẹ̀ Méjì","Nome tradicional de um dos 16 Odù Méjì."],
  ["Òṣé Méjì","Um dos nomes tradicionais presentes no sistema de Ifá."],
  ["Òfún Méjì","Nome tradicionalmente associado ao último dos 16 Odù Méjì."]
];

const grid = document.querySelector("#oduGrid");
const search = document.querySelector("#searchOdu");

function renderOdu(term=""){
  grid.innerHTML = "";
  oduData.filter(([name]) => name.toLowerCase().includes(term.toLowerCase()))
    .forEach(([name,desc]) => {
      const card = document.createElement("article");
      card.className = "odu";
      card.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
      grid.appendChild(card);
    });
}
renderOdu();
search.addEventListener("input", e => renderOdu(e.target.value));

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("open");
});
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => document.querySelector("#menu").classList.remove("open")));

const modal = document.querySelector("#modal");
const modalText = document.querySelector("#modalText");
document.querySelectorAll(".learn").forEach(btn => btn.addEventListener("click", () => {
  document.querySelector("#modalTitle").textContent = btn.parentElement.querySelector("h3").textContent;
  modalText.textContent = btn.dataset.text;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}));
document.querySelector("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
function closeModal(){ modal.classList.remove("show"); modal.setAttribute("aria-hidden","true"); }
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
