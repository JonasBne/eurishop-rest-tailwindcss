/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../assets/FaIcon';
import SortableTableHead from './SortableTableHead';
import Button from '../Button';

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

function Table({
  data,
  columns,
  sortExpression,
  setSortExpression,
  onRowClick,
  onActionClick,
  onLoadData,
}: TableProps) {
  return (
    <table className="m-8">
      <thead className="bg-blue-800">
        <tr className="flex flex-col my-2 md:block">
          {columns.map((col, index) => (
            <SortableTableHead
              className="py-2 px-3 text-sm"
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
    </table>
  );
  // return (
  //   <>
  //     <table role="table" className="flex flex-col rounded-xl overflow-hidden shadow-2xl m-14">
  //       <thead className="flex flex-col">
  //         <tr role="row" className="h-14 bg-blue-900">
  //           {columns.map((col, index) => (
  //             <SortableTableHead
  //               className="p-6"
  //               title={col.label}
  //               index={index}
  //               name={col.name}
  //               sortable={col.sortable}
  //               sortExpression={sortExpression}
  //               setSortExpression={setSortExpression}
  //               key={col.id}
  //             />
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody role="tablebody">
  //         {data.map((item: any, dataIndex) => (
  //           <tr key={item.id} role="row" className="h-14">
  //             {Object.keys(data[0]).map((title: any, index) => (
  //               <td
  //                 role="cell"
  //                 key={`item${index}${dataIndex}`}
  //                 className="p-1 m-1 text-left"
  //                 onClick={() => {
  //                   if (onRowClick !== undefined) {
  //                     onRowClick(item.id);
  //                   }
  //                 }}
  //               >
  //                 {item[title]}
  //               </td>
  //             ))}
  //             <td role="cell" className="text-left">
  //               <FaIcon
  //                 role="img"
  //                 aria-label="trash-bin"
  //                 icon={faTrash}
  //                 px="0.25rem"
  //                 color="red"
  //                 mx="1rem"
  //                 onClick={() => {
  //                   if (onActionClick !== undefined) {
  //                     onActionClick(item.id);
  //                   }
  //                 }}
  //               />
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <div className="flex justify-center items-center">
  //       <Button type="button" variant="primary" onClick={onLoadData}>
  //         LOAD MORE...
  //       </Button>
  //     </div>
  //   </>
  // );
}

export default Table;
