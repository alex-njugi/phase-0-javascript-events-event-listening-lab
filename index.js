document.addEventListener("DOMContentLoaded", function () {
  function addingEventListener() {
    const button = document.getElementById("button");

    function clickAlert() {
      alert("I was clicked!");
    }

    if (button) {
      button.addEventListener("click", clickAlert);
    }
  }

  addingEventListener();
});
