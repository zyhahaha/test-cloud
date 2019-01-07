import * as ImgUploadService from '_zyhahaha@0.1.0@zyhahaha';
// console.log(upload);
// let avatarUpdataEl = document.getElementById('avatar-updata');
let avatarImgEl = document.getElementsByClassName('header-logo')[0];
// avatarUpdataEl.addEventListener('change', file => {
//   console.log(file);
// })
window.upload = upload;
function upload(files) {
  // console.log(files);
  let file = files[0];
  let option = {
    file: file,
    max: 40,
  }
  // console.log(ImgUploadService)
  let ImgUploadServiceObj = new ImgUploadService();
  ImgUploadServiceObj.draw(option, blob => {
    console.log(blob);
    avatarImgEl.src = window.webkitURL.createObjectURL(blob);
  })
}