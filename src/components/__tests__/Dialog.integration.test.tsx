import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Dialog } from '../Dialog/Dialog';
import { Button } from '../Button/Button';

describe('Dialog Integration', () => {
  it('renders dialog with actions and handles confirm/cancel', () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    function DialogWithActions({ isOpen }: { isOpen: boolean }) {
      return (
        <Dialog
          isOpen={isOpen}
          onClose={onCancel}
          actions={
            <>
              <Button onClick={onConfirm}>Confirm</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </>
          }
        >
          <div>Dialog Content</div>
        </Dialog>
      );
    }
    render(<DialogWithActions isOpen={true} />);
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalled();
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });
});