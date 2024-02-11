import { Box, Button, Flex, Grid, Heading } from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';
import HangarCalculatorInput from './HangarCalculatorInput';
import HangarCalculatorRB from './HangarCalculatorRB';
import style from './HangarCalculator.module.css';
import { useContext } from 'react';
import { FieldsDataContext } from '../../contexts/FieldsDataContext';

export const HangarCalculator = () => {
  const { fieldsData, setFieldsData } = useContext(FieldsDataContext);
  console.log({ fieldsData });

  // const inputPlaceholders = [
  //   'Ширина в м',
  //   'Длина в м',
  //   'Высота под ферму в м',
  //   'Ширина ворот (фронтон) в м',
  // ];
  const formInputs = [
    {
      name: 'Ширина в м',
      value: fieldsData.width || '',
      error: 'Введите ширину',
    },
    {
      name: 'Длина в м',
      value: fieldsData.length || '',
      error: 'Введите длину',
    },
    {
      name: 'Высота под ферму в м',
      value: fieldsData.height || '',
      error: 'Введите высоту',
    },
    {
      name: 'Ширина ворот (фронтон) в м',
      value: fieldsData.gateWidth || '',
      error: 'Введите ширину ворот',
    },
  ];

  const radioButtons = [
    {
      name: 'columnStep',
      label: 'Шаг торцевых',
      options: [3, 4],
    },
    {
      name: 'gateCount',
      label: 'Кол-во ворот 6х5',
      options: [1, 2, null],
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFieldsData({
      ...fieldsData,
      width: +e.target[0].value || null,
      length: +e.target[1].value || null,
      height: +e.target[2].value || null,
      gateWidth: +e.target[3].value || null,
      isModalOpen: true,
    });
  };

  return fieldsData.isModalOpen ? null : (
    <Box className={style.underlay}>
      <Heading size='8' weight='bold' mb='4'>
        Введите размеры ангара
      </Heading>
      <Form.Root onSubmit={handleFormSubmit}>
        <Flex direction='column' gap='3'>
          {/* <Grid columns='2' gap='4'> */}
          {formInputs.map((input, index) => (
            <HangarCalculatorInput key={index} input={input} />
          ))}
          {/* </Grid> */}
          <Flex justify='between' direction='column' align='center' width='100%'>
            {radioButtons.map((radioButton, index) => (
              <Flex direction='column' key={index} width='100%' mb='3'>
                <HangarCalculatorRB
                  name={radioButton.name}
                  label={radioButton.label}
                  options={radioButton.options}
                  fieldsData={fieldsData}
                  setFieldsData={setFieldsData}
                />
              </Flex>
            ))}
          </Flex>
          <Flex justify='center'>
            <Button size='4' type='submit'>
              РАССЧИТАТЬ
            </Button>
          </Flex>
        </Flex>
      </Form.Root>
    </Box>
  );
};
