import React, { useState, useEffect } from 'react';

import View from './view';

const Controller = ({ isTextCopied, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isTextCopied);
  }, [isTextCopied]);

  return <View {...rest} isOpen={isOpen} />;
};

export default Controller;
