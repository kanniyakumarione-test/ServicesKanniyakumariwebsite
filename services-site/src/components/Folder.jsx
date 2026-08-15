import { useState } from 'react';

const Folder = ({ items = [], className = '', onOpen }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const handleClick = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (!open && onOpen) {
      setTimeout(() => {
        onOpen();
      }, 500); // Wait for open animation
    }
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const getOpenTransform = index => {
    if (index === 0) return 'translate(-80%, -80%) rotate(-12deg)';
    if (index === 1) return 'translate(20%, -80%) rotate(12deg)';
    if (index === 2) return 'translate(-30%, -100%) rotate(4deg)';
    return '';
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`group relative transition-all duration-300 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
          !open ? 'hover:-translate-y-4 hover:drop-shadow-[0_20px_40px_rgba(245,158,11,0.2)]' : ''
        }`}
        style={{
          transform: open ? 'translateY(-10px)' : undefined
        }}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={open ? 'Close folder' : 'Open folder'}
      >
        {/* Main Folder Container (Larger base size) */}
        <div className="relative w-[320px] h-[240px]">
          
          {/* Back Cover of Folder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-white/10 shadow-inner"></div>
          
          {/* Folder Tab */}
          <div className="absolute z-0 bottom-[99%] left-0 w-[120px] h-[30px] bg-gradient-to-t from-[#1a1a1a] to-[#222] rounded-tl-xl rounded-tr-xl border-t border-l border-r border-white/10"></div>
          
          {/* Papers */}
          {papers.map((item, i) => {
            const sizeClasses = i === 0 ? 'w-[75%] h-[85%]' : i === 1 ? 'w-[85%] h-[80%]' : 'w-[90%] h-[75%]';
            const paperZIndex = i === 0 ? 'z-10' : i === 1 ? 'z-20' : 'z-30';
            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={`absolute ${paperZIndex} bottom-[5%] left-1/2 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  !open ? 'transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-4' : 'hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:z-50'
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? '#111' : i === 1 ? '#181818' : '#222',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {item}
              </div>
            );
          })}

          {/* Front Flap (Glassmorphic) */}
          <div
            className={`absolute z-40 w-full h-[85%] bottom-0 origin-bottom transition-all duration-500 ease-out border border-white/10 backdrop-blur-md bg-gradient-to-br from-amber-500/10 via-white/5 to-black/40 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] ${
              !open ? 'group-hover:[transform:rotateX(15deg)]' : ''
            }`}
            style={{
              borderRadius: '8px 16px 16px 16px',
              ...(open && { transform: 'rotateX(55deg)', opacity: 0.8 })
            }}
          >
             {/* Glowing Top Edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            
            {/* Front Text */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}>
              <span className="font-display font-bold text-amber-500/80 tracking-[0.3em] uppercase text-xl drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                Services
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Folder;
