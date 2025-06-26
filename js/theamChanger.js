document.addEventListener('DOMContentLoaded', () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-purple-500'];
  let currentColor = 0;

  document.getElementById('themeChanger').addEventListener('click', function () {
    document.body.classList.remove(colors[currentColor]);
    currentColor = (currentColor + 1) % colors.length;
    document.body.classList.add(colors[currentColor]);
  });
});
