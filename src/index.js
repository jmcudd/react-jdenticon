import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import jdenticon from 'jdenticon';

const Jdenticon = ({ value = 'test', size = '100%', config = {} }) => {
  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, value, config);
  }, [value]);

  return (
    <div>
      <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
    </div>
  );
};

Jdenticon.propTypes = {
  config: PropTypes.shape({}),
  size: PropTypes.string,
  value: PropTypes.string.isRequired
};
export default Jdenticon;
