/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector("#input");
const items = document.querySelector("#items");

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const itemsText = input.value;

    const item = document.createElement("div");
    item.textContent = itemsText;

    if (itemsText != "") {
      items.append(item);
      input.value = "";
    }

    item.addEventListener("click", function () {
      item.classList.toggle("done");
    });
  }
});
