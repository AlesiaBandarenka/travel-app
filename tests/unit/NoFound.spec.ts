import { mount } from '@vue/test-utils';
import NoFound from '@/components/NoFound.vue';

describe('NoFound.vue', () => {
  const wrapper = mount(NoFound);
  it('should mount NoFound', () => {
    expect(wrapper.find('[data-test=no-found]').exists()).toBeTruthy();
  });
});
