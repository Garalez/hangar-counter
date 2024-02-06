import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FieldsDataContext = createContext(null);

export const FieldsDataProvider = ({ children }) => {
  const initialFieldsData = {
    width: null,
    length: null,
    height: null,
    gateWidth: null,
    columnStep: null,
    gateCount: null,
  };

  const [fieldsData, setFieldsData] = useState(initialFieldsData);

  return (
    <FieldsDataContext.Provider value={{ fieldsData, setFieldsData }}>
      {children}
    </FieldsDataContext.Provider>
  );
};

FieldsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
