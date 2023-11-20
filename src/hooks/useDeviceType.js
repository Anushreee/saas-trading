import React, { useEffect, useState } from 'react';

function useDeviceType() {
  const [deviceType, setDeviceType] = useState(''); // Initialize deviceType state

  useEffect(() => {
    // Function to detect device type
    const detectDeviceType = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setDeviceType('desktop');
      } else if (screenWidth >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    // Detect the initial device type
    detectDeviceType();

    // Attach a resize event listener to detect changes in device size
    window.addEventListener('resize', detectDeviceType);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', detectDeviceType);
    };
  }, []);

  return deviceType;
}

export default useDeviceType;