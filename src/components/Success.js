// Wherever you are using the Success component
import React, { useState } from 'react';
import Success from './Success';

export default function YourParentComponent() {
  const [successMessage, setSuccessMessage] = useState(''); // Assuming successMessage is set somewhere

  // Some function or event handler that sets the success message
  const handleSuccess = () => {
    setSuccessMessage('Your success message here');
  };

  return (
    <div>
      {/* Your other components */}
      {successMessage && <Success success={successMessage} />}
    </div>
  );
}
