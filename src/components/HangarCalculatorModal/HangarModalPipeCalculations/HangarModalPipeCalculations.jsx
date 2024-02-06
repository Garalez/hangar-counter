import { Table } from '@radix-ui/themes';
import PropTypes from 'prop-types'

export const HangarModalPipeCalculations = ({fieldsData}) => {
  const pipeCalculations = [
    {
      name: 'Стойки стеновые',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Стойки фронтонные',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Прогоны торцевые',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Прогоны фронтонные',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Прогоны крыша',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Фермы',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Раскосы на 1 ферму',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Раскосы на все фермы	',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Кресты',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Галочки',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Труба ворота',
      count: 4,
      meterage: 12,
    },
  ];
  return (
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell align='center'>#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align='center'>Шт</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align='center'>Метраж</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {pipeCalculations.map((calculation, index) => (
            <Table.Row key={index} style={{background: 'purple'}}>
              <Table.RowHeaderCell align='center'>{calculation.name}</Table.RowHeaderCell>
              <Table.Cell align='center'>{`${calculation.count} шт`}</Table.Cell>
              <Table.Cell align='center'>{`${calculation.meterage} м`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  );
};

HangarModalPipeCalculations.propTypes = {
  fieldsData: PropTypes.object,
};
