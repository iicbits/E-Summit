"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const particles = [];
    const particleCount = 400;
    const exclusionRadius = 220;

    class Particle {
      constructor(randomizePos = true) {
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.speed = Math.random() * 0.3 + 0.1;

        if (randomizePos) {
          do {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
          } while (this.getDistanceToCenter() < exclusionRadius);
        } else {
          this.spawnAtEdge();
        }
      }

      spawnAtEdge() {
        const side = Math.floor(Math.random() * 4);
        switch (side) {
          case 0:
            this.x = Math.random() * width;
            this.y = -10;
            break;
          case 1:
            this.x = width + 10;
            this.y = Math.random() * height;
            break;
          case 2:
            this.x = Math.random() * width;
            this.y = height + 10;
            break;
          case 3:
            this.x = -10;
            this.y = Math.random() * height;
            break;
        }
      }

      getDistanceToCenter() {
        const dx = centerX - this.x;
        const dy = centerY - this.y;
        return Math.sqrt(dx * dx + dy * dy);
      }

      update() {
        const dx = centerX - this.x;
        const dy = centerY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
          this.x += (dx / distance) * this.speed;
          this.y += (dy / distance) * this.speed;
        }

        if (distance < exclusionRadius) {
          this.spawnAtEdge();
          this.size = Math.random() * 2 + 0.5;
          this.alpha = Math.random() * 0.6 + 0.2;
          this.speed = Math.random() * 0.3 + 0.1;
        }
      }

      draw() {
        let currentAlpha = this.alpha;
        const dist = this.getDistanceToCenter();
        const fadeStart = exclusionRadius + 100;

        if (dist < fadeStart) {
          currentAlpha = this.alpha * ((dist - exclusionRadius) / 100);
          if (currentAlpha < 0) currentAlpha = 0;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
