/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Product from '../../domain/product';

interface ProductFormProps {
  title: string;
  initialProduct?: Product;
  gridTemplateAreas: string;
  onCancel?: () => void;
  onSubmit?: (formValues: ProductFormValues) => void;
}

export interface ProductFormValues {
  id: string;
  sku: string;
  title: string;
  desc: string;
  image: string;
  stocked: boolean;
  basePrice: string;
  price: string;
}

const noop: any = () => {};

function ProductForm({ initialProduct, gridTemplateAreas, onCancel = noop, onSubmit = noop, title }: ProductFormProps) {
  const { register, handleSubmit } = useForm<ProductFormValues>({
    defaultValues: {
      id: initialProduct?.id?.toString(),
      sku: initialProduct?.sku,
      title: initialProduct?.title,
      desc: initialProduct?.desc,
      image: initialProduct?.image,
      stocked: initialProduct?.stocked,
      basePrice: initialProduct?.basePrice.toString(),
      price: initialProduct?.price.toString(),
    },
  });

  const handleCancel = () => {
    onCancel();
  };

  const handleFormResult = (formValues: ProductFormValues) => {
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleFormResult)}>
      <h2>{title}</h2>
      <div className="grid">
        <label htmlFor="sku">
          Serial number
          <input id="sku" type="text" {...register('sku')} />
        </label>

        <label htmlFor="title">
          Title
          <input id="title" type="text" {...register('title')} />
        </label>

        <label htmlFor="stocked">
          In stock
          <input id="stocked" type="checkbox" {...register('stocked')} />
        </label>

        <label htmlFor="base-price">
          Base price
          <input id="base-price" type="text" {...register('basePrice')} />
        </label>

        <label htmlFor="price">
          Unit price
          <input id="price" type="text" {...register('price')} />
        </label>

        <label htmlFor="image">
          Image URL
          <input id="image" type="text" {...register('image')} />
        </label>

        <label htmlFor="desc">
          Description
          <textarea id="desc" {...register('desc')} />
        </label>
      </div>
      <div className="flex flex-end mx-2 my-1">
        <Button type="button" variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
