'use client';

import { Particles } from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

import React, { useCallback, useEffect, useState } from 'react';

export default function ParticlesContainer() {
  const [linkColor, setLinkColor] = useState<string>('#e5d393');
  const [particleColor, setParticleColor] =
    useState<string>('#e68e2e');

  useEffect(function detectColorTheme() {
    let themePrefference: string;
    if (typeof localStorage.getItem('dark') == 'string') {
      themePrefference =
        localStorage.getItem('dark') == 'true' ? 'dark' : 'light';
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        themePrefference = 'dark';
      } else {
        themePrefference = 'light';
      }
    }

    setLinkColor(themePrefference === 'dark' ? '#e5d393' : '#000');
    setParticleColor(
      themePrefference === 'dark' ? '#e68e2e' : '#000'
    );
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      className="w-full h-full absolute z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: linkColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
