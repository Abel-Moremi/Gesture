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
import handpose from '@tensorflow-models/handpose'

export default {
   mounted: function() {
		this.video = this.$refs.video;
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
				console.log(stream)
				video.srcObject = stream;
				this.video.play();
			});
		}
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
