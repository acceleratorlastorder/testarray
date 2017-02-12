document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");


    let button = document.getElementById("button");
    let container = document.querySelector(".container");
    let x = document.getElementById("input").value;
    let arraylength = 10;
    let title = document.createElement('H1');
    let havebeenused = 0;

    button.onclick = function() {
      let x = document.getElementById("input").value;
      let r = document.querySelector('input[name="wherewestart"]:checked').value;
      console.log("valeur de l'input", x);
      console.log("valeur de la radio", r);
      console.log("container", container);
      cleanthedom();
      createarray(x, r);
    }



function cleanthedom() {
    if (havebeenused >= 1) {
      console.log("removing the content");
      let lol = container.title.innerHTML ="";
      console.log("title", title);
      console.log("lol", lol);
      return lol;
    } else {
      console.log("going out");
      return false;
    }
}


function createarray(x, r) {
  let array = [];

  let i = 0;
  let v = 0;
    console.log("r dans la function", r);
    if (r == 1) {
        v = 1;
        console.log("i", i);

    } else {
        v = 0;
        console.log("i", i);

    }
    container.appendChild(title)
    while (i < x) {
        array.push([i+v]);
        title.innerHTML = array;
        i++;
    }



    havebeenused++;
    console.log("tableau", array);
    console.log("valeur de l'input", x);
    return;
}





















});







    let container = document.querySelector(".container");
