function toggleChat() {
  var chatBody = document.getElementById("chat-body");
  var minimizeBtn = document.getElementById("minimize-btn");

  if (chatBody.style.display === "none") {
    chatBody.style.display = "block";
    minimizeBtn.textContent = "Contact Admin - ";
  } else {
    chatBody.style.display = "none";
    minimizeBtn.textContent = "Contact Admin + ";
  }
}
