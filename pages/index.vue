<template>
  <div>
    <client-only>
      <video autoplay="true" playsinline="true" class="webcam" id="video" ref="video"></video>
      <canvas ref="canvasRef" class="webcam" />
    </client-only>
  </div>
</template>

<script>
import tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'

export default {
  methods: {
    webcamFunc() {
      this.video = this.$refs.video;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
          console.log(stream)
          video.srcObject = stream;
        });
      }
    },
    async detectFunc(net) {

      const videoRef = this.$refs.video
      const canvasRef = this.$refs.canvasRef

      console.log(videoRef.currentSrc)

      // Check data is avalable
      if( typeof videoRef.currentSrc !== "undefined" &&
          videoRef.currentSrc !== null &&
          videoRef.readyState === 4
        ){
          // Get video properties
          const video = videoRef
          const videoWidth = videoRef.Width
          const videoHeight = videoRef.height

          // Set video height  and width
          videoRef.width = videoWidth
          videoRef.height = videoHeight

          // Set canvas height  and width
          canvasRef.width = videoWidth
          canvasRef.height = videoHeight

          // Make Detection
          const hand = await net.estimateHands(video);
          console.log(hand)

          // Draw mesh
        }
      
    },
    async loadHandposeFunc(){
      const net = await handpose.load()
      console.log("Handpose model loaded")
      
      // loop and detect hands
      setInterval(() => {
        try {
          this.detectFunc(net)
        }
        catch(err) {
          console.log(err)
        }
      }, 100)
    }
  },
  mounted() {
		this.webcamFunc()
    this.loadHandposeFunc()
	}
}
</script>
<style>
  .webcam{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9;
    width: 640px;
    height: 480px;
  }
</style>
