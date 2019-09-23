from starlette.applications import Starlette
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from starlette.config import Config
import uvicorn
import os
from fastai import *
from fastai.vision import *
import urllib

app = Starlette(debug=True)

app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['*'], allow_methods=['*'])

### EDIT CODE BELOW ###

answer_question_1 = """ 
Answered question 1 here
"""

answer_question_2 = """ 
Answered question 2 here
"""

answer_question_3 = """ 
Answered question 3 here
"""

## Replace none with your model
pred_model = None 

@app.route("/api/answers_to_hw", methods=["GET"])
async def answers_to_hw(request):
    return JSONResponse([answer_question_1, answer_question_2, answer_question_3])

@app.route("/api/class_list", methods=["GET"])
async def class_list(request):
    return JSONResponse([ "Replace this array with a list of your classes extracted from your model" ])

@app.route("/api/classify", methods=["POST"])
async def classify_url(request):
    body = await request.json()
    url_to_predict = body["url"]

    ## Make your prediction and store it in the preds variable

    return JSONResponse({
        "predictions": preds,
    })

### EDIT CODE ABOVE ###

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=int(os.environ['PORT']))
