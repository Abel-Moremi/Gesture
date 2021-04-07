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
    loadHandposeFunc: async() => {
      const net = await handpose.load()
      console.log("Handpose model loaded")
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
