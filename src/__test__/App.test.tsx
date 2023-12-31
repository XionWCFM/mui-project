import App from '../App';
import { render, screen } from '@testing-library/react';

test('페이지가 제대로 뜨나요?', async () => {
  render(<App />);
  const umbutton = await screen.findByRole('button');
  expect(umbutton.innerHTML).toBe('엄준식');
});

// Tests
// test("Renders main page correctly", async () => {
//   // Setup
//   render(<App />);
//   const buttonCount = await screen.findByRole("button");
//   const codeCount = await screen.queryByText(/The count is now:/);

//   // Pre Expecations
//   expect(buttonCount.innerHTML).toBe("count is 0");
//   // Instead of:
//   expect(codeCount).toBeNull();
//   expect(codeCount).not.toBeInTheDocuement();

//   // Init
//   fireEvent.click(buttonCount);
//   fireEvent.click(buttonCount);

//   // Post Expectations
//   expect(buttonCount.innerHTML).toBe("count is 2");
//   expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
// });
