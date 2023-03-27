import { shallowMount } from '@vue/test-utils';
import MovieCard from '@/components/MovieCard.vue';

let wrapper: any;

describe('unit tests for MovieCard component', () => {
  beforeEach(() => {
    wrapper = shallowMount(MovieCard, {
      props: {
        id: '61',
        title: 'La La Land',
        posterurl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg',
        year: '2008',
        genres: [
          'Animation',
          'Adventure',
          'Family',
        ],
      },
      computed: {
        showGenres: () => [
          'Animation',
          'Adventure',
          'Family',
        ].join(', '),
      },
    });
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should MovieCard contains li', () => {
    expect(wrapper.find('[data-test=test-movie-card]')).toBeTruthy();
  });

  it('should render li with class item', () => {
    expect(wrapper.findAll('li.item').length).toEqual(1);
  });

  it('should render a title', () => {
    expect(wrapper.find('[data-test=test-movie-title]').text()).toBe('La La Land');
  });

  it('should render year', () => {
    expect(wrapper.find('[data-test=test-movie-year]').text()).toBe('2008');
  });

  it('should render genres', () => {
    expect(wrapper.find('[data-test=test-movie-genres]').text()).toBe('Animation, Adventure, Family');
  });
});
