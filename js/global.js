const box = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");
const mdBox = document.querySelector(".modal-container");
const mdClose = mdBox.querySelector(".modal-close");
const addForm = document.forms.add;

let user = localStorage.getItem("Анна"); 
if (!user) {
    user = prompt("Ваше уникальное имя: ", "AnnaZakalina");
    localStorage.setItem("Анна", user);
}

const path = `https://cats.petiteweb.dev/api/single/AnnaZakalina`;

let cats = localStorage.getItem("cats-data")

