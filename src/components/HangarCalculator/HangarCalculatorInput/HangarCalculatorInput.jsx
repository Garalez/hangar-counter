import { TextField } from "@radix-ui/themes";
import PropTypes from 'prop-types'

export const HangarCalculatorInput = ({placeholder}) => {
  return (
    <TextField.Input size="3" placeholder={placeholder} style={{ height: 'calc(3.5rem + 2px)'}}/>
  );
};

HangarCalculatorInput.propTypes = {
  placeholder: PropTypes.string
}



