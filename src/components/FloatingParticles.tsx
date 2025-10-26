export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    size: `${4 + Math.random() * 8}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 blur-sm animate-float-particle"
          style={{
            left: particle.left,
            bottom: '-10%',
            width: particle.size,
            height: particle.size,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
          }}
        />
      ))}
      
      {/* Floating code symbols */}
      {['<>', '{...}', '()=>{}', 'fn()', 'API', 'DB'].map((symbol, i) => (
        <div
          key={symbol}
          className="absolute text-primary/20 font-mono text-xs md:text-sm animate-float-code"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i}s`,
          }}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};
