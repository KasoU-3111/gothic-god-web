const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-gothic border-t border-border/30">
      <div className="gothic-container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="gothic-subtitle text-xl">
              CONTACT
            </h3>
            <div className="gothic-body space-y-2">
              <p>info@gothicgodz.com</p>
              <p>+91 90XXX XXXXX</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8 border-t border-border/30">
            <p className="gothic-body text-sm">
              © 2025 Gothic Godz™. All rights reserved.
            </p>
          </div>
          
          <div className="pt-4">
            <p className="text-muted-foreground text-xs tracking-widest">
              CRAFTED FOR THE BOLD • FORGED IN DARKNESS • WORN WITH PRIDE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;