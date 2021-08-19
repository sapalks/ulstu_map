import React, { useState, useEffect } from 'react';

import View from './view';

const Controller = ({ ...rest }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);

  useEffect(() => {
    if (isTextCopied) {
      setTimeout(() => setIsTextCopied(false), 1000);
    }
  }, [isTextCopied]);

  return <View {...rest} isTextCopied={isTextCopied} setIsTextCopied={setIsTextCopied} />;
};

export default Controller;
