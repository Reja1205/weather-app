const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  const inputElement = document.getElementById("input-element").value;

  const iconPicture = document.getElementById("icon");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputElement}&appid=1fe5e3f0a06a612e7194c49f5165721e`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const cityName = data.name;
      const temperature = data.main.temp;
      const celcius = temperature - 273.15;
      const far = (celcius * 9) / 5 + 32;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const div = document.createElement("div");
      iconPicture.innerHTML = " ";
      div.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">`;
      iconPicture.appendChild(div);

      document.getElementById("city").innerText = cityName;
      document.getElementById("temp").innerText = far.toFixed(2);
      document.getElementById("des").innerText = description;
      document.getElementById("input-element").value = " ";
    });
});
