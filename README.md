<br />
<p align="center">
  <h1 align="center"> GESTURE</h1>

  <p align="center">
    Realtime AI handpose estimation in Nuxt using TensorflowJS
    <br />
    <a href="https://github.com/Abel-Moremi/Gesture/issues">Report Bug</a>
    ·
    <a href="https://github.com/Abel-Moremi/Gesture/issues">Request Feature</a>
  </p>
</p>

It uses the webcam to predict 21 landmarks(the dots in the picture below) in one's hand. It then connects the dots to form the mesh, all this is done in realtime. Its pretty cool.

![alt text](https://github.com/Abel-Moremi/Gesture/blob/master/screen_shots/screen-shot-01.png)



### Built With

* [Nuxt](https://nuxtjs.org/)
* [HandPose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) a TensorflowJS Model for realtime hand estimation.
* Javascript

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/abel-moremi/gesture.git
   ```
2. Install dependecies
   ```sh
   npm install
   ```
   
### Build step

1 serve with hot reload at localhost:3000
```sh
$ npm run dev
```

2 build for production and launch server
```sh
$ npm run build
$ npm run start
```

3 generate static project
```
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@moremiAbel](https://twitter.com/moremiAbel) - abelmoremiz@gmail.com

Project Link: [Gesture](https://github.com/abel-moremi/gesture)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Nicholas Renotte](https://github.com/nicknochnack) for his [repo](https://github.com/nicknochnack/HandPoseDetection) and Youtube [video](https://www.youtube.com/watch?v=f7uBsb-0sGQ) helped out a lot
