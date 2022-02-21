/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SortableTableHeadProps {
  index: number;
  title: string;
  name: string;
  sortable: boolean;
  sortExpression: string;
  setSortExpression: (prevSortExp: any) => void;
  className?: string;
}

function SortableTableHead({
  index,
  title,
  name,
  sortable,
  sortExpression,
  setSortExpression,
  className,
}: SortableTableHeadProps) {
  const handleSort = (sortByField: string) => {
    setSortExpression((prevSortExp: any) => {
      if (prevSortExp?.includes('+')) {
        return `-${sortByField}`;
      }
      if (prevSortExp?.includes('-')) {
        return '';
      }
      return `+${sortByField}`;
    });
  };

  return (
    <th
      key={`header${index}`}
      className={classNames(className, 'text-left text-white leading-5 hover:cursor-pointer')}
      onClick={() => {
        if (sortable) {
          handleSort(name);
        }
      }}
    >
      <div className="flex flex-row">
        {title}
        {sortable && (
          <FontAwesomeIcon
            role="img"
            aria-label="sort-icon"
            icon={
              // eslint-disable-next-line no-nested-ternary
              sortExpression.includes('+') ? faSortDown : sortExpression.includes('-') ? faSortUp : faSort
            }
            className="w-4 h-4 ml-2"
          />
        )}
      </div>
    </th>
  );
}

export default SortableTableHead;
