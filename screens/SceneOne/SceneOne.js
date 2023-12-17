import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';

const SceneOne = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);


  const Image = {uri: 'https://i.imgur.com/bRAyJhk.png'};
  
  const particleConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: false,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "image",
        stroke: {
          width: 2,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://i.imgur.com/imMBGXW.png",
          width: 500,
          height: 500
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 114.4282140517846,
        random: true,
        anim: {
          enable: true,
          speed: 14.384694684855308,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.666902811231592,
        direction: "bottom-right",
        random: false,
        straight: true,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "Canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
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
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
      <Particles
        CanvasStyle={styles.particleContainer}
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000c0',
    justifyContent: 'center',
  },
  particleContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default SceneOne;