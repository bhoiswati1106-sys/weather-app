# 🌤️ Weather App

A simple weather app where users can search any city and see its current weather.

🔗 **Live Demo:** https://bhoiswati1106-sys.github.io/weather-app/


![Weather App Screenshot](docs/screenshot.png)

## ✨ Features

- Search weather by city name
- Shows temperature, humidity and wind speed
- Fetches live data from a weather API
- Shows an error message for invalid city names

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API with async/await

## 📁 Project Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
├── docs/
│   └── screenshot.png
└── README.md
```

> Update the file names above to match your repository.

## 🚀 How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/bhoiswati1106-sys/[your-repo-name].git
   ```
2. Open the project folder
   ```bash
   cd [your-repo-name]
   ```
3. Add your own API key in `script.js`
   ```js
   const apiKey = "YOUR_API_KEY";
   ```
4. Open `index.html` in your browser.

> Never share a private API key publicly. Use your own free key from the weather API provider.

## 📚 What I Learned

- Calling a REST API with the Fetch API and async/await
- Reading and displaying JSON data on the page
- Handling errors when the city is not found or the request fails
- Updating the UI dynamically with DOM manipulation

## 🔮 Future Improvements

- Add weather icons and a short weather description
- Add a loading indicator while data is being fetched
- Support search with the Enter key
- Show a multi-day forecast

## 👩‍💻 Author

**Swati Bhoi** — BCA Student & Frontend Web Developer
