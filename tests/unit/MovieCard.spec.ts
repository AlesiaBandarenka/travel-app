import { shallowMount } from '@vue/test-utils';
import PhotoCard from '@/components/PhotoCard.vue';

let wrapper: any;

describe('unit tests for PhotoCard component', () => {
  beforeEach(() => {
    wrapper = shallowMount(PhotoCard, {
      props: {
        id: '1',
        title: 'Просмотр мультфильма в зоопарке',
        posterurl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg',
        year: '2023',
      },
    });
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should PhotoCard contains li', () => {
    expect(wrapper.find('[data-test=test-photo-card]')).toBeTruthy();
  });

  it('should render li with class item', () => {
    expect(wrapper.findAll('li.item').length).toEqual(1);
  });

  it('should render a title', () => {
    expect(wrapper.find('[data-test=test-photo-title]').text()).toBe('Просмотр мультфильма в зоопарке');
  });

  it('should render year', () => {
    expect(wrapper.find('[data-test=test-photo-year]').text()).toBe('2023');
  });
});
