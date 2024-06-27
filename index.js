document.getElementById("myButton").addEventListener("click", function () {
  var message = document.createElement("p");
  message.textContent = "Generating a joke for you.... please wait!";
  document.body.appendChild(message);

  let context = "be polite";
  let prompt = "tell me a joke";
  let apiKey = "bb604a31635tbbcod35f93428afe08ae";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
});

function showAnswer(response) {
  document.getElementById("joke").innerHTML = response.data.answer;
}
