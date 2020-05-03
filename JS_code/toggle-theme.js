const toggleDay = document.getElementById('toggleDay');
const toggleNight = document.getElementById('toggleNight');

toggleDay.addEventListener("click", () => {
   useTheme('light');
   sessionStorage.setItem('theme', 'light');
   logoGifos.setAttribute("src", "images/gifOF_logo.png");
})

toggleNight.addEventListener("click", () => {
   useTheme('dark');
   sessionStorage.setItem('theme', 'dark');
   logoGifos.setAttribute("src", "images/gifOF_dark.png");
})

const theme = {
   light: {
      '--maingradient': 'linear-gradient(to right, rgb(65, 128, 246) 0%, rgb(247, 201, 243) 100%)',
      '--bgcolor': 'rgb(255, 243, 252)',
      '--butcolor': '#F7C9F3',
      '--buttext': '#110038',
      '--itemHover': '#FFF4FD',
      '--linkHover': '#E6BBE2',
   },
   dark: {
      '--maingradient': 'linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)',
      '--bgcolor': '#0e0336',
      '--butcolor': '#EE3EFE',
      '--buttext': 'rgb(255, 255, 255)',
      '--itemHover': '#2E32FB',
      '--linkHover': 'rgb(216, 55, 231)',
   }
};

function useTheme(themeChoice) {
   document.documentElement.style.setProperty(
      '--maingradient',
      theme[themeChoice]['--maingradient']
   );
   document.documentElement.style.setProperty(
      '--bgcolor',
      theme[themeChoice]['--bgcolor']
   );
   document.documentElement.style.setProperty(
      '--butcolor',
      theme[themeChoice]['--butcolor']
   );
   document.documentElement.style.setProperty(
      '--buttext',
      theme[themeChoice]['--buttext']
   );
   document.documentElement.style.setProperty(
      '--itemHover',
      theme[themeChoice]['--itemHover']
   );
   document.documentElement.style.setProperty(
      '--linkHover',
      theme[themeChoice]['--linkHover']
   );
}

const logoGifos = document.getElementById("logoGifos");
logoGifos.setAttribute("src", "images/gifOF_logo.png");

const preferredTheme = sessionStorage.getItem('theme');
if (preferredTheme === 'dark') {
   useTheme('dark');
   toggleNight.onclick = true;
} else {
   useTheme('light');
   toggleDay.onclick = true;
}