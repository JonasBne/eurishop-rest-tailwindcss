/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Product from '../../domain/product';

interface ProductFormProps {
  title: string;
  initialProduct?: Product;
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

function ProductForm({ initialProduct, onCancel = noop, onSubmit = noop, title }: ProductFormProps) {
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
    <form className="w-full max-w-lg" onSubmit={handleSubmit(handleFormResult)}>
      <h2>{title}</h2>
      <div>
        <label
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          htmlFor="sku"
        >
          Serial number
          <input id="sku" type="text" {...register('sku')} />
        </label>

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
          htmlFor="grid-last-name"
        >
          Last Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />

        {/* <label htmlFor="title">
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
        </label> */}
      </div>
      {/* <div className="flex flex-end mx-2 my-1">
        <Button type="button" variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div> */}
    </form>
  );
}

export default ProductForm;
