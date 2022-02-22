/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import SortableTableHead from './SortableTableHead';
import Button from '../Button';
import noop from '../../utils/noop';

interface Column {
  name: string;
  label: string;
  sortable: boolean;
  minWidth: number;
  render?: (row: any) => void;
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

- provide alternative component (hide certain columns on given breakpoints) (e.g. product card) OR
- hide columns on certain breakpoints
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
      <table role="table" className="table-auto rounded-xl overflow-hidden shadow-2xl my-8 mx-4">
        <thead>
          <tr role="row" className="bg-teal-700">
            {columns.map((col, index) => (
              <SortableTableHead
                className={classNames('p-6 hover:cursor-pointer')}
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
                  className="p-1 m-1 text-left hover:cursor-pointer"
                  onClick={() => {
                    if (onRowClick !== undefined) {
                      onRowClick(item.id);
                    }
                  }}
                >
                  {/* // TODO: check if there is a render function, if not then just use text  */}
                  {item[title]}
                </td>
              ))}
              <td role="cell" className="text-center">
                <FontAwesomeIcon
                  role="img"
                  aria-label="trash-bin"
                  className="w-6 h-6 text-red-600"
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
