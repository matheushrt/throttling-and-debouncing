function init() {
  const input = document.querySelector('input');
  const listThrottle = document.querySelector('.throttle');
  const listDebounce = document.querySelector('.debounce');

  const throttledItem = throttle(addItem, 500);
  const debouncedItem = debounce(addItem, 2000);

  input.addEventListener('input', e => {
    throttledItem(listThrottle, e.target.value);
    debouncedItem(listDebounce, e.target.value);
  });

  function throttle(func, delay) {
    let shouldRun = true;

    return (...args) => {
      if (shouldRun) {
        setTimeout(() => {
          func(...args);
          shouldRun = true;
        }, delay);
      }
      shouldRun = false;
    };
  }

  function debounce(fn, delay) {
    return (...args) => {
      let timeout;
      clearTimeout(timeout, (timeout = setTimeout(fn, delay, ...args)));
    };
  }

  function addItem(parent, value) {
    const li = document.createElement('li');
    li.innerText = value;
    parent.appendChild(li);
  }
}
