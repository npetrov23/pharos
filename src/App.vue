<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
    --color-bg-dark: #0F0F0F;
    --color-bg-dark-light: #1A1A1A;
    --color-bg-red: #C9012C;
    --color-text: #FFFFFF;
    --color-text-yellow: #FAED19;

}

* {
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}

span,
h1,
a {
    color: var(--color-text);
    text-decoration: none;
}
</style>
