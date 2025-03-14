function addingEventListener() {
  const input = document.getElementById("input");

  if (input) {
      input.addEventListener("click", function () {
          alert("I was clicked!");
      });
  }
}
addingEventListener();
