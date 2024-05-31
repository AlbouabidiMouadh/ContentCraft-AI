"""
    Image Colorization
    Tools: OpenCV, DeepAI API
    Description: Colorizes a grayscale image.
"""

import requests
import cv2


def BWtoColored(inputPath: str, outputPath: str):

    # Load a grayscale image
    image = cv2.imread(inputPath, cv2.IMREAD_GRAYSCALE)

    # Save the grayscale image as PNG (DeepAI API requires PNG format)
    cv2.imwrite("grayscale_image.png", image)

    # Define the DeepAI API URL and your API key
    url = "https://api.deepai.org/api/colorizer"
    api_key = "your-api-key"

    # Open the image file in binary mode
    with open("grayscale_image.png", "rb") as image_file:
        # Send the image to the DeepAI API for colorization
        response = requests.post(
            url, files={"image": image_file}, headers={"api-key": api_key}
        )

    # Get the colorized image URL from the response
    colorized_image_url = response.json()["output_url"]

    # Print the URL of the colorized image
    print(f"Colorized image URL: {colorized_image_url}")
