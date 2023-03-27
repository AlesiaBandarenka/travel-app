import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
  it('should mount AppHeader', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('[data-test=header]').exists()).toBeTruthy();
  });
});
