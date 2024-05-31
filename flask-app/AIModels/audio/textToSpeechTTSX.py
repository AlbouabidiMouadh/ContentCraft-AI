"""
    Speech Synthesis
    Tools: pyttsx3
    Description: Converts text to speech using a local TTS engine.

"""

import pyttsx3


def textToSpeechTTSX(text: str, outputPath: str):

    # Initialize the TTS engine
    engine = pyttsx3.init()

    # Define the text to convert to speech
    # text = "Hello, this is a text to speech conversion."

    # Use the TTS engine to say the text
    engine.say(text)

    # Save the speech to an audio file
    engine.save_to_file(text, outputPath)

    # Run the TTS engine
    engine.runAndWait()
