import { shallowMount } from '@vue/test-utils';
import DetailedMovieCard from '@/components/DetailedMovieCard.vue';

let wrapper: any;

describe('unit tests for MovieCard component', () => {
  beforeEach(() => {
    wrapper = shallowMount(DetailedMovieCard, {
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
        contentRating: 'Btl',
        duration: 'PT128M',
        storyline: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.                Written by\nEirini',
      },
      computed: {
        showGenres: () => [
          'Animation',
          'Adventure',
          'Family',
        ].join(', '),
        movieDuration: () => 'PT128M'.split('').slice(2, 5).join(''),
      },
    });
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should MovieCard contains article', () => {
    expect(wrapper.find('[data-test=test-main-card]')).toBeTruthy();
  });

  it('should render article with class main-card', () => {
    expect(wrapper.findAll('article.main-card').length).toEqual(1);
  });

  it('should render a title', () => {
    expect(wrapper.find('[data-test=test-main-card-title]').text()).toBe('La La Land');
  });

  it('should render a rating', () => {
    expect(wrapper.find('[data-test=test-main-card-rating]').text()).toBe('Btl');
  });
  it('should render year', () => {
    expect(wrapper.find('[data-test=test-main-card-year]').text()).toBe('2008');
  });

  it('should render movieDuration', () => {
    expect(wrapper.find('[data-test=test-main-card-duration]').text()).toBe('128 min');
  });

  it('should render genres', () => {
    expect(wrapper.find('[data-test=test-main-card-genres]').text()).toBe('Animation, Adventure, Family');
  });
});
