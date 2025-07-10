# React + Vite + DaisyUI

## Light-Dark Toggle DaisyUI

The following line modifies the <html> document. 

```` js
document.documentElement.setAttribute("data-theme", theme)
````

It sets a custom `data-theme` attribute so that DaisyUI knows which theme to apply. `data-theme` is an atributte of DaisyUI.

For example:

```` js
document.documentElement.setAttribute("data-theme", "dark")
````

Sets a `dark` theme to

``` html
<html data-theme="dark">
````