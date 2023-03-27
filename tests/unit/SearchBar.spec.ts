import { createStore } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import { mount } from '@vue/test-utils';
import key from '@/store';

describe('unit tests for SearchBar component', () => {
  const store = createStore({
    state: {
      movies: {
        searchValue: 'La La Land',
        searchByValue: 'type1',
      },
    },
  });

  const wrapper = mount(SearchBar, {
    global: {
      provide: {
        [key as any]: store,
      },
      plugins: [store],
    },
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should display an empty input field', () => {
    expect(wrapper.find('input').element.placeholder).toBe('Search');
    expect(wrapper.find('input').element.value).toBe('La La Land');
  });

  // it('should trigger input', async () => {
  //   const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation();
  //   await wrapper.find('input').trigger('input');
  //   expect(spyDispatch).toHaveBeenCalledTimes(1);
  // });
  // it('should trigger input', async () => {
  //   const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation();
  //   await wrapper.find('input').trigger('keypress.enter');
  //   expect(spyDispatch).toHaveBeenCalledTimes(1);
  // });
});
