import { useEffect, useState } from 'react';
import { Button, Flex, Grid, Text } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import style from './HangarCalculatorRB.module.css';

export const HangarCalculatorRB = ({ name, label, options, fieldsData, setFieldsData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  // console.log('selectedOption: ', selectedOption, fieldsData, name, label);
  useEffect(() => {
    setSelectedOption(fieldsData[name] || null);
  }, [fieldsData]);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setFieldsData({...fieldsData, [name]: option});
  };

  return (
    <>
      <Text align='center' mb='2'>{label}</Text>
      <Grid columns='2' gap='2' className={style.test}>
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(option)}
            color={selectedOption === option ? 'orange' : 'gray'}
            radius='none'
            // className={`${style.button} ${selectedOption === option ? style.active : ''}`}>
            className={`${style.button} ${selectedOption === option ? style.active : ''}`}
            type='button'>
            {option ? `${option}м` : 'Не выбрано'}
          </Button>
        ))}
      </Grid>
    </>
  );
};

HangarCalculatorRB.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  fieldsData: PropTypes.object,
  setFieldsData: PropTypes.func,
};
