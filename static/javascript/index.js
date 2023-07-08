function toggleChat() {
  var chatBody = document.getElementById("chat-body");
  var minimizeBtn = document.getElementById("minimize-btn");

  if (chatBody.style.display === "none") {
    chatBody.style.display = "block";
    minimizeBtn.textContent = "-";
  } else {
    chatBody.style.display = "none";
    minimizeBtn.textContent = "+";
  }
}
var i = 1;
var send = document.getElementById("send-btn");
send.addEventListener("click", function () {
  var message = document.getElementById("input");
  console.log(message.value);
  var newDiv = document.createElement("div");
  newDiv.className = "new-message";
  var newMessage = document.createElement("p");
  newMessage.id = "new-message" + i;
  newDiv.appendChild(newMessage);
  console.log(newMessage);
  newMessage.innerHTML = message.value;
  console.log(newMessage);
  var chatBody = document.getElementById("chat-messages");
  if (i === 1) {
    chatBody.appendChild(newDiv);
  } else {
    var lastMessage = document.getElementById("new-message" + (i - 1));
    lastMessage.append(newDiv);
  }

  message.value = "";
});
