import { shallowMount } from '@vue/test-utils';
import MovieCardsList from '@/components/PhotoCardsList.vue';

const movies = [{
  year: '1994',
  genres: [
    'Crime',
    'Drama',
  ],
  contentRating: '15',
  duration: 'PT142M',
  releaseDate: '1995-03-03',
  averageRating: 0,
  storyline: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
  actors: [
    'Tim Robbins',
    'Morgan Freeman',
    'Bob Gunton',
  ],
  imdbRating: 9.3,
  posterurl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg',
  id: 1,
  title: 'The Shawshank Redemption',
},
{
  year: '1972',
  genres: [
    'Crime',
    'Drama',
  ],
  contentRating: '15',
  duration: 'PT175M',
  releaseDate: '1972-09-27',
  averageRating: 0,
  storyline: 'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden',
  actors: [
    'Marlon Brando',
    'Al Pacino',
    'James Caan',
  ],
  imdbRating: 9.2,
  posterurl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg',
  id: 2,
  title: 'The Godfather',
}];
let wrapper: any;

describe('unit tests for MovieCardsList component', () => {
  beforeEach(() => {
    wrapper = shallowMount(MovieCardsList, {
      props: { movies },
    });
  });

  it('should initialize correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should render ul element', () => {
    wrapper.setProps({ results: [] });
    expect(wrapper.find('ul').exists()).toBe(true);
  });
  it('should render 2 MovieCard components', () => {
    const movieCards = wrapper.findAll('[data-test=test-movie-card-list]');
    expect(movieCards.length).toBe(2);
  });
});
