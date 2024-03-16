function saklar(action, lamp) {
  let lampu1 = document.getElementById('lampu1');

  let lampu2 = document.getElementById('lampu2');
  let lampu3 = document.getElementById('lampu3');

  if (action == 'on') {
    if (lamp == 1) {
      lampu1.src = 'asset/img/on.gif';
    }
    if (lamp == 2) {
      lampu2.src = 'asset/img/on.gif';
    }
    if (lamp == 3) {
      lampu3.src = 'asset/img/on.gif';
    }
  }
  if (action === 'off') {
    if (lamp == 1) {
      lampu1.src = 'asset/img/off.gif';
    }
    if (lamp == 2) {
      lampu2.src = 'asset/img/off.gif';
    }
    if (lamp == 3) {
      lampu3.src = 'asset/img/off.gif';
    }
  }
}
