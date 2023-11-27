export const selectImage = () => {
  const images = [
    {url: 'https://i.im.ge/2023/11/27/CoV4KY.1.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CoVGlD.2.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CoVei4.3.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofMcC.4.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofQeq.5.jpg'},
    {url: 'https://i.im.ge/2023/11/27/Cofo7p.6.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofXCP.7.jpg'},
    {url: 'https://i.im.ge/2023/11/27/Coflv1.8.jpg'},
    {url: 'https://i.im.ge/2023/11/27/Cofu2f.9.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofF6m.10.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofOVr.11.jpg'},
    {url: 'https://i.im.ge/2023/11/27/Cof2lW.12.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofS00.13.jpg'},
    {url: 'https://i.im.ge/2023/11/27/CofdgT.14.jpg'},
    {url: 'https://i.im.ge/2023/11/27/Cofqec.15.jpg'}
  ]
  const randomNumber = Math.floor(Math.random()*14);
  const url = images[randomNumber].url;
  return url;
}