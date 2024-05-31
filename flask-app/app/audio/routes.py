from app.audio import bp
from flask import request, send_file, jsonify
from AIModels.audio.audioNoiseReducer import audioNoiseReducer
from AIModels.audio.textToSpeechGoogle import textToSpeechGoogle
from AIModels.audio.textToSpeechTTSX import textToSpeechTTSX
import os
import logging
from werkzeug.utils import secure_filename
from pydub import AudioSegment

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Paths for input and output files
input_dir = "./app/audio/input"
output_dir = "./app/audio/output"
os.makedirs(input_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

def convert_to_wav(input_path, output_path):
    audio = AudioSegment.from_file(input_path)
    audio.export(output_path, format="wav")

@bp.route("/audio")
def index():
    return "This is The Main Blueprint of audio"

@bp.route("/audio/audio-noise-reducer", methods=["POST"])
def handle_audio_noise_reducer():
    audio = request.files["audio"]
    filename = secure_filename(audio.filename)
    input_path = os.path.join(input_dir, filename)
    temp_wav_path = os.path.join(input_dir, "temp.wav")
    output_path = os.path.join(output_dir, "output.wav")

    logging.debug(f"Saving uploaded audio to {input_path}")
    audio.save(input_path)

    logging.debug(f"Converting {input_path} to WAV format at {temp_wav_path}")
    convert_to_wav(input_path, temp_wav_path)

    logging.debug(f"Reducing noise from {temp_wav_path} to {output_path}")
    audioNoiseReducer(audioPath=temp_wav_path, outputPath=output_path)

    return send_file(
        os.path.join("./audio/output", "output.wav"),
        mimetype="audio/wav",
        as_attachment=True,
        download_name="output.wav",
    )

@bp.route("/audio/text-to-speech-google", methods=["POST"])
def handle_text_to_speech_google():
    text_input = request.json.get('text', '')
    if not text_input:
        return jsonify({"error": "No text provided"}), 400

    output_path = os.path.join(output_dir, "output.wav")

    logging.debug(f"Converting text to speech (Google) for text: {text_input}")
    textToSpeechGoogle(text=text_input, outputPath=output_path)

    return send_file(
        os.path.join("./audio/output", "output.wav") ,
        mimetype="audio/wav",
        as_attachment=True,
        download_name="output.wav",
    )

@bp.route("/audio/text-to-speech-ttsx", methods=["POST"])
def handle_text_to_speech_ttsx():
    text_input = request.json.get('text', '')
    if not text_input:
        return jsonify({"error": "No text provided"}), 400

    output_path = os.path.join(output_dir, "output.wav")

    logging.debug(f"Converting text to speech (TTSX) for text: {text_input}")
    textToSpeechTTSX(text=text_input, outputPath=output_path)

    return send_file(
        os.path.join("./audio/output", "output.wav") ,
        mimetype="audio/wav",
        as_attachment=True,
        download_name="output.wav",
    )
