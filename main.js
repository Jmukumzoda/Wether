import axios from "axios";
import { Sunrise, Sunset, day2_h4, day2_img, day2_p, day3_h4, day3_img, day3_p, day4_h4, day4_img, day4_p, day5_h4, day5_img, day5_p, day6_h4, day6_img, day6_p, ip_7days, toggle, wrap, form, h2, h1, p, h2_wether, img, h3_wether, ul_li, humidity, pressure, uv, inp, ip, hours_time1_img, hours_time1_p, hours_time1_h4, hours_time2_img, hours_time2_p, hours_time2_h4, hours_time3_img, hours_time3_p, hours_time3_h4, hours_time4_img, hours_time4_p, hours_time4_h4, time, wether_cloud, container, hours_wether } from "./variables";

toggle.onclick = () => {
  wrap.classList.toggle('class_black')
  time.classList.toggle('class_black')
  wether_cloud.classList.toggle('class_black')
  container.classList.toggle('class_black')
  hours_wether.classList.toggle('class_black')

}

form.onsubmit = (e) => {
  e.preventDefault()
  if (inp.value === "") {
    alert("Please enter")
    return
  }
  axios.get(ip + "&q=" + inp.value)
    .then(res => {
      console.log(res);
      h2.innerHTML = inp.value
      h1.innerHTML = res.data.location.localtime.slice(10)
      p.innerHTML = res.data.location.localtime.slice(0, 10)
      h2_wether.innerHTML = `${res.data.current.temp_c + '°'}C`
      img.src = `${res.data.current.condition.icon}`
      img.style.width = "180px"
      h3_wether.innerHTML = `${res.data.current.condition.text}`
      ul_li.innerHTML = `${res.data.current.wind_kph} km/h`
      humidity.innerHTML = `${res.data.current.humidity} %`
      pressure.innerHTML = `${res.data.current.pressure_in} hPa`
      uv.innerHTML = `${res.data.current.uv}`

    })

  axios.get(ip_7days + "&q=" + inp.value)
    .then(res => {
      console.log(res)
      day2_img.src = res.data.forecast.forecastday[1].day.condition.icon
      day2_p.innerHTML = `${res.data.forecast.forecastday[1].day.maxtemp_c + '°'}C`
      day2_h4.innerHTML = res.data.forecast.forecastday[1].date
      day3_img.src = res.data.forecast.forecastday[2].day.condition.icon
      day3_p.innerHTML = `${res.data.forecast.forecastday[2].day.maxtemp_c + '°'}C`
      day3_h4.innerHTML = res.data.forecast.forecastday[2].date
      day4_img.src = res.data.forecast.forecastday[3].day.condition.icon
      day4_p.innerHTML = `${res.data.forecast.forecastday[3].day.maxtemp_c + '°'}C`
      day4_h4.innerHTML = res.data.forecast.forecastday[3].date
      day5_img.src = res.data.forecast.forecastday[4].day.condition.icon
      day5_p.innerHTML = `${res.data.forecast.forecastday[4].day.maxtemp_c + '°'}C`
      day5_h4.innerHTML = res.data.forecast.forecastday[4].date
      day6_img.src = res.data.forecast.forecastday[5].day.condition.icon
      day6_p.innerHTML = `${res.data.forecast.forecastday[5].day.maxtemp_c + '°'}C`
      day6_h4.innerHTML = res.data.forecast.forecastday[5].date
      hours_time1_h4.innerHTML = res.data.forecast.forecastday[1].hour[12].time.slice(10)
      hours_time1_img.src = res.data.forecast.forecastday[1].hour[12].condition.icon
      hours_time1_p.innerHTML = `${res.data.forecast.forecastday[1].hour[12].temp_c + '°'}C`
      hours_time2_h4.innerHTML = res.data.forecast.forecastday[1].hour[15].time.slice(10)
      hours_time2_img.src = res.data.forecast.forecastday[1].hour[15].condition.icon
      hours_time2_p.innerHTML = `${res.data.forecast.forecastday[1].hour[18].temp_c + '°'}C`
      hours_time3_h4.innerHTML = res.data.forecast.forecastday[1].hour[18].time.slice(10)
      hours_time3_img.src = res.data.forecast.forecastday[1].hour[18].condition.icon
      hours_time3_p.innerHTML = `${res.data.forecast.forecastday[1].hour[18].temp_c + '°'}C`
      hours_time4_h4.innerHTML = res.data.forecast.forecastday[1].hour[21].time.slice(10)
      hours_time4_img.src = res.data.forecast.forecastday[1].hour[21].condition.icon
      hours_time4_p.innerHTML = `${res.data.forecast.forecastday[1].hour[21].temp_c + '°'}C`
      Sunrise.innerHTML = res.data.forecast.forecastday[0].astro.sunrise
      Sunset.innerHTML = res.data.forecast.forecastday[0].astro.sunset

    })
}
