function addingEventListener() {
  const button = document.getElementById("button");

  function clickAlert() {
      alert("I was clicked!");
  }

  button.addEventListener("click", clickAlert);
}

// Call the function to attach the event listener
addingEventListener();
