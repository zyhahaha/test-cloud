// let avatarImgEl = document.getElementsByClassName('header-logo')[0];
// function upload(files) {
//   let file = files[0];
//   let option = {
//     file: file,
//     max: 40,
//   }
//   let CutImgObj = new CutImg();
//   CutImgObj.cut(option).then(blob => {
//     avatarImgEl.src = window.webkitURL.createObjectURL(blob);
//   })
// }
events.subscribe('aa', handler);
events.publish('aa', 6666);

function handler (info) {
  console.log(info);
}