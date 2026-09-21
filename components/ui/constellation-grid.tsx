"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  label: string;
  pulse: number;
}

export default function ConstellationGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let nodes: NodePoint[] = [];
    let lastTime = performance.now();

    const mouse = { x: -1000, y: -1000, previousX: -1000, previousY: -1000, radius: 220 };

    const initializeNodes = () => {
      nodes = [];
      const spacing = 72;
      const columns = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let column = 0; column < columns; column += 1) {
        for (let row = 0; row < rows; row += 1) {
          const x = column * spacing;
          const y = row * spacing;
          nodes.push({
            x,
            y,
            vx: 0,
            vy: 0,
            baseX: x,
            baseY: y,
            radius: Math.random() * 1 + 0.8,
            label: `${(column * 7).toString(16).toUpperCase()}:${(row * 11).toString(16).toUpperCase()}`,
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const handleResize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      initializeNodes();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const render = (now: number) => {
      const deltaTime = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const mouseVelocityX = (mouse.x - mouse.previousX) / (deltaTime * 1000 || 1);
      const mouseVelocityY = (mouse.y - mouse.previousY) / (deltaTime * 1000 || 1);
      const mouseSpeed = Math.sqrt(mouseVelocityX ** 2 + mouseVelocityY ** 2);
      mouse.previousX = mouse.x;
      mouse.previousY = mouse.y;

      context.fillStyle = "#f5f7f1";
      context.fillRect(0, 0, width, height);

      for (const node of nodes) {
        node.pulse += deltaTime * 2;
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const power = 1 - distance / mouse.radius;
          const force = power * (1000 + mouseSpeed * 80);
          const angle = Math.atan2(dy, dx);
          node.vx -= Math.cos(angle) * force * deltaTime;
          node.vy -= Math.sin(angle) * force * deltaTime;
        }

        node.vx += (node.baseX - node.x) * 18 * deltaTime;
        node.vy += (node.baseY - node.y) * 18 * deltaTime;
        node.vx *= 0.82;
        node.vy *= 0.82;
        node.x += node.vx * deltaTime * 60;
        node.y += node.vy * deltaTime * 60;
      }

      const maxConnectionDistance = 82;
      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const nextNode = nodes[nextIndex];
          const dx = node.x - nextNode.x;
          const dy = node.y - nextNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            context.strokeStyle = `rgba(61, 82, 0, ${(1 - distance / maxConnectionDistance) * 0.055})`;
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(nextNode.x, nextNode.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNear = distance < mouse.radius;
        const alpha = isNear ? 0.75 : 0.12 + Math.sin(node.pulse) * 0.06;

        context.fillStyle = isNear ? `rgba(125, 177, 0, ${alpha})` : `rgba(61, 82, 0, ${alpha})`;
        context.beginPath();
        context.arc(node.x, node.y, isNear ? node.radius * 2 : node.radius + Math.sin(node.pulse) * 0.25, 0, Math.PI * 2);
        context.fill();

        if (distance < 100) {
          const pulseRing = ((node.pulse * 15) % 30) + 5;
          context.strokeStyle = `rgba(125, 177, 0, ${(1 - pulseRing / 35) * 0.22})`;
          context.lineWidth = 0.8;
          context.beginPath();
          context.arc(node.x, node.y, pulseRing, 0, Math.PI * 2);
          context.stroke();
          context.font = "8px ui-monospace, SFMono-Regular, Consolas, monospace";
          context.fillStyle = "rgba(61, 82, 0, 0.55)";
          context.fillText(node.label, node.x + 10, node.y - 10);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden opacity-75" aria-hidden="true">
      <canvas ref={canvasRef} className="pointer-events-auto absolute inset-0 block" />
    </div>
  );
}