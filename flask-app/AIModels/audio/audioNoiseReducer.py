"""
    Audio Noise Reduction
    Tools: Pydub, Noisereduce
    Description: Reduces noise in an audio file.

"""

from pydub import AudioSegment
import noisereduce as nr
import numpy as np


def audioNoiseReducer(audioPath: str, outputPath: str):

    # Load an audio file
    # audio = AudioSegment.from_file("noisy_audio.wav")
    audio = AudioSegment.from_file(audioPath)
    samples = np.array(audio.get_array_of_samples(), dtype=np.float32)

    # Perform noise reduction
    reduced_noise = nr.reduce_noise(y=samples, sr=audio.frame_rate)

    # Convert the reduced noise array back to an audio segment
    reduced_noise_audio = AudioSegment(
        reduced_noise.tobytes(),
        frame_rate=audio.frame_rate,
        sample_width=samples.dtype.itemsize,
        channels=audio.channels,
    )

    # Save the noise-reduced audio
    reduced_noise_audio.export(outputPath, format="wav")

    return reduced_noise_audio
