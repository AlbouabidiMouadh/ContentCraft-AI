"""
    Video Captioning
    Tools: OpenCV, Google Cloud Video Intelligence API
    Description: Adds captions to a video based on spoken content.
"""

import io
import os
# from google.cloud import videointelligence_v1p3beta1 as videointelligence

# # Set up Google Cloud Video Intelligence client
# client = videointelligence.VideoIntelligenceServiceClient()


def videoCaptionGenerator(inputPath: str):

    # # Path to the video file
    # video_path = "input_video.mp4"

    # # Load the video file
    # with io.open(inputPath, "rb") as video_file:
    #     input_content = video_file.read()

    # # Request video annotation
    # features = [videointelligence.Feature.SPEECH_TRANSCRIPTION]
    # operation = client.annotate_video(features=features, input_content=input_content)
    # print("Processing video for speech transcription...")

    # # Get the result
    # result = operation.result(timeout=600)
    # transcription = result.annotation_results[0].speech_transcriptions

    # # Extract transcription text and timestamps
    # for speech_transcription in transcription:
    #     for alternative in speech_transcription.alternatives:
    #         print("Transcript: {}".format(alternative.transcript))
    #         print("Confidence: {}".format(alternative.confidence))

    #         for word_info in alternative.words:
    #             start_time = word_info.start_time
    #             end_time = word_info.end_time
    #             word = word_info.word
    #             print(
    #                 "Word: {}, start_time: {}, end_time: {}".format(
    #                     word,
    #                     start_time.seconds + start_time.nanos * 1e-9,
    #                     end_time.seconds + end_time.nanos * 1e-9,
    #                 )
    #             )
    return