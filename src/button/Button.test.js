import React from 'react';
import Button from './Button';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
    render(<Button></Button>)
})

it('renders button correctly', () => {
    const { getByTestId } = render(<Button>test</Button>)
    expect(getByTestId('button')).toHaveTextContent("test")
})