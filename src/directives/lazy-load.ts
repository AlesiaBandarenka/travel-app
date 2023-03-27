import type { Directive } from 'vue';

const LazyLoadDirective: Directive = {
  mounted(el) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            imageObserver.unobserve(el);
          }
        }
      });
    });
    imageObserver.observe(el);
  },
};
export default LazyLoadDirective;
