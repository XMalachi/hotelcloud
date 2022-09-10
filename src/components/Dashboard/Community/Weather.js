import React, { useEffect, useState } from 'react'
import styles from './Weather.module.css'
import axios from 'axios'


function Weather() {
    const [conditions, setConditions] = useState([])
    const [temperature, setTemperature] = useState()
    const [weather, setWeather] = useState([]) 

    useEffect(()=> {
        fetchweather()
    }, [])

    const fetchweather= async() => { 
        const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=6.4550575&lon=3.3941795&appid=9b11a19908a4dac0f8fff3e7c17e7918')
        console.log("the data",data)
        const result = data.data
        setConditions(result)

        let convertedTemp = result.main.temp - 273.15
        setTemperature(convertedTemp.toFixed(2))
        setWeather(result.weather)
        // console.log("test data", data.data)
    }
    // console.log(conditions)
    // console.log(temperature)
    // console.log(weather)
  return (
    <div className={styles.weatherContainer}>

    <h3 className={styles.weatherContainerHeader}>WEATHER</h3>

    <div className={styles.weatherContainerInner}>
        <div className={styles.location}>
                <h3>{conditions.name}</h3>
            </div>
            <div className={styles.temp}>
                {temperature}&deg;C
            </div>

            <div className={styles.weatherConditionContainer}>
                {weather.map((type) => (
                    <div key={type.id} className={styles.weatherCondition}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${type.icon}@2x.png`} alt={type.main}/>
                        </div>
                        <div>
                            {type.description}
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </div>
            
    </div>
  )
}

export default Weather