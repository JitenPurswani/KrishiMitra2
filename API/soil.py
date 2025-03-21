import requests
import json

# Define latitude and longitude
latitude = 24.8467
longitude= 78.0583


# SoilGrids API URL
url = f"https://rest.isric.org/soilgrids/v2.0/properties/query?lat={latitude}&lon={longitude}"

# Send GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    properties = ["phh2o", "ocd", "sand", "clay", "cec"]  # Organic Carbon, Sand, Clay, CEC

    # Extract and print available properties
    print("\n🔍 **Available Soil Data for the Given Location:**\n")
    for prop in properties:
        if prop in data["properties"]:
            print(f"✅ {prop.upper()} data found!")
            for depth, value in data["properties"][prop]["values"].items():
                print(f"  {depth} cm: {value}")
            print("-" * 40)
        else:
            print(f"❌ {prop.upper()} data NOT available.")

else:
    print(f"❌ Failed to fetch data. Status code: {response.status_code}")