from app.videos import bp
from flask import request, send_file
from AIModels.videos.videoBackgroundBlur import videoBackgroundBlur
from AIModels.videos.videoCaptionGenerator import videoCaptionGenerator
import os
import logging
from werkzeug.utils import secure_filename
from moviepy.editor import VideoFileClip

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Paths for input and output videos
input_dir = "./app/videos/input"
output_dir = "./app/videos/output"

os.makedirs(input_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

def convert_to_mp4(input_path, output_path):
    video = VideoFileClip(input_path)
    video.write_videofile(output_path, codec="libx264", audio_codec="aac")
    video.close()

@bp.route("/videos")
def index():
    return "This is the main blueprint of videos"

@bp.route("/videos/videoBackgroundBlur", methods=["POST"])
def background_blur():
    video = request.files["video"]
    filename = secure_filename(video.filename)
    input_path = os.path.join(input_dir, filename)
    temp_mp4_path = os.path.join(input_dir, "temp.mp4")
    output_path = os.path.join(output_dir, "output_video.mp4")

    logging.debug(f"Saving uploaded video to {input_path}")
    video.save(input_path)

    logging.debug(f"Converting video to MP4 format at {temp_mp4_path}")
    convert_to_mp4(input_path, temp_mp4_path)

    logging.debug(f"Blurring background of video from {temp_mp4_path} to {output_path}")
    videoBackgroundBlur(temp_mp4_path, output_path)

    return send_file(
        os.path.join("./videos/output", "output_video.mp4"),
        mimetype="video/mp4",
        as_attachment=True,
        download_name="output_video.mp4"
    )

@bp.route("/videos/videoCaptionGenerator", methods=["POST"])
def caption_generator():
    video = request.files["video"]
    filename = secure_filename(video.filename)
    input_path = os.path.join(input_dir, filename)
    temp_mp4_path = os.path.join(input_dir, "temp.mp4")
    output_path = os.path.join(output_dir, "output_video.mp4")

    logging.debug(f"Saving uploaded video to {input_path}")
    video.save(input_path)

    logging.debug(f"Converting video to MP4 format at {temp_mp4_path}")
    convert_to_mp4(input_path, temp_mp4_path)

    logging.debug(f"Generating captions for video from {temp_mp4_path} to {output_path}")
    videoCaptionGenerator(temp_mp4_path, output_path)

    return send_file(
        os.path.join("./videos/output", "output_video.mp4"),
        mimetype="video/mp4",
        as_attachment=True,
        download_name="output_video.mp4"
    )

# Uncomment and implement other routes as needed
