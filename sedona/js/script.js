    var link = document.querySelector(".search-btn");
    var popup = document.querySelector(".form");
    var date = document.querySelector("[name=arrival]");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.toggle("show-form");
      date.focus();


    });


    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        if (popup.classList.contains("show-form")) {
          popup.classList.remove("show-form");
        }
      }
    });
