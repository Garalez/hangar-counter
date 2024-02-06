import PropTypes from 'prop-types';
import { Flex, Text } from '@radix-ui/themes';
import { addTenPercent } from '../../../utils/handleFunctions';

export const HangarModalParams = ({ fieldsData }) => {
  const { width, length, height, columnStep, gateCount } = fieldsData;

  const sectionCountStd = Math.ceil(length / columnStep); // кол-во секций в ангаре
  const fermRise = width <= 19 ? 3.2 : 3.5;
  const fermLen = (Math.sqrt((fermRise ** 2) + (width / 2) ** 2)).toFixed(2);

  const lengthRemainder = length % columnStep;
  let fermCol = null;
  let fermColTd = null;
  let sectionCol = null;
  let pipeLen = null;
  let sectionHintText = '';

  if (lengthRemainder === 0) {
    fermCol = (sectionCountStd + 1) * 2;
    fermColTd = sectionCountStd + 1;
    sectionCol = sectionCountStd + 1;
    pipeLen = addTenPercent(+((sectionCol * 2 * fermLen)), 1);
    // rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1);
    sectionHintText = ` шт`;
    // если длина ангара не делится нацело, то остаток прибавляется к последнему пролету
  } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
    fermCol = sectionCountStd * 2;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    // rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1);
    sectionHintText = ` шт. из них 1 пролет до 4м`;
  } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
    fermCol = sectionCountStd * 2;
    fermColTd = sectionCountStd;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    sectionHintText = ` шт. из них 2 пролета до 4м`;
  }

  const fields = [
    {
      name: 'Ширина ангара',
      value: `${width} м`,
    },
    {
      name: 'Длина ангара',
      value: `${length} м`,
    },
    {
      name: 'Высота ангара',
      value: `${height} м`,
    },
    {
      name: 'Шаг колон',
      value: `${columnStep} м`,
    },
    {
      name: 'Площадь ангара',
      value: `${+width * +length} м.кв`,
    },
    {
      name: 'Длина фермы',
      value: `${fermLen * 2} м`,
    },
    {
      name: 'Кол-во пролётов в ангаре',
      value: `${sectionCol + sectionHintText}`,
    },
  ];

  return (
    <Flex direction='column' style={{ gap: '10px', paddingTop: '10px 30px' }}>
      {fields.map((field, index) => (
        <Flex key={index + field} justify='between'>
          <Text>{field.name}:</Text>
          <Text>{field.value}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

HangarModalParams.propTypes = {
  fieldsData: PropTypes.object,
};
