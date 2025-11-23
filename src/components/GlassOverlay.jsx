import './GlassOverlay.css';

function GlassOverlay({ children, className = '', ...props }) {
  return (
    <div className={`glass-overlay ${className}`} {...props}>
      {children}
    </div>
  );
}

export default GlassOverlay;

