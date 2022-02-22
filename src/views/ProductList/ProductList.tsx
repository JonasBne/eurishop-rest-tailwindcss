import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetProducts, useMutationProductRemove } from '../../api/productsApi';
import Table from '../../components/Table/Table';
import LoadingSpinner from '../../components/LoadingSpinner';
import sortBy from '../../utils/sortBy';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import Button from '../../components/Button';
import toasts from '../../components/toasts';

function ProductList() {
  const [page, setPage] = useState<number>(0);
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { isLoading, error, products, refetch } = useGetProducts(page);

  const { mutate, error: deleteError, data: deletedData } = useMutationProductRemove();

  const [sortExpression, setSortExpression] = useState<string>('');

  useEffect(() => {
    if (deleteError) {
      failToast(deleteError);
    }
    if (deletedData) {
      succesToast(`Item with id: ${deletedData.id} removed!`);
      refetch();
    }
  }, [deleteError, deletedData]);

  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}/edit`);
  };

  const handleAction = (productId: string) => {
    mutate({ productId });
  };

  const sortedProducts = sortBy(products ?? [], sortExpression);

  // TODO: visibility based on breakpoints
  const columns = [
    {
      name: 'id',
      label: 'Product ID',
      sortable: true,
      id: 'col1',
    },
    {
      name: 'sku',
      label: 'Product number',
      sortable: true,
      id: 'col2',
    },
    {
      name: 'title',
      label: 'Title',
      sortable: true,
      id: 'col3',
    },
    {
      name: 'desc',
      label: 'Description',
      sortable: false,
      id: 'col4',
    },
    {
      name: 'image',
      label: 'Image URL',
      sortable: false,
      id: 'col5',
    },
    {
      name: 'stocked',
      label: 'In stock',
      sortable: true,
      render: (row: any) => (row.stocked ? 'Yes' : 'No'),
      id: 'col6',
    },
    {
      name: 'basePrice',
      label: 'Base price',
      sortable: true,
      id: 'col7',
    },
    {
      name: 'price',
      label: 'Unit price',
      sortable: true,
      id: 'col8',
    },
    {
      name: 'actions',
      label: 'Actions',
      sortable: false,
      id: 'col9',
    },
  ];

  const handleAddProductClick = () => {
    navigate('/products/new');
  };

  const handleLoadMoreData = () => {
    setPage((prePage) => prePage + 1);
  };

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {products && (
        <>
          <Button variant="primary" className="m-4 p-2" onClick={handleAddProductClick}>
            Add product +
          </Button>
          <Table
            data={sortedProducts}
            columns={columns}
            sortExpression={sortExpression}
            setSortExpression={setSortExpression}
            onRowClick={handleRedirect}
            onActionClick={handleAction}
            onLoadData={handleLoadMoreData}
          />
        </>
      )}
    </>
  );
}

export default ProductList;
