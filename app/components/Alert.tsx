import React, { useState } from 'react';

const Alert: React.FC<{ children: string; type?: string }> = ({ children, type = 'primary' }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
       {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => setVisible(false)}
      ></button>
    </div>
  );
};

export default Alert;