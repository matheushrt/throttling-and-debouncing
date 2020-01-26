<div align="center">
  <h1>Throttling and Debouncing</h1>
  
---
    Both of them are ways to limit the amount of JavaScript you are executing based on DOM events for performance reasons.
---
    Take a look at the implementation of both and open `index.html` to play around with the `text input` to visualize the difference between these two concepts.
---

</div>

#### Throttling:

```
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
```

#### Debouncing:

```
function debounce(fn, delay) {
    return (...args) => {
      let timeout;
      clearTimeout(timeout, (timeout = setTimeout(fn, delay, ...args)));
    };
  }
```
