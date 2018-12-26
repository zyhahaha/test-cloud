var collects = document.getElementsByClassName('collect');

function goPersonCenter() {
  location.href = './person_center.html';
}
function isShowCollect(index) {
  for (var i = 0; i < collects.length; i++) {
    collects[i].style.visibility = 'initial';
  }
  collects[index].style.visibility = 'hidden';
}