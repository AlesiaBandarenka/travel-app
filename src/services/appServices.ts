import request from '@/services/api';

export default function fetchAllMovies() {
  return request('/movies');
}
