/** @format */

let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = "";

  items.forEach((item, idx) => {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "10px";
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);
    itemsDiv.appendChild(container);
  });
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  items = oldItems ? JSON.parse(oldItems) : [];
  renderItems();
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItem() {
  if (!Array.isArray(items)) {
    console.error("items is not an array! Resetting...");
    items = [];
  }

  const value = input.value.trim();
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }

  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
