let content = document.querySelector("#idContents");
let tabs = document.querySelector("#idTabs");

for (let i=0; i<tabs.length; i++) {
    tabs.children[i].dataset.index = i;
    content.children[i].dataset.index = i;
}

for (let i=0; i<idContents.children.length; i++){
    tabs.children[i].dataset.index = i;
    if(i)
        idContents.children[i].hidden = true;
}

idTabs.onclick =event=>{
    tabs.querySelector(".active").classList.remove("active");
    idContents.querySelector("li:not([hidden])").hidden = true;
    event.target.classList.add("active");
    content.children[event.target.dataset.index].hidden = false;
}
