const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');

const handler1 = (event) => {
  event.stopImmediatePropagation();
  if(event.target.tagName === 'BUTTON') {
    alert(event.target.id)
  }
};

const handler2 = (event) => {
  console.log(event);
};

const handler3 = (event) => {
  event.stopPropagation();
  alert(`${event.target.id} ${event.currentTarget.id}`);
};

const handler4 = (event) => {
  alert(`${event.target.id} ${event.currentTarget.id}`);
};

sm.onclick = handler1;
sm.onclick = handler2;
sm.onclick = null;

sm.addEventListener('click', handler1);
sm.addEventListener('click', handler2);
md.addEventListener('click', handler3);
bg.addEventListener('click', handler4);

const func = (event) => {
  alert('yo');
  event.preventDefault();
  alert(`Don't go away!`);
}

const a = document.getElementById('a');
a.addEventListener('click', func);

a.removeEventListener('click', func);