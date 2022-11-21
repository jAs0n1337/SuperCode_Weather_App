fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=b319a77fb8e4fe01a5b2b5cbdab2669f&units=metric")
    .then(response => response.json())
    .then(data => {

        // Zugriff auf Objekteigenschaften
        const city = data.name;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        // const rain1h = data.rain["1h"];
        const cloudsAll = data.clouds.all;
        const windSpeed = data.wind.speed;
        const windDeg = data.wind.deg;
        console.log(icon);


        const date = new Date();
        const localTime = date.toLocaleDateString("gb-GB");

        const newObject = {
            lacalTime: date,
            windSpeed: `${windSpeed} m/s`,
            description: description,
            temp: temp,
            pressure: pressure,
            icon: icon,
            humidity: humidity,
            cloudsAll: cloudsAll,
            windDeg: windDeg,
        };

        // Elemente erstellen
        const containerElement = document.createElement("div");
        const HeadingElement = document.createElement("h1");
        const imgIcon = document.createElement("img");
        const pTempElement = document.createElement("p");
        const pElement = document.createElement("p");
        const table = document.createElement("table");


        HeadingElement.innerText = `Weather in ${city}, GB`;
        imgIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        pTempElement.innerText = temp + " °C";

        containerElement.appendChild(HeadingElement);
        containerElement.appendChild(imgIcon);
        containerElement.appendChild(pTempElement);
        containerElement.appendChild(pTempElement);
        containerElement.appendChild(pElement);
        containerElement.appendChild(table);

        // Tabelle generieren
        for (const property in newObject) {
            const tableTr = document.createElement("tr");
            const tableTd = document.createElement("td");
            const tableTd1 = document.createElement("td");

            tableTd.innerText = property;
            tableTd1.innerText = newObject[property];

            tableTr.appendChild(tableTd);
            tableTr.appendChild(tableTd1);
            table.appendChild(tableTr);
        }

        document.body.appendChild(containerElement);

    });