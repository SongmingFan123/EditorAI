import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProjectItemDisplay from 'app/pages/homepage/ProjectItemDisplay';

describe('ProjectItemDisplay component', () => {
  test('renders correctly', () => {
    const title = 'Test Project';
    const lastModified = '2024-05-10';
    const content = 'Test content';
    const setShowRemoveConfirmation = jest.fn();
    const setshowOpenConfirmation = jest.fn();

    const { getByText } = render(
      <ProjectItemDisplay
        title={title}
        lastModified={lastModified}
        content={content}
        setShowRemoveConfirmation={setShowRemoveConfirmation}
        setshowOpenConfirmation={setshowOpenConfirmation}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(lastModified)).toBeInTheDocument();

    const removeButton = getByText('X');
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(setShowRemoveConfirmation).toHaveBeenCalledWith(true);

    fireEvent.click(getByText(title));
    expect(setshowOpenConfirmation).toHaveBeenCalledWith(true);
  });
});
