"""
    Photo Enhancement
    Tools: PIL (Python Imaging Library)
    Description: Enhances the quality of a photo.

"""

from PIL import Image, ImageEnhance

def imageEnhanceQualityPIL(inputPath: str, outputPath: str):
    # Open an image file
    with Image.open(inputPath) as img:
        # Enhance the color of the image
        enhancer = ImageEnhance.Color(img)
        enhanced_img = enhancer.enhance(2.0)  # Increase color by a factor of 2

        # Save the enhanced image to a new file
        enhanced_img.save(outputPath)
