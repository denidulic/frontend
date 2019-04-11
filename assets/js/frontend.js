var tags = ["Red", "Green", "Purple"];
let index = 0;
var ul = document.getElementById("itemlist");
var inputitem = document.getElementById("inputitem");
window.onload = function() {
  list();
};

function updatehash() {
  var newtags = "tags=" + tags.join(",");
  window.location.hash = newtags;
  inputitem.value = "";
}

function addItem() {
  if (inputitem.value != "") {
    var li = document.createElement("li");
    li.setAttribute("id", index++);
    li.appendChild(document.createTextNode(inputitem.value));
    console.log(inputitem.value);
    ul.appendChild(li);
    li.setAttribute("onClick", "removeItem(id)");
    ul.appendChild(li);
    tags.push(inputitem.value);
    updatehash();
  }
}

function removeItem(id) {
  var item = document.getElementById(id);
  ul.removeChild(item);
  var ind = tags.indexOf(item.innerHTML);
  tags.splice(ind, 1);
  updatehash();
}

function list() {
  updatehash();
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var listItem = document.createElement("li");
    listItem.setAttribute("id", index++);
    listItem.textContent = tag;
    ul.appendChild(listItem);
    listItem.setAttribute("onClick", "removeItem(id)");
    ul.appendChild(listItem);
  }
}
