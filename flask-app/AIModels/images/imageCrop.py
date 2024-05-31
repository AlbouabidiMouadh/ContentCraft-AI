"""
    Image Editing
    Tools: PIL (Python Imaging Library)
    Description: Performs basic image editing tasks such as cropping and resizing.

"""

from PIL import Image


def imageCrop(
    inputPath: str, outputPath: str, left: int, upper: int, right: int, lower: int
):

    # Open an image file
    with Image.open(inputPath) as img:
        # Crop the image to a specified box (left, upper, right, lower)
        cropped_img = img.crop((left, upper, right, lower))

        # Save the edited image to a new file
        cropped_img.save(outputPath)
