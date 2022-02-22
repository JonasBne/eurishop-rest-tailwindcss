/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Label from '../../components/Label';
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
    <form
      className="max-w-sx rounded-md border-1 border-gray-300 overflow-hidden mt-4 mx-3 md:max-w-2xl md:mx-auto md:mt-8 md:text-xl "
      onSubmit={handleSubmit(handleFormResult)}
    >
      <h2 className="font-mono bg-blue-800 text-white text-center py-3 text-sm md:text-xl">{title}</h2>
      <div>
        <Label label="Serial number" htmlFor="sku">
          <Input id="sku" name="sku" type="text" register={register('sku')} />
        </Label>

        <Label label="Title" htmlFor="title">
          <Input id="title" name="title" type="text" register={register('title')} />
        </Label>

        <Label label="In stock" htmlFor="stocked">
          <input id="stocked" type="checkbox" className="m-4" {...register('stocked')} />
        </Label>

        <Label label="Base price" htmlFor="base-price">
          <Input id="base-price" name="base-price" type="text" register={register('basePrice')} />
        </Label>

        <Label label="Unit price" htmlFor="price">
          <Input id="price" name="price" type="text" register={register('price')} />
        </Label>

        <Label label="Image URL" htmlFor="image">
          <Input id="image" name="image" type="text" register={register('image')} />
        </Label>

        <Label label="Description" htmlFor="desc">
          <textarea
            id="desc"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:text-base"
            {...register('desc')}
          />
        </Label>
      </div>
      <div className="flex justify-center">
        <Button type="button" variant="danger" className="px-3 py-1 mx-2" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="px-3 py-1 mx-2">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
