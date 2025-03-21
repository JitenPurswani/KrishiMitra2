from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import time

# Initialize WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in headless mode (optional)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Open eNAM website
url = "https://enam.gov.in/web/dashboard/trade-data"  # Update with correct URL
driver.get(url)
time.sleep(5)  # Wait for full page load

# ✅ Locate dropdown using the correct class
try:
    dropdown = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//select[contains(@class, 'mandi-pagi')]"))
    )
    select = Select(dropdown)
    page_numbers = [option.text.strip() for option in select.options]  # Get all page numbers

    all_data = []

    # Loop through each page
    for page_number in page_numbers:
        print(f"Scraping page {page_number}...")
        
        dropdown = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//select[contains(@class, 'mandi-pagi')]"))
        )
        select = Select(dropdown)
        select.select_by_visible_text(page_number)  # Select the page
        time.sleep(5)  # Wait for data to load

        # Extract table headers
        headers = [th.text.strip() for th in driver.find_elements(By.XPATH, "//table/thead/tr/th")]

        # Extract table rows
        rows = driver.find_elements(By.XPATH, "//table/tbody/tr")

        for row in rows:
            columns = row.find_elements(By.TAG_NAME, "td")
            row_data = [col.text.strip() for col in columns]

            # Ensure row has the correct number of columns
            if len(row_data) == len(headers):
                all_data.append(row_data)

    # Convert to DataFrame and save to CSV
    df = pd.DataFrame(all_data, columns=headers)
    df.to_csv("enam_market_data.csv", index=False)

    print("✅ Scraping complete! Data saved as `enam_market_data.csv`")

except Exception as e:
    print(f"❌ Error: {e}")

finally:
    driver.quit()
