import { styled } from "styled-components";

const StyledTable = styled.table`
  width: 90vw;
  margin: 0 10vw 2rem 10vw;
  text-align: left;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid white;
`;

const TableHeader = styled.th`
  font-size: xx-large;
`;

const TableRow = styled.tr`
  height: 4rem;
`;

const TableData = styled.td`
  width: 80%;
  padding: 1rem;
  border-bottom: 1px solid white;
`;

const TableDataType = styled.td`
  width: 20%;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  padding-left: 1rem;
`;
const Table = (props: Table): JSX.Element => {
  const RenderRows = (): JSX.Element[] => {
    const Rows: JSX.Element[] = [];

    props.rowData.forEach((data) => {
      Rows.push(
        <TableRow key={data.label}>
          <TableDataType>{data.label}</TableDataType>
          <TableData>{data.value || "No data"}</TableData>
        </TableRow>
      );
    });
    return Rows;
  };

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableHeader>{props.label}</TableHeader>
        </TableRow>
      </TableHead>

      <tbody>{RenderRows()}</tbody>
    </StyledTable>
  );
};

export default Table;
