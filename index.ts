import axios from "axios";

const url = "jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(res => {
  const todo = res.data;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});