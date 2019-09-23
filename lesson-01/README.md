# Homework Week 1

## Assignment details
Watch FastAI lesson - https://course.fast.ai/videos/?lesson=1
Once you've watched the videos and have a good feeling for what was done do the following:
1.  Start a new notebook
2.  Import the FastAI libs and enter the notebook magics at the top
3.  Using what you've learned train a ResNet34 on the full MNIST dataset (URLs.MNIST)

## Grading
To successfully complete the assignment you will need to:
1.  Demonstrate a minimum accuracy of 97% (if you're using accuracy in your metrics display, it should be above 0.97, if error_rate, it should be below 0.03)
2.  Plot a confusion matrix with a figure size of (10,10) and a dpi of 60
3.  Plot your top 6 losses
4.  Post a link to your notebook in #lesson-1-hw-turn-in on Discord

Extra Credit:

Explain what the confusion matrix and the top losses are showing you in your own words.

## Tips for this week
- you will need to add "train='training', valid='testing'" to your from_folder call
- DO NOT COPY AND PASTE from Jeremy's notebook to your own.  Even if you're entering the EXACT SAME THING there is value in typing it yourself.  It will stick with you MUCH MUCH better.