"""
    Video Background Blur
    Tools: OpenCV
    Description: Blurs the background of a video.
"""

import cv2


def videoBackgroundBlur(inputPath: str, outputPath: str):
    # Load the video file
    cap = cv2.VideoCapture(inputPath)

    # Create a background subtractor
    back_sub = cv2.createBackgroundSubtractorMOG2()

    # Define the codec and create VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*"XVID")
    out = cv2.VideoWriter(outputPath, fourcc, 20.0, (640, 480))

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Apply the background subtractor
        fg_mask = back_sub.apply(frame)

        # Blur the background
        blurred_frame = cv2.GaussianBlur(frame, (21, 21), 0)
        frame[fg_mask == 0] = blurred_frame[fg_mask == 0]

        # Write the frame to the output video
        out.write(frame)

        # Display the frame
        cv2.imshow("Frame", frame)

        # Break the loop on 'q' key press
        if cv2.waitKey(30) & 0xFF == ord("q"):
            break

    # Release the resources
    cap.release()
    out.release()
    cv2.destroyAllWindows()
