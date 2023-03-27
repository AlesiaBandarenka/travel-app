import { mount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  it('should mount AppFooter', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.find('[data-test=footer]').exists()).toBeTruthy();
  });
});
