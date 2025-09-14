import logoImage from '@/assets/gothic-godz-logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 gothic-glass">
      <div className="gothic-container py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logoImage}
            alt="Gothic Godz"
            className="h-12 md:h-16 transition-all duration-300 hover:scale-105"
            style={{
              filter: 'drop-shadow(0 5px 15px rgba(255, 255, 255, 0.1))'
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;