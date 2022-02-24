/* eslint-disable react/require-default-props */
import React, { ReactElement, ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render as rtlRender, RenderOptions as rtlRenderHookOptions } from '@testing-library/react';
import { renderHook as rtlRenderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

interface WrapperProps {
  children?: ReactNode;
}

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
        staleTime: 0,
      },
    },
  });
  // eslint-disable-next-line func-names
  return function ({ children }: WrapperProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
};

export const render = (children: ReactElement) =>
  rtlRender(<BrowserRouter>{children}</BrowserRouter>, {
    wrapper: createWrapper(),
  });

interface RenderHookOptions extends Omit<rtlRenderHookOptions, 'wrapper'> {
  // no extends
}

export const renderHook = <TProps, TResult>(callback: (props: TProps) => TResult, options?: RenderHookOptions) =>
  rtlRenderHook(callback, {
    ...options,
    wrapper: createWrapper(),
  });

export * from '@testing-library/react';
