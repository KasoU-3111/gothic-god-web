import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import MainSite from '@/components/MainSite';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      {!showSplash && <MainSite />}
    </>
  );
};

export default Index;
