/*  fetch : api key  vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz*/

const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('change', toggleTheme, false);
/* let a = document.Getelementbytagname("div"):
a[0].classlist.toggle("dark");
a[0].classlist.toggle("light");
a[0].classlist.contains("name of the selected class")

const toggleButton = document.getElementById('dropdown-Item');
toggleButton.classList.toggle(""('change', toggleTheme, false);
*/
const theme = {
 light: {
  '--maingradient': 'linear-gradient(to right, rgb(65, 128, 246) 0%, rgb(247, 201, 243) 100%)',
  '--bgcolor': 'rgb(255, 243, 252)',
 },
 dark: {
  '--maingradient': 'linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)',
  '--bgcolor': '#0e0336',
 }
};

function toggleTheme(e) {
 if (e.target.checked) {
  useTheme('dark');
  localStorage.setItem('theme', 'dark');
 } else {
  useTheme('light');
  localStorage.setItem('theme', 'light');
 }
}

function useTheme(themeChoice) {
 document.documentElement.style.setProperty(
  '--maingradient',
  theme[themeChoice]['--maingradient']
 );
 document.documentElement.style.setProperty(
  '--bgcolor',
  theme[themeChoice]['--bgcolor']
 );
}

const preferredTheme = localStorage.getItem('theme');
if (preferredTheme === 'dark') {
 useTheme('dark');
 toggleButton.checked = true;
} else {
 useTheme('light');
 toggleButton.checked = false;
}