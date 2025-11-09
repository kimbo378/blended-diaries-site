import { useEffect, useRef } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#9b59b6", "#00b9b9", "#f39c12", "#e74c3c"];
    const confettiPieces: ConfettiPiece[] = [];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 5,
        speedY: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 4 - 2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiPieces.forEach((piece) => {
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        ctx.restore();

        piece.y += piece.speedY;
        piece.x += piece.speedX;
        piece.rotation += piece.rotationSpeed;

        if (piece.y > canvas.height) {
          piece.y = -20;
          piece.x = Math.random() * canvas.width;
        }

        if (piece.x > canvas.width) {
          piece.x = 0;
        } else if (piece.x < 0) {
          piece.x = canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
