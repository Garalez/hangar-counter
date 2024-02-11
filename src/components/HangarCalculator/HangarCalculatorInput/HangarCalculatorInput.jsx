import * as Form from '@radix-ui/react-form';
import { TextField } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const HangarCalculatorInput = ({ input }) => {
  const [inputValue, setInputValue] = useState(input.value);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Form.Field className='FormField' name='email'>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label style={{ paddingLeft: '10px', marginBottom: '3px' }}>{input.name}</Form.Label>
      </div>
      <Form.Control asChild>
        <TextField.Input
          style={{ height: 'calc(3.5rem + 2px)' }}
          type='number'
          onChange={handleChange}
          value={inputValue}
          required
        />
      </Form.Control>
    </Form.Field>
  );
};

HangarCalculatorInput.propTypes = {
  input: PropTypes.object,
};
