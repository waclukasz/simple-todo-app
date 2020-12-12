console.log('app is running');

const setDate = () => {
  const dayOfMonth = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('default', { month: 'short' });
  const dayName = new Date().toLocaleString('default', { weekday: 'long' });

  const dateDay = document.getElementById('dateDay');
  const dateBox = document.getElementById('dateBox');  
  const headerDay = document.getElementById('headerDay');

  dateDay.innerHTML = `<p>${dayOfMonth}</p>`;
  dateBox.innerHTML = `
      <p>${month}</p>
      <p>${year}</p>
    `
  headerDay.innerHTML = `<p>${dayName.toLocaleUpperCase()}</p>`
}

setDate();

const toggleModal = () => {
  const modal = document.getElementById('modal');
  console.log(modal.classList.toggle('hidden'));
}

const todoAddBtn = document.getElementById('todoAddBtn');
todoAddBtn.addEventListener('click', toggleModal);
