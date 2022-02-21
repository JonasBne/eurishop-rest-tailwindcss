/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SortableTableHead from './SortableTableHead';
import Button from '../Button';
import noop from '../../utils/noop';

interface Column {
  name: string;
  label: string;
  sortable: boolean;
  id: string;
}

interface TableProps {
  data: any[];
  onRowClick?: (productId: string) => void;
  onActionClick?: (productId: string) => void;
  onLoadData: () => void;
  sortExpression: string;
  setSortExpression: (prevSortExp: any) => void;
  columns: Column[];
}

/*

TODO

- fix key issue
- how to make height of th fit the right columns content?

*/

function Table({
  data,
  columns,
  sortExpression,
  setSortExpression,
  onRowClick = noop,
  onActionClick = noop,
  onLoadData,
}: TableProps) {
  return (
    <>
      <table className="table-fixed break-words grid grid-cols-2 my-8 mx-4 border-collapse shadow-2xl lg:hidden">
        {data.map((item, index) => (
          <>
            <thead key={`tablehead${item.id}${index}`} className="bg-teal-700 w-fit my-4">
              <tr className="flex flex-col my-2">
                {columns.map((col, colIndex) => (
                  <SortableTableHead
                    className="py-2 px-3 text-xs"
                    title={col.label}
                    index={colIndex}
                    name={col.name}
                    sortable={col.sortable}
                    sortExpression={sortExpression}
                    setSortExpression={setSortExpression}
                    key={`column${col.id}`}
                  />
                ))}
              </tr>
            </thead>
            <tbody role="tablebody" key={`tablebody${item.id}`} className="my-4 text-xs ">
              <tr key={`tablerow${item.id}`} role="row" className="flex flex-col my-4">
                {Object.keys(data[0]).map((title: any, rowIndex) => (
                  <td
                    role="cell"
                    key={`tabledata${rowIndex}${item.id}`}
                    className="py-2 text-left"
                    onClick={() => {
                      if (onRowClick !== undefined) {
                        onRowClick(item.id);
                      }
                    }}
                  >
                    {item[title]}
                  </td>
                ))}
                <td role="cell" className="text-left py-2" key={`data${item.id}`}>
                  <FontAwesomeIcon
                    role="img"
                    aria-label="trash-bin"
                    className="w-8 h-8 text-red-600"
                    icon={faTrash}
                    onClick={() => {
                      if (onActionClick !== undefined) {
                        onActionClick(item.id);
                      }
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>

      <table role="table" className="hidden lg:block lg:rounded-xl lg:overflow-hidden lg:shadow-2xl my-8 mx-4">
        <thead>
          <tr role="row" className="h-14 bg-teal-700">
            {columns.map((col, index) => (
              <SortableTableHead
                className="p-6"
                title={col.label}
                index={index}
                name={col.name}
                sortable={col.sortable}
                sortExpression={sortExpression}
                setSortExpression={setSortExpression}
                key={col.id}
              />
            ))}
          </tr>
        </thead>
        <tbody role="tablebody">
          {data.map((item: any, dataIndex) => (
            <tr key={item.id} role="row" className="h-14">
              {Object.keys(data[0]).map((title: any, index) => (
                <td
                  role="cell"
                  key={`item${index}${dataIndex}`}
                  className="p-1 m-1 text-left"
                  onClick={() => {
                    if (onRowClick !== undefined) {
                      onRowClick(item.id);
                    }
                  }}
                >
                  {item[title]}
                </td>
              ))}
              <td role="cell" className="text-left">
                <FontAwesomeIcon
                  role="img"
                  aria-label="trash-bin"
                  className="px-1 mx-1 text-red-600"
                  icon={faTrash}
                  onClick={() => {
                    if (onActionClick !== undefined) {
                      onActionClick(item.id);
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center">
        <Button type="button" variant="secondary" onClick={onLoadData}>
          LOAD MORE...
        </Button>
      </div>
    </>
  );
}

export default Table;
