# Weather App 🌤️

A visually stunning weather application built with **React** and styled using **Tailwind CSS**. It provides current weather data and a 7-day forecast for any location worldwide, fetched from a weather API. The app supports dark mode for a seamless user experience across different environments.

### 🌐 [Live Demo](https://weather-app-react-two-azure.vercel.app/)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Current Weather**: Get real-time weather data, including temperature, humidity, and wind speed for any location.
- **7-Day Forecast**: Displays detailed weather forecasts with 'feels like' temperature, wind direction, and more.
- **Responsive Design**: Works flawlessly on both desktop and mobile devices.
- **Dark Mode Support**: Fully responsive dark mode to enhance usability in low-light conditions.
- **Dynamic Icons and UI Elements**: Visual elements change based on weather conditions.
- **Modern Design**: Built with a focus on clean and minimalistic user interface.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your_username>/weather-app-react.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd weather-app-react
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

- Type the city name in the search bar to get the current weather and the 7-day forecast.
- Toggle between light and dark mode for optimal visibility in different lighting conditions.
- Scroll through detailed daily weather data to check wind speed, 'feels like' temperature, and other conditions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing modern web apps.
- **Vercel**: Deployment platform for hosting the live app.
- **Weather API**: External API to fetch real-time weather and forecast data.

## API Integration

The app integrates with a third-party weather API to fetch live weather data. To use your own API key, follow these steps:

1. Sign up at [OpenWeather](https://openweathermap.org/) to get your API key.
2. Replace the default API key in your `.env` file:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

## Screenshots

![Weather App - Home](https://via.placeholder.com/600x400)  
*Homepage with current weather data and forecast.*

![Weather App - Dark Mode](https://via.placeholder.com/600x400)  
*Dark Mode view for a more immersive experience.*

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize further by adding additional sections or adjusting any part of this.
