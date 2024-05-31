"""
    Automatic Background Removal
    Tools: Remove.bg API
    Description: Removes the background from an image.
"""

import requests

# Define the Remove.bg API URL and your API key
url = "https://api.remove.bg/v1.0/removebg"
api_key = "your-api-key"


def BackgroundRemoval(inputPath: str, outputPath: str):

    # Open the image file in binary mode
    with open(inputPath, "rb") as image_file:
        # Send the image to the Remove.bg API for background removal
        response = requests.post(
            url,
            files={"image_file": image_file},
            data={"size": "auto"},
            headers={"X-Api-Key": api_key},
        )

    # Save the image with the background removed
    with open(outputPath, "wb") as out_file:
        out_file.write(response.content)
