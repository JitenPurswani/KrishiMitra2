import requests

# Replace with your actual API key
API_KEY = "e548e38119a114684285c4c7d8efddc7"

# Location for weather data (City, Country Code)
location = "Mumbai,IN"

# OpenWeatherMap API Endpoint
url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}&units=metric"

# Send the API request
response = requests.get(url)
data = response.json()  # Convert response to JSON

# Debug: Print full API response (in case of errors)
print("API Response:", data)

# Extract and display data if response is valid
if response.status_code == 200:
    temperature = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    wind_speed = data["wind"]["speed"]
    cloud_cover = data["clouds"]["all"]
    description = data["weather"][0]["description"]

    print(f"\nWeather in {location}:")
    print(f"🌡 Temperature: {temperature}°C")
    print(f"💧 Humidity: {humidity}%")
    print(f"🌬 Wind Speed: {wind_speed} m/s")
    print(f"☁ Cloud Cover: {cloud_cover}%")
    print(f"🌤 Condition: {description.capitalize()}")
else:
    print("❌ Error fetching weather data:", data.get("message", "Unknown error"))
