import { Table } from '@radix-ui/themes';

export const HangarModalSheetCalculations = () => {
  const pipeCalculations = [
    {
      name: 'Стены',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Фронтоны',
      count: 4,
      meterage: 12,
    },
    {
      name: 'Крыша',
      count: 4,
      meterage: 12,
    },
  ];
  return (
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell align='center'>
            Кол-во листа для:
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align='center'>Метраж</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {pipeCalculations.map((calculation, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell align='center'>
              {calculation.name}
            </Table.RowHeaderCell>
            <Table.Cell align='center'>{`${calculation.meterage} м`}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
