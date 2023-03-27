import { mount } from '@vue/test-utils';
import AppButton from '@/components/AppButton.vue';

describe('AppButton.vue', () => {
  const wrapper = mount(AppButton);
  it('should mount AppButton', () => {
    expect(wrapper.find('[data-test=button]').exists()).toBeTruthy();
  });
});
