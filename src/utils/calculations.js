import { addTenPercent, getPifagorGypotenuse } from './handleFunctions';

export const calculations = (fieldsData) => {
  const { width, length, height, columnStep, gateCount } = fieldsData;

  const sectionCountStd = Math.ceil(length / columnStep);
  const fermRise = width <= 19 ? 3.2 : 3.5;
  const fermLen = Math.sqrt(fermRise ** 2 + (width / 2) ** 2).toFixed(2);
  const lengthRemainder = length % columnStep;
  const progSectionCount = Math.ceil(height / 1.5);
  const progHeightRemainder = height % 1.5;
  const ceilingProgSectionCount = Math.ceil(fermLen / 1.3);
  const ceilingProgHeightRemainder = fermLen % 1.29;
  const frontonPillarsCount = Math.floor(width / 4) * 2;
  const frontonPillarsLength = frontonPillarsCount * 7;
  const wallProgPipeLength = length * 2;
  const frontonProgPipeLength = width * 2;
  const gatesCalcs = width * 6;
  const oneRosCalcs = addTenPercent(fermLen * 2 * 2 * 2, 1);
  const crestCol = length < 60 ? 4 : 6;
  const crestPipeLen = getPifagorGypotenuse(3, height, 1) * 2;
  const crestTotalPipeLen = Math.ceil(crestPipeLen * crestCol);
  const checksCol = 4;
  const checkPipeLen = getPifagorGypotenuse(3, height, 1);
  const checksTotalPipeLen = Math.ceil(checkPipeLen * checksCol);
  const triangleArea = ((width / 2) * fermRise) / 2;
  const profileFrontCalcs = triangleArea * 2 + height * width;
  const triangleGypotenuse = getPifagorGypotenuse(width / 2, fermRise, 0);
  const halfOfRoofArea = triangleGypotenuse * length + 0.7 * length;
  const profileRoofCalcs = halfOfRoofArea * 2;

  let fermCol = null;
  let fermColTd = null;
  let sectionCol = null;
  let pipeLen = null;
  let sectionHintText = '';
  let innerPcs = null;
  let innerM = null;
  let innerProgPcs = null;
  let innerPcsCeil = null;

  if (lengthRemainder === 0) {
    fermCol = (sectionCountStd + 1) * 2;
    fermColTd = sectionCountStd + 1;
    sectionCol = sectionCountStd + 1;
    pipeLen = addTenPercent(+(sectionCol * 2 * fermLen), 1);
    innerPcs = (sectionCountStd + 1) * 2;
    innerM = innerPcs * height;
    sectionHintText = ` шт`;
  } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
    fermCol = sectionCountStd * 2;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    innerPcs = sectionCountStd * 2;
    innerM = innerPcs * height;
    sectionHintText = ` шт. из них 1 пролет до 4м`;
  } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
    fermCol = sectionCountStd * 2;
    fermColTd = sectionCountStd;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    innerPcs = sectionCountStd * 2;
    innerM = innerPcs * height;
    sectionHintText = ` шт. из них 2 пролета до 4м`;
  }

  if (progHeightRemainder === 0 || progHeightRemainder <= 1.49) {
    innerProgPcs = (progSectionCount + 1) * 2;
  }

  if (ceilingProgHeightRemainder === 0 || ceilingProgHeightRemainder <= 1.29) {
    innerPcsCeil = (ceilingProgSectionCount + 1) * 2;
  }

  const totalProgPipeLength = (wallProgPipeLength + frontonProgPipeLength) * innerProgPcs;
  const totalRoofProgPipeLength = innerPcsCeil * 2 * length;
  const totalRosCalcs = (oneRosCalcs * fermColTd).toFixed(1);

  return {
    sectionCountStd,
    fermRise,
    fermLen,
    fermCol,
    fermColTd,
    sectionCol,
    pipeLen,
    sectionHintText,
    width,
    length,
    height,
    columnStep,
    gateCount,
    innerPcs,
    innerM,
    innerProgPcs,
    innerPcsCeil,
    frontonPillarsLength,
    totalProgPipeLength,
    gatesCalcs,
    totalRoofProgPipeLength,
    totalRosCalcs,
    crestTotalPipeLen,
    checksTotalPipeLen,
    frontonPillarsCount,
    oneRosCalcs,
    crestCol,
    checksCol,
    profileFrontCalcs,
    profileRoofCalcs,
  };
};

export const hangarParams = (fieldsData) => {
  const { width, length, height, columnStep, fermLen, sectionCol, sectionHintText } =
    calculations(fieldsData);

  return [
    { name: 'Ширина ангара', value: `${width} м` },
    { name: 'Длина ангара', value: `${length} м` },
    { name: 'Высота ангара', value: `${height} м` },
    { name: 'Шаг колон', value: `${columnStep} м` },
    { name: 'Площадь ангара', value: `${+width * +length} м.кв` },
    { name: 'Длина фермы', value: `${fermLen * 2} м` },
    { name: 'Кол-во пролётов в ангаре', value: `${sectionCol + sectionHintText}` },
  ];
};

export const hangarPipeCalculations = (fieldsData) => {
  const {
    frontonPillarsLength,
    totalProgPipeLength,
    gatesCalcs,
    totalRoofProgPipeLength,
    frontonPillarsCount,
    totalRosCalcs,
    crestTotalPipeLen,
    checksTotalPipeLen,
    oneRosCalcs,
    crestCol,
    gateCount,
    pipeLen,
    fermColTd,
    innerPcs,
    innerM,
    innerProgPcs,
    innerPcsCeil,
    checksCol,
  } = calculations(fieldsData);

  return [
    { name: 'Стойки стеновые', count: `${innerPcs} шт`, meterage: `${innerM} м` },
    {
      name: 'Стойки фронтонные',
      count: `${frontonPillarsCount} шт`,
      meterage: `${frontonPillarsLength} м`,
    },
    { name: 'Прогоны торцевые', count: `${innerProgPcs} шт`, meterage: `${totalProgPipeLength} м` },
    { name: 'Прогоны фронтонные', count: `${6} шт`, meterage: `${gatesCalcs} м` },
    {
      name: 'Прогоны крыша',
      count: `${innerPcsCeil} шт`,
      meterage: `${totalRoofProgPipeLength} м`,
    },
    { name: 'Фермы', count: `${fermColTd} шт`, meterage: `${pipeLen} м` },
    { name: 'Раскосы на 1 ферму', count: '---', meterage: `${oneRosCalcs} м` },
    { name: 'Раскосы на все фермы', count: '---', meterage: `${totalRosCalcs} м` },
    { name: 'Кресты', count: `${crestCol} шт`, meterage: `${crestTotalPipeLen} м` },
    { name: 'Галочки', count: `${checksCol} шт`, meterage: `${checksTotalPipeLen} м` },
    { name: 'Труба ворота', count: `${gateCount} шт`, meterage: `${gateCount * 72} м` },
  ];
};

export const hangarSheetCalculations = (fieldsData) => {
  const { length, height, profileFrontCalcs, profileRoofCalcs } = calculations(fieldsData);

  return [
    { name: 'Стены', meterage: `${height * length} м` },
    { name: 'Фронтоны', meterage: `${profileFrontCalcs} м` },
    { name: 'Крыша', meterage: `${profileRoofCalcs} м` },
  ];
};
