"""
    Advanced Image Editing (Enhancing Quality)
    Tools: OpenCV
    Description: Enhances the quality of an image using histogram equalization.
"""

import cv2
def imageEnhanceQuality(inputPath: str, outputPath: str):
    # Load an image from file
    image = cv2.imread(inputPath, 0)  # 0 means load as grayscale

    # Apply histogram equalization to improve contrast
    equalized_image = cv2.equalizeHist(image)

    # Save the enhanced image
    cv2.imwrite(outputPath, equalized_image)

# Display the original and enhanced images
# cv2.imshow("Original Image", image)
# cv2.imshow("Enhanced Image", equalized_image)
# cv2.waitKey(0)
# cv2.destroyAllWindows()