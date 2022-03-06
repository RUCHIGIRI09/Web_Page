function choicesCompleted() {

    var c = 0;

    for (i = 0; i < 5; i++) {
      console.log(document.getElementById("choice" + i));
        if (document.getElementById("choice" + i).value != null) {
            c = c + 1;
        }
  }
  document.getElementById("show").innerHTML = c;
  }