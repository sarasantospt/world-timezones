function updateTime() {
  // Havana
  let havanaElement = document.querySelector("#havana");
  let havanaDateElement = havanaElement.querySelector(".date");
  let havanaTimeElement = havanaElement.querySelector(".time");
  let havanaTime = moment().tz("America/Havana");

  havanaDateElement.innerHTML = havanaTime.format("MMMM Do YYYY");
  havanaTimeElement.innerHTML = havanaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
