let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

// Add event listeners for dragover and drop
rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
  e.preventDefault();
  rightBox.appendChild(selected);
});

leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
  e.preventDefault();
  leftBox.appendChild(selected);
});

// Add event listener for dragstart
for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
}
