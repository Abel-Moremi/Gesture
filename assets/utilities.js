// Points for finger
const fingerJoints = {
    thumb: [0, 1, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]
}


// Drqwing function
export const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0){
        // Loop though each prediction
        predictions.forEach((prediction) => {
            // Grab landmarks
            const landmarks = prediction.landmarks;

            // Loop though fingers
            for (let j=0; j<Object.keys(fingerJoints).length; j++){
                let finger = Object.keys(fingerJoints)[j]

                //Loop though pairs of joints
                for (let k=0; k < fingerJoints[finger].length -1; k++){
                    // Get pairds of joints
                    const firstJointIndex = fingerJoints[finger][k]
                    const secondJointIndex = fingerJoints[finger][k+1]

                    // Draw path
                    ctx.beginPath()
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1]
                    )
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1]
                    )
                    ctx.strokeStyle = "plum"
                    ctx.lineWidth = 4
                    ctx.stroke();
                }
            }

            // Loop though landmarks and draw them
            for (let i=0; i<landmarks.length; i++){
                // Get x point
                const x = landmarks[i][0]
                // Get y point
                const y = landmarks[i][1]
                // Start drawing
                ctx.beginPath()
                ctx.arc(x, y, 5, 0, 3 * Math.PI)

                // set line color
                ctx.fillStyle = "indigo"
                ctx.fill()
            }
        })
    }
}