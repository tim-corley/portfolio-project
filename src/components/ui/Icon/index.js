import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faTools,
  faRandom
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faRandom,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faTools
);

// includes a work around to enable using 'fab' prefix (used in services/service-1)
// 'fas' prefix is default - see: https://github.com/FortAwesome/react-fontawesome/issues/161
const Icon = ({ ...props }) =>
  props[Object.keys(props)[0]].includes('fab') ? (
    <FontAwesomeIcon icon={['fab', props[Object.keys(props)[0]].split('-')[1]]} />
  ) : (
    <FontAwesomeIcon {...props} />
  );

export default Icon;
