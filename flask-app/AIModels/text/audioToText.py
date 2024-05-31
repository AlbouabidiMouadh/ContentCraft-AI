"""
    Basic Speech Recognition
    Tools: SpeechRecognition
    Description: Converts speech from an audio file to text.
"""

import speech_recognition as sr

def audioToText(inputPath: str):
    # Initialize the recognizer
    recognizer = sr.Recognizer()

    # Load the audio file
    audio_file = sr.AudioFile(inputPath)

    # Recognize the speech
    with audio_file as source:
        audio_data = recognizer.record(source)
        text = recognizer.recognize_google(audio_data)

    # Print the recognized text
    print("Recognized Text:", text)
    return text