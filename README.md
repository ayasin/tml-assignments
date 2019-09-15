# Homework 2

## Assignment Details

In this assignment you will be required to
* Create a dataset consisting of at least 4 classes
* Train a classifier to at least 80% accuracy
* Deploy your classifier to [Heroku](heroku.com).  Instructions on setting up an account and deploying can be found there.  **YOU DO NOT NEED A PAID ACCOUNT FOR THIS, THE FREE ACCOUNT IS FINE**
    * Your app should report the classes you support at `/api/class_list`.  This should be a `GET` endpoint.
    * Your app should accept a URL in a post request with an image and respond with a classification at `/api/classify`

Your classifier must be a "fine grained" classifier.  Think cat breeds, not cat vs elephant.

In addition to the classification, you will need to submit answers to 3 questions (these answers should be added to the app.py in the appropriate spot...see below):
* How can you detect overfitting or underfitting?
* Describe how gradient decent works.
* What is the goal of regression?

### Grading

I will use the code in `js/build` to exersise your app (see below).  I will try a few images against your classifier.  You must correctly predict the class more often than not to pass.  I will also look at your question answers via your app.

## Tips for this week

In this folder, you'll find 2 other folders, `js` and `py`.  The `js` folder is here so you can test your code, you do not need to modify the JS code at all for this assignment.  The JS application is also how I will test your code.  In the `py` folder, you'll find several files.  Most of these are related to deploying to Heroku.  You will need to edit the `app.py` file to add your custom code to serve your model.  Some of the code has been written for you. If you make changes outside of the `## EDIT CODE BELOW` and `## EDIT CODE ABOVE` marks, you will likely break the app and it will not run properly on heroku.

In the app.py you will find three spots for you to fill in your answers to the assignment questions.  Delete the line `Answered question x here` and replace it with your answer.  Feel free to use multiple lines, the `"""` is a multi line string marker.

If you don't have `node` installed or are unfamiliar with JS development, you can serve the JS app by going into the `js/build` folder and typing `python -m http.server`.  After this open a browser window to `localhost:8000`

By default the JS page will connect to a sample I've put up at `truck-classifier.heroku.com`.  To have it use your app, just enter the path of your server into the text box with no trailing `/`.  The URL must be fully quaified (i.e. start with `http://` or `https://`)

You can test your code locally before deploying to Heroku by going into the `py` directory and running `python app.py`, you can also just test it on Heroku if you prefer.

If you receive an error from Heroku that says `no web process running` run the following command: `heroku ps:scale web=1`
