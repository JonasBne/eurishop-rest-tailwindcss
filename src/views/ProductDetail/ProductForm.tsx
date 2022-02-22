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

  /*

  TODO: 
  No alternative for grid template areas?
  How to spread register on a custom input component?
  */

  return (
    <form
      className="max-w-sx lg:max-w-2xl rounded-md overflow-hidden mt-8 mx-3"
      onSubmit={handleSubmit(handleFormResult)}
    >
      <h2 className="font-mono bg-blue-800 text-white text-center py-3 text-sm">{title}</h2>
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full" htmlFor="sku">
          Serial number
          <input
            id="sku"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('sku')}
          />
        </label>

        <label
          htmlFor="title"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          Title
          <input
            id="title"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('title')}
          />
        </label>

        <label
          htmlFor="stocked"
          className="flex flex-col uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          In stock
          <input id="stocked" type="checkbox" className="m-4" {...register('stocked')} />
        </label>

        <label
          htmlFor="base-price"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          Base price
          <input
            id="base-price"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('basePrice')}
          />
        </label>

        <label
          htmlFor="price"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          Unit price
          <input
            id="price"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('price')}
          />
        </label>

        <label
          htmlFor="image"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          Image URL
          <input
            id="image"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('image')}
          />
        </label>

        <label
          htmlFor="desc"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full"
        >
          Description
          <textarea
            id="desc"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register('desc')}
          />
        </label>
      </div>
      <div className="flex justify-center">
        <Button type="button" variant="danger" className="px-3" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="px-3">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
