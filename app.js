particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Increase the number of particles for a fuller effect
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#00FF00", "#00FFFF", "#FF00FF"] // Neon green, cyan, and magenta
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://i.imgur.com/4NZ6uLY.png", // Add planet-like particles using a custom image
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.8, // Brighter particles
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 10, // Larger particles for a more prominent look
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200, // Longer distance between lines
      color: "#ffffff", // White connecting lines
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 60, // Larger bubble effect
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
document.querySelector('#particles-js canvas').style.backgroundColor = 'black';
