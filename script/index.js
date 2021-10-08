let accordion = document.getElementsByClassName("accordionName");

for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
            let panel = this.nextElementSibling;
            if (panel.style.height) {
                  panel.style.height = null;
            } else {
                  panel.style.height = panel.scrollHeight + "px";
            }
      });
}
