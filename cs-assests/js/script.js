
//----------------------Particles.Js Code----------------------//
particlesJS("particles-js", {
    particles: {
      number: {
        value: 364,
        density: { enable: true, value_area: 3864.5971354659623 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: false,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 2,
        random: false,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 1361.503099421761, rotateY: 600 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: false,
  });
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.display = "none";
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  var count_particles = document.querySelector(".js-count-particles");
  var update = function () {
    stats.begin();
    stats.end();
    if (count_particles) {
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  //----------------------Time Counter----------------------//
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date();
    let countdownTarget = new Date(today.getTime() + 30 * day);
    const countDown = countdownTarget.getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      let distance = countDown - now;
      if (distance > 0) {
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
      } else {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.getElementById("headline").innerText = "Countdown Finished!";
        clearInterval(x);
      }
    }, 1000);
  })();
  
  // ---------------------- Word Typing Animation --------------------------//
  let typeJsText = document.querySelector(".typeJsText");
  let textArray = typeJsText.dataset.typetext.split("");
  let counter = -1;
  typeJsText.innerHTML = "";
  function typeJs() {
    if (counter < typeJsText.dataset.typetext.length) {
      counter++;
      typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
      textArray = typeJsText.dataset.typetext.split("");
    } else {
      textArray.pop();
      typeJsText.innerHTML = textArray.join("");
      if (textArray.length == 0) {
        counter = -1;
      }
    }
  }
  setInterval(() => {
    typeJs();
  }, 200);