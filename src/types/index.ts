export interface optionType {
  name: string
  country: string
  lat: number
  lon: number
}

export interface forecastType {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          description: string
          icon: string
        }
      ]
      wind: {
        speed: number
        deg: number
        gust: number
      }
      clouds: {
        all: number
      }
      visibilty: number
      pop: number
    }
  ]
}
