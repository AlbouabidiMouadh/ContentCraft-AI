"""
    Image Editing
    Tools: PIL (Python Imaging Library)
    Description: Performs basic image editing tasks such as cropping and resizing.

"""

from PIL import Image


def imageResize(inputPath: str, outputPath: str, width: int, height: int):
    # change the input image
    # Open an image file
    with Image.open(inputPath) as img:

        # Resize the cropped image to 200x200 pixels
        resized_img = img.resize((width, height))

        # Save the edited image to a new file
        resized_img.save(outputPath)
