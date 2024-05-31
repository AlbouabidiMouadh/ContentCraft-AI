from app.images import bp
from flask import request, send_file
from AIModels.images.BackgroundRemoval import BackgroundRemoval
from AIModels.images.BWtoColored import BWtoColored
# from AIModels.images.imageCaptionGenerator import imageCaptionGenerator
from AIModels.images.imageEnhanceQuality import imageEnhanceQuality
from AIModels.images.imageEnhanceQualityPIL import imageEnhanceQualityPIL
from AIModels.images.imageCrop import imageCrop
from AIModels.images.imageResize import imageResize
# from AIModels.images.imageArtisticStyle
import os
import logging
from werkzeug.utils import secure_filename
from PIL import Image

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Paths for input and output images
input_dir = "./app/images/input"
output_dir = "./app/images/output"

os.makedirs(input_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

@bp.route("/images")
def index():
    return "this is the main route of the image apps"

@bp.route("/images/imageEnhanceQualityPIL", methods=["POST"])
def enhance_image_quality():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Enhancing image quality from {input_path} to {output_path}")
    imageEnhanceQualityPIL(inputPath=input_path, outputPath=output_path)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

@bp.route("/images/backgroundRemoval", methods=["POST"])
def background_removal():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Removing background from {input_path} to {output_path}")
    BackgroundRemoval(inputPath=input_path, outputPath=output_path)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

@bp.route("/images/BWtoColored", methods=["POST"])
def bw_to_colored():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Converting BW to colored from {input_path} to {output_path}")
    BWtoColored(inputPath=input_path, outputPath=output_path)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

@bp.route("/images/imageEnhanceQuality", methods=["POST"])
def image_enhance_quality():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Enhancing image quality from {input_path} to {output_path}")
    imageEnhanceQuality(inputPath=input_path, outputPath=output_path)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

@bp.route("/images/imageResize", methods=["POST"])
def image_resize():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    width = int(request.form.get("width"))
    height = int(request.form.get("height"))
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Resizing image from {input_path} to {output_path} with width {width} and height {height}")
    imageResize(inputPath=input_path, outputPath=output_path, width=width, height=height)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

@bp.route("/images/imageCrop", methods=["POST"])
def image_crop():
    image = request.files["image"]
    filename = secure_filename(image.filename)
    left = int(request.form.get("left"))
    upper = int(request.form.get("upper"))
    right = int(request.form.get("right"))
    lower = int(request.form.get("lower"))
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, "output.png")

    logging.debug(f"Saving uploaded image to {input_path}")
    image.save(input_path)

    logging.debug(f"Cropping image from {input_path} to {output_path} with box ({left}, {upper}, {right}, {lower})")
    imageCrop(inputPath=input_path, outputPath=output_path, left=left, upper=upper, right=right, lower=lower)

    # Determine the MIME type of the output image
    output_image = Image.open(output_path)
    mime_type = Image.MIME[output_image.format]

    return send_file(
        os.path.join("./images/output", "output.png"),
        mimetype=mime_type,
        as_attachment=True,
        download_name=f"output.{output_image.format.lower()}"
    )

# Uncomment and implement other routes as needed

# @bp.route("/images/imageCaptionGenerator", methods=["POST"])
# def imageCaptionGenerator():
#     image = request.files["image"]
#     image.save(imageFilesInputPath)
#     caption = imageCaptionGenerator(inputPath=imageFilesOutputPath)
#     return caption

# @bp.route("/images/imageArtisticStyle", methods=["POST"])
# def imageArtisticStyle():
#     image = request.files["image"]
#     style_image = request.files["style_image"]
#     image.save(imageFilesInputPath)
#     style_image.save(styleImageFilesInputPath)
#     imageArtisticStyle(
#         inputPath=imageFilesOutputPath,
#         styleInputPath=styleImageFilesInputPath,
#         outputPath=imageFilesOutputPath,
#     )
#     return send_file(
#         imageFilesOutputPath,
#         mimetype="image/png",
#         as_attachment=True,
#         attachment_filename="output.png",
#     )
