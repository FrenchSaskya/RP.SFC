function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const possibleVideos = [
  "/assets/themes/uchiha/videos/sharingan_0.mp4",
  "/assets/themes/uchiha/videos/sharingan_1.mp4",
];
const randomNum = getRandomInt(2);
const randomVideo = possibleVideos[randomNum];
//# access the required video tag
const myVid = document.getElementById("bg-video");
//# load and play the new "src" file
myVid.src = randomVideo;
myVid.load();
myVid.play();
