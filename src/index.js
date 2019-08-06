import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import jdenticon from 'jdenticon';

const Jdenticon = ({ value = 'test', size = '100%' }) => {
  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, value);
  }, [value]);

  return (
    <div>
      <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
    </div>
  );
};

Jdenticon.propTypes = {
  size: PropTypes.string,
  value: PropTypes.string.isRequired
};
export default Jdenticon;
