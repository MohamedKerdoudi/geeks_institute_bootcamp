// ====== Daily Challenge ======
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
  }
}
const video1 = new Video('JavaScript Basics', 'Alice', 300);
console.log(video1.watch());
const video2 = new Video('Advanced Python', 'Bob', 450);
console.log(video2.watch());
//output:
// Alice watched all 300 seconds of JavaScript Basics!
// Bob watched all 450 seconds of Advanced Python!
const videoData = [
  { title: 'HTML Crash Course', uploader: 'John', time: 600 },
  { title: 'CSS Grid', uploader: 'Sarah', time: 420 },
  { title: 'React Intro', uploader: 'Mike', time: 900 },
  { title: 'Node.js Basics', uploader: 'Emma', time: 780 },
  { title: 'Async JavaScript', uploader: 'Liam', time: 540 }
];
const videos = [];

videoData.forEach(video => {
  const newVideo = new Video(video.title, video.uploader, video.time);
  videos.push(newVideo);
});
videos.forEach(video => {
  console.log(video.watch());
});
//output:
// John watched all 600 seconds of HTML Crash Course!
// Sarah watched all 420 seconds of CSS Grid!
// Mike watched all 900 seconds of React Intro!
// Emma watched all 780 seconds of Node.js Basics!
// Liam watched all 540 seconds of Async JavaScript!