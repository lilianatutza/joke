myButton.style.backgroundColor = "red";
myButton.style.color = "white";
myButton.style.padding = "30px";
myButton.style.borderRadius = "30px";
myButton.style.fontSize = "20px";
myButton.style.marginLeft = "500px";
myButton.style.marginTop = "100px";
//myButton.style.marginLeft = "500px";

message.style.fontSize = "35px"
message.style.marginLeft = "200px";

document.getElementById("myButton").addEventListener("click", function () {
  let message = "Generating a joke for you.... please wait!";
  document.getElementById("message").innerHTML = message;

  let context = "be polite";
  let prompt = "tell me a joke";
  let apiKey = "bb604a31635tbbcod35f93428afe08ae";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
});

function showAnswer(response) {
  let message = document.getElementById("message");
  let typewriter = new Typewriter(message, {});
  typewriter.changeDelay(25).typeString(response.data.answer).start();
}
