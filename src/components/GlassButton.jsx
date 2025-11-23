import './GlassButton.css';

function GlassButton({ children, onClick, variant = 'primary', className = '', ...props }) {
  return (
    <button 
      className={`glass-button glass-button-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default GlassButton;

