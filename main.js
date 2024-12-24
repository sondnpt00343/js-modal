const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $("#modal");

$("#open-modal").onclick = function () {
    modal.classList.add("show");
};

$("#modal-close").onclick = function () {
    modal.classList.remove("show");
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
});
