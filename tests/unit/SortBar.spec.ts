import { createStore } from 'vuex';
import SortBar from '@/components/SortBar.vue';
import { mount } from '@vue/test-utils';
import key from '@/store';

describe('unit tests for SortBar component', () => {
  const store = createStore({
    state: {
      movies: {
        sortByValue: 'type1',
      },
    },
  });

  const wrapper = mount(SortBar, {
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
});
