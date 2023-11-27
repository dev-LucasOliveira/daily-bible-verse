<template>
  <main>
    <header>
      <h1><span>Daily</span><span>Verse</span></h1>
    </header>
    <img alt="sun flowers" src="image.jpg">
    <section>
      <p>{{ verse.title }}</p>
      <p>{{ verse.text }}</p>
    </section>
  </main>
</template>

<script>
import { getRandomBibleVerse } from '@/services/apiRequests.js';

const getVerse = async () => {
  const verse = await getRandomBibleVerse();
  return verse;
}

export default {
  name: 'MainComponent',
  components: {},
  data() {
    return {
      verse: '',
      image: ''
    }
  },
  async created() { 
    this.verse = await getVerse();
  }
}
</script>

<style scoped>
main {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-background-color);
}

header {
  position: fixed;
  top: 0;
  height: 7vh;
  width: 100%;
  /* background-color: var(--header-background-color); */
  /* box-shadow: 0px 0px 10px var(--shadow-color); */
  /* border-radius: 0 0 15px 15px; */
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  /* padding-top: 10vh; */
  width: 70vw;
  height: 70vh;
  border-radius: 7px;
}

section > p:first-child {
  font-size: 48px;
  color: #e5e5e5;
}

section > p:last-child {
  margin-top: 20px;
  font-size: 20px;
  text-align: justify;
  color: #e5e5e5;
}

img {
  opacity: 0.6;
  z-index: -1;
  position: absolute;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

h1 {
  padding: 0 25px;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

h1 > span:first-child {
  color: #e5e5e5;
}

h1 > span:last-child {
  color: #F4B980;
}
</style>