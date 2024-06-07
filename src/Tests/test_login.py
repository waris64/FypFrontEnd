from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest

class LoginTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()  # You can use any other WebDriver like Firefox, Edge, etc.
        self.driver.get("http://localhost:3000/login")  # Replace with the URL where your app is running

    def test_login_with_valid_credentials(self):
        driver = self.driver
        email_field = driver.find_element(By.ID, 'email')
        password_field = driver.find_element(By.ID, 'password')

        email_field.send_keys('test@example.com')
        password_field.send_keys('password123')

        login_button = driver.find_element(By.XPATH, "//button[text()='Log In']")
        login_button.click()

        # Wait for navigation to the new page or some element that indicates successful login
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//h1[text()='Welcome']"))  # Replace with an actual element
            )
        except:
            self.fail("Login failed with valid credentials")

    def test_login_with_invalid_credentials(self):
        driver = self.driver
        email_field = driver.find_element(By.ID, 'email')
        password_field = driver.find_element(By.ID, 'password')

        email_field.send_keys('')
        password_field.send_keys('')

        login_button = driver.find_element(By.XPATH, "//button[text()='Log In']")
        login_button.click()

        # Check for the presence of the error message
        error_message = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//*[text()='Please fill all the fields']"))
        )
        self.assertIsNotNone(error_message)

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
