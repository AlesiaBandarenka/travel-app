import { computed } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';

// const mapGetters = () => {
//   const store = useStore();
//   return Object.fromEntries(Object.keys(store.getters)
//     .map((getter) => [getter, computed(() => store.getters[getter])]));
// };

const mapGetters = (module) => {
  const store = useStore();
  return Object.fromEntries(Object.keys(store.getters)
    .map((getter) => ((module !== undefined && getter.startsWith(module))
      ? [getter.substr(module.length + 1), computed(() => store.getters[getter])]
      : [getter, computed(() => store.getters[getter])])));
};
export default mapGetters;
