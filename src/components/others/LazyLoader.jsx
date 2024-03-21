import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LazyLoader = ({
  delay = 500,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <div>Loading...</div> : null;
};

LazyLoader.propTypes = {
  delay: PropTypes.number,

}

export default LazyLoader;