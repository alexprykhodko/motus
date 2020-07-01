# Throttle

The **throttle** parameter give us control over the rate at which the function that calculates current scroll percentage and applies stiling on the element.

By default **throttle** is set to *0*, which forces the use of the `window.requestAnimationFrame()` to throttle the animation updates.

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element99'),
  throttle: 100, // ms
  keyframes: [
    {marginLeft: '200px'},
  ]
});
Motus.addAnimation(newAnimation);
```

The animation looks very laggy but saves cpu cycles.

<!--- [start code] -->
<div class="box" id="element99"></div>
<!--- [end code] -->
