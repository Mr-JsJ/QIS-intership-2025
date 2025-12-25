 let isOn = false;

    function toggleBulb() {
      let bulb = document.getElementById("bulb");
      let btn = document.getElementById("switch");

      if (isOn) {
        bulb.src = "pic_bulboff.gif";
        btn.innerText = "Turn ON";
      } else {
        bulb.src = "pic_bulbon.gif";
        btn.innerText = "Turn OFF";
      }

      isOn = !isOn;
    }