import { TableWrapper } from "@bxreact/table-wrapper/index";

type Props = {
  data: { [key: string]: unknown }[];
  header: {
    [key: string]: string | (() => void);
  };
  paginations?: number[];
};

export default function TableComponent({
  data,
  header,
  paginations = [10, 50, 100],
}: Props) {
  return <TableWrapper data={data} header={header} paginations={paginations} />;
}
