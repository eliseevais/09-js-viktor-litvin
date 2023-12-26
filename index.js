const todoListId_1 = '157yvg';
const todoListId_2 = '243hhj';
const todoListId_3 = '342jjg';
const todoListId_4 = '462jkj';

const todoLists = [
  {
    id: todoListId_1,
    title: 'What to learn',
    // tasks: [
    //   {id: '3', title: 'HTML', isDone: false},
    //   {id: '4', title: 'CSS', isDone: true},
    //   {id: '5', title: 'REACT', isDone: false},
    // ],
  },
  {
    id: todoListId_2,
    title: 'What to buy',
    // tasks: [
    //   {id: '6', title: 'milk', isDone: false},
    //   {id: '7', title: 'beer', isDone: true},
    //   {id: '8', title: 'cheese', isDone: false},
    // ],
  },
  {
    id: todoListId_3,
    title: 'What to read',
    // tasks: [
    //   {id: '9', title: 'Learn.js', isDone: false},
    //   {id: '10', title: 'MDN', isDone: false},
    //   {id: '11', title: 'React.doc', isDone: false},
    // ]
  },
  {
    id: todoListId_4,
    title: 'What to drink',
    // tasks: [
    // {id: '12', title: 'water', isDone: false},
    // {id: '13', title: 'juice', isDone: false},
    // {id: '14', title: 'ice-tea', isDone: false},
    // ]
  },
];

// const tasks = [
//   [
//     {id: '3', todoListId: '1', title: 'HTML', isDone: false},
//     {id: '4', todoListId: '1', title: 'CSS', isDone: true},
//     {id: '5', todoListId: '1', title: 'REACT', isDone: false},
//   ],
//   [
//     {id: '6', todoListId: '2', title: 'milk', isDone: false},
//     {id: '7', todoListId: '2', title: 'beer', isDone: true},
//     {id: '8', todoListId: '2', title: 'cheese', isDone: false},
//   ],
//   [
//     {id: '9', todoListId: '3', title: 'Learn.js', isDone: false},
//     {id: '10', todoListId: '3', title: 'MDN', isDone: false},
//     {id: '11', todoListId: '3', title: 'React.doc', isDone: false},
//   ],
// ]

const tasks = {
  [todoListId_1]: [
    {id: '3', title: 'HTML', isDone: false},
    {id: '4', title: 'CSS', isDone: true},
    {id: '5', title: 'REACT', isDone: false},
  ],
  [todoListId_2]: [
    {id: '6', title: 'milk', isDone: false},
    {id: '7', title: 'beer', isDone: true},
    {id: '8', title: 'cheese', isDone: false},
  ],
  [todoListId_3]: [
    {id: '9', title: 'Learn.js', isDone: false},
    {id: '10', title: 'MDN', isDone: false},
    {id: '11', title: 'React.doc', isDone: false},
  ],
  [todoListId_4]: [
    {id: '12', title: 'water', isDone: false},
    {id: '13', title: 'juice', isDone: false},
    {id: '14', title: 'ice-tea', isDone: false},
  ],
};

console.log(tasks['What to learn']);

const addTask = (title, todoListId) => {
  const newTask = {
    id: '12', title: title, isDone: false
  };
  const updatedTasksArray = [...tasks[todoListId], newTask];
  const tasksCopy = {...tasks};
  tasksCopy[todoListId] = updatedTasksArray;
  console.log(tasksCopy);
};

addTask('hey', todoListId_3);

const changeStatus = (taskId, todoListId, newStatus) => {
  const updatedTasksArray = tasks[todoListId].map(
    t => t.id === taskId
      ? {...t, isDone: newStatus}
      : t
  );
  const tasksCopy = {...tasks};
  tasksCopy[todoListId] = updatedTasksArray;
  console.log(tasksCopy);
}

changeStatus('5', todoListId_1, true);

const addTodoList = (title) => {
  const newTodo = {id: '98dfs', title: 'What to drink'};
  const updatedTodoLists = [...todoLists, newTodo];
  console.log(updatedTodoLists);
  console.log({...tasks, [todoListId]: []})
};

const todoListSpeedSearch = {
  [todoListId_1]: {
    id: todoListId_1,
    title: 'What to learn',
  },
  [todoListId_2]: {
    id: todoListId_2,
    title: 'What to buy',
  },
  [todoListId_3]: {
    id: todoListId_3,
    title: 'What to read',
  },
  [todoListId_4]: {
    id: todoListId_4,
    title: 'What to drink',
  }
}

// const newObj = {};
// for (let i = 0; i < todoLists.length; i ++) {
//   const newKey = todoLists[i].id;
//   newObj[newKey] = todoLists[i];
// }

// console.log(newObj);

const result = todoLists.reduce((newObj, el) => {
  newObj[el.id] = el;
  return newObj
}, {});

console.log('result', result);

const arr = [1, 2, 6, 10, 3, 4, 5];
const result2 = arr.reduce((sum, el)=>{
  sum += el;
  console.log(sum);
  return sum;
}, 0);

console.log(result2);

const result3 = arr.reduce((biggest, el)=> {
  biggest = biggest > el ? biggest : el;
  console.log(biggest);
  return biggest
}, 0);

console.log(result3);

const result4 = todoLists.reduce((newArr, el) => {
  newArr.push({...el, tasks: []});
  return newArr;
}, [])

const result5 = todoLists.reduce((newArr, el) => {
  if (el.id !== todoListId_1) {
    newArr.push(el)
  }
  return newArr
}, [])

console.log(result5);