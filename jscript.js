function scrollToAbout() {
  //localizar por elemento
  document
    .getElementById("about-container")

    .scrollIntoView({ behavior: "smooth" });
}

function showHome() {
  //localizar por coordenada da pagina
  scroll(0, 0).scrollIntoView({ behavior: "smooth" });
}

function showAbout() {
  document
    //localizar por elemento

    .getElementById("about-container")
    .scrollIntoView({ behavior: "smooth" });
}

function showContact() {
  document
    //localizar por elemento

    .getElementById("contact-container")
    .scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  //variables
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  // validations
  console.log(subject);
  console.log(email);
  console.log(message);

  alert("Thank you! I will reach you soon :)");
  return false;
}

function downloadFile() {
  window.location.href =
    "https://drive.google.com/file/d/1wmUIJNhKvd9rrGJxkYycoPhA1kMDLeS0/view?usp=drive_link";
}

function followGitLink() {
  window.location.href = "https://github.com/cmmarques22";
}

function followPPLink() {
  window.location.href = "https://github.com/cmmarques22";
}

const apitest = "fc964s97f5fdc6sc4ae260sbee0sde1sfs62a";
const sunsetElement = document.getElementById("sunsetTime");
const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit-btn");

function convertEpochTimeToHoursAndMinutes(epochTime) {
  const date = new Date(epochTime * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  sunsetElement.innerText = `Aproveita o por do sol na tua cidade às: ${hours}:${minutes}`;
}

submitButton.addEventListener("click", () => {
  const city = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const epochTime = data.sys.sunset;
      convertEpochTimeToHoursAndMinutes(epochTime);
    });
});
