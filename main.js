function startClassifying() {
    navigator.mediaDevices.getUserMedia({audio: true})

console.log("ml5 version",ml5.version)

classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3BtHgckf1/model.json", modelLoaded)
}

function modelLoaded(){
    console.log("Teachable Model Loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if(error) {
        console.error(error)
    }
    else {
        console.log(results)
    }
}

