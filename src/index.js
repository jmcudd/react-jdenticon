import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import jdenticon from "jdenticon";

function Jdenticon({ size = "100%", value, style, config }) {
  // ref for icon svg
  const icon = useRef(null);

  useEffect(() => {
    // configure jdenticon based on given config, if available
    // (idea from https://github.com/slavik0329/react-jdenticon)
    config && jdenticon.configure(config);
  }, [config]);

  useEffect(() => {
    // update icon based on value
    jdenticon.update(icon.current, value);
  }, [value]);

  return (
    <div style={style}>
      <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
    </div>
  );
}

Jdenticon.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  config: PropTypes.object,
};

export default Jdenticon;
