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
  shape: "snowflake" | "tree" | "ornament" | "star";
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

    const colors = ["#c0392b", "#27ae60", "#ecf0f1", "#f39c12", "#3498db"];
    const shapes: ("snowflake" | "tree" | "ornament" | "star")[] = ["snowflake", "tree", "ornament", "star"];
    const confettiPieces: ConfettiPiece[] = [];
    const confettiCount = 50;

    const drawSnowflake = (ctx: CanvasRenderingContext2D, size: number) => {
      const branches = 6;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < branches; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / branches);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.6);
        ctx.lineTo(-size * 0.3, -size * 0.8);
        ctx.moveTo(0, -size * 0.6);
        ctx.lineTo(size * 0.3, -size * 0.8);
        ctx.stroke();
        
        ctx.restore();
      }
    };

    const drawTree = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(-size * 0.6, size * 0.2);
      ctx.lineTo(size * 0.6, size * 0.2);
      ctx.closePath();
      ctx.fill();
      
      ctx.fillRect(-size * 0.15, size * 0.2, size * 0.3, size * 0.4);
    };

    const drawOrnament = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillRect(-size * 0.2, -size * 0.9, size * 0.4, size * 0.2);
    };

    const drawStar = (ctx: CanvasRenderingContext2D, size: number) => {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size / 2;

      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = Math.cos(angle - Math.PI / 2) * radius;
        const y = Math.sin(angle - Math.PI / 2) * radius;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
    };

    for (let i = 0; i < confettiCount; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 10,
        speedY: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 4 - 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
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

        if (piece.shape === "snowflake") {
          drawSnowflake(ctx, piece.size);
        } else if (piece.shape === "tree") {
          drawTree(ctx, piece.size);
        } else if (piece.shape === "ornament") {
          drawOrnament(ctx, piece.size);
        } else {
          drawStar(ctx, piece.size);
        }

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
