let tags = ["Red", "Green", "Purple"];
let index = 0;
let ul = document.getElementById("itemlist");
let inputitem = document.getElementById("inputitem");

window.onload = function() {
  list();
};

window.onhashchange = onHashChangeFunction;

document.getElementById("btnadd").addEventListener("click", function(){
  addItem();
});


function list() {
  addingItemsByArray(tags);
  updatehash();
}

function onHashChangeFunction (){ 
  const hashs=location.hash.slice(6);
  const splicehash=hashs.split(",");

  var lis = document.querySelectorAll('#itemlist li');
        for(var i=0; li=lis[i]; i++) {
          li.parentNode.removeChild(li);
        }

  addingItemsByArray(splicehash);
  tags=[...splicehash];
}

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
    ul.appendChild(li);
    li.setAttribute("onClick", "removeItem(id)");
    ul.appendChild(li);
    let newtag=[...tags];
    newtag.push(inputitem.value);
    tags=[...newtag];
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



function addingItemsByArray(tagsArray){
  for (var i = 0; i < tagsArray.length; i++) {
    var tag = tagsArray[i];
    var listItem = document.createElement("li");
    listItem.setAttribute("id", index++);
    listItem.setAttribute("class", "list");
    listItem.textContent = tag;
    ul.appendChild(listItem);
    listItem.setAttribute("onClick", "removeItem(id)");
    ul.appendChild(listItem);
  }
}
