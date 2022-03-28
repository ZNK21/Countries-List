async function getCountries() {
    
    var content = document.getElementById("data")
    
    try {
        var res = await fetch("https://restcountries.com/v3.1/all");
        var data = await res.json();

        for (i=0; i <= 250; i++){
        content.innerHTML += `<div class="${i}" style="width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.44);">
        <img/ style= 'width: 300px; border-radius: 10px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;' src=${data[i].flags.svg}>
        <p style="font-size: 35px; font-weight: 600; margin: 0px; padding-top: 10px;"><span>${data[i].name.common}</span></p>
        <p style="margin: 0px; padding-top: 10px; font-size: 20px;"><span style="font-weight: 600;">Region:</span>
        <span>${data[i].region}</span>
        <p style="margin: 0px; padding-top: 10px; font-size: 20px; padding-bottom: 10px;">
        <span style="font-weight: 600;">Capital:</span>
        <span>${data[i].capital[0]}</span>
        </div>`
        }

    } catch (err) {
        console.log(err)
    }

}

getCountries();