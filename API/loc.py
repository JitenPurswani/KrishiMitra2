# from flask import Flask, request, jsonify
# import requests

# app = Flask(__name__)

# # OpenWeatherMap API Key (Replace with your free API key)
# OPENWEATHER_API_KEY = "af3d5efe10121f671a989140b3170ed7"


# @app.route('/weather', methods=['GET'])
# def get_weather():
#     city = request.args.get('city', 'Mumbai')  # Default to Mumbai

#     # Step 1: Get Lat/Lon from OpenStreetMap API
#     osm_url = f"https://nominatim.openstreetmap.org/search?q={city}&format=json"
#     response = requests.get(osm_url).json()

#     if not response:
#         return jsonify({"error": "City not found"}), 404

#     lat, lon = response[0]['lat'], response[0]['lon']

#     # Step 2: Get Weather Data from OpenWeatherMap
#     weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=af3d5efe10121f671a989140b3170ed7&units=metric"
#     weather_data = requests.get(weather_url).json()

#     return jsonify({
#         "city": city,
#         "latitude": lat,
#         "longitude": lon,
#         "temperature": weather_data["main"]["temp"],
#         "humidity": weather_data["main"]["humidity"],
#         "weather": weather_data["weather"][0]["description"]
#     })

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# import requests

# app = Flask(__name__)

# # OpenWeatherMap API Key (Replace with your free API key)
# OPENWEATHER_API_KEY = "af3d5efe10121f671a989140b3170ed7"

# @app.route('/weather', methods=['GET'])
# def get_weather():
#     city = request.args.get('city', 'Mumbai')  # Default city: Mumbai

#     # Step 1: Get Latitude & Longitude using OpenStreetMap (Nominatim API)
#     osm_url = f"https://nominatim.openstreetmap.org/search?q={city}&format=json"
#     response = requests.get(osm_url).json()

#     if not response:
#         return jsonify({"error": "City not found"}), 404

#     # Extract first location's latitude & longitude
#     lat, lon = response[0]['lat'], response[0]['lon']

#     # Step 2: Get Weather Data from OpenWeatherMap
#     weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}&units=metric"
#     weather_response = requests.get(weather_url).json()

#     if "main" not in weather_response:
#         return jsonify({"error": "Weather data not found"}), 500

#     return jsonify({
#         "city": city,
#         "latitude": lat,
#         "longitude": lon,
#         "temperature": weather_response["main"]["temp"],
#         "humidity": weather_response["main"]["humidity"],
#         "weather": weather_response["weather"][0]["description"]
#     })

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# OpenWeatherMap API Key (Replace with your actual API key)
OPENWEATHER_API_KEY = "af3d5efe10121f671a989140b3170ed7"

# Function to get latitude and longitude from OpenStreetMap (Nominatim API)
def get_lat_long(location):
    url = f"https://nominatim.openstreetmap.org/search?q={location}&format=json"
    response = requests.get(url).json()
    
    if response:
        return response[0]['lat'], response[0]['lon']
    
    return None, None

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city', 'Mumbai')  # Default to Mumbai if no city is provided

    # Get Latitude & Longitude using OpenStreetMap
    lat, lon = get_lat_long(city)

    if not lat or not lon:
        return jsonify({"error": "City not found"}), 404

    # Get Weather Data from OpenWeatherMap
    weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}&units=metric"
    weather_response = requests.get(weather_url).json()

    if "main" not in weather_response:
        return jsonify({"error": "Weather data not found"}), 500

    return jsonify({
        "city": city,
        "latitude": lat,
        "longitude": lon,
        "temperature": weather_response["main"]["temp"],
        "humidity": weather_response["main"]["humidity"],
        "weather": weather_response["weather"][0]["description"]
    })

if __name__ == '__main__':
    app.run(debug=True)
