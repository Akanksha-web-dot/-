function revealMessage() {
  const secret = document.getElementById("secret");

  secret.style.display = "block";

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
