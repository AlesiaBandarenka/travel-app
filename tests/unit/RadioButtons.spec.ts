import { shallowMount, mount } from '@vue/test-utils';
import RadioButtons from '@/components/RadioButtons.vue';

const items = { type1: 'title', type2: 'genre' };
const value = 'type1';
let wrapper: any;

describe('unit tests for RadioButtons component', () => {
  beforeEach(() => {
    wrapper = shallowMount(
      RadioButtons,
      { props: { items, value } },
    );
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should contain the value of the props', () => {
    expect(wrapper.html()).toContain('title');
    expect(wrapper.html()).toContain('genre');
  });
  it('should not contain unexpected value', () => {
    expect(wrapper.html()).not.toContain('rating');
    expect(wrapper.html()).not.toContain('title1');
  });
  it('should contain more buttons', () => {
    const itemsRandom = { type1: 'title', type2: 'genre', type3: 'rating' };
    const localWrapper = mount(
      RadioButtons,
      { props: { items: itemsRandom, value } },
    );
    const radioButtons = localWrapper.findAll('[data-test=radio-buttons]');
    expect(radioButtons.length).toBe(3);
  });

  it('should emitted changed event', async () => {
    await wrapper.find('[data-test=radio-buttons]').trigger('click');
    expect(wrapper.emitted().changed).toBeTruthy();
  });
});
