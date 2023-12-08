import { render, fireEvent } from '@testing-library/react';
import Select from './Select';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

describe('describe test', () => {
  // let component;
  // let tree;
  // beforeEach(() => {})
  it('should render select dropdown menu', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Provider store={store}>
        render(
          <Select
            setChosenTopic={handleChange}
            topics={['some-topic']}
          />
        )
      </Provider>
    )
    const select = container.firstChild as HTMLSelectElement
    const option = container.getElementsByTagName('option').item(0) as HTMLOptionElement
    const option2 = container.getElementsByTagName('option').item(1) as HTMLOptionElement

    fireEvent.change(select, { target: { value: 'some-topic' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(option.selected).toBe(false)
    expect(option2.selected).toBe(true)
  })
})