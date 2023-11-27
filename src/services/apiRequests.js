import axios from 'axios';


export const getRandomBibleVerse = async () => {
  const loadedVerse = JSON.parse(localStorage.getItem('verse'));
  const currentDate = new Date().toLocaleDateString();
  const loadedVerseDate = loadedVerse && loadedVerse.date;

  if (loadedVerse && currentDate === loadedVerseDate) return loadedVerse;

  const verse = await axios({
    method: 'get',
    url: 'https://labs.bible.org/api/?passage=votd',
  });
  const verseTextArr = verse.data.replace('<b>', '').replace('</b>', ' #').split('');
  const charIndex = verseTextArr.findIndex(char => char === '#');
  const verseTitle = verseTextArr.splice(0, charIndex).join('');
  const verseContent = verseTextArr.slice(2).join('');
  const verseObj = {
    title: verseTitle,
    text: verseContent,
  }
  if (!window.localStorage) return verseObj;
  verseObj.date = new Date().toLocaleDateString();
  localStorage.setItem('verse', JSON.stringify(verseObj));
  return verseObj;
}