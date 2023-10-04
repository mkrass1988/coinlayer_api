const access_key = '65da27fe908ce2320aae5735089d4e45';

const liveData = async () => {
    let month = document.getElementById("month-dropdown")
    let month_value = month.options[month.selectedIndex].value

    let day = document.getElementById("day-dropdown")
    let day_value = day.options[day.selectedIndex].value

    let year = document.getElementById("year-dropdown")
    let year_value = year.options[year.selectedIndex].value

    let coin = document.getElementById("coin-dropdown")
    let coin_value = coin.options[coin.selectedIndex].value

    const result = await fetch(`http://api.coinlayer.com/api/${year_value}-${month_value}-${day_value}?access_key=${access_key}&symbols=${coin_value}`)
    const data = await result.json();
    let value = Object.values(data.rates)

    let cryptovalue = document.getElementById("crypto-value")

    cryptovalue.innerHTML = `The price of ${coin_value} on ${month_value}/${day_value}/${year_value} was ${value}`

}