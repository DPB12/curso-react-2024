const generateObjectWithId = (val) => {
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2);

  const obj = {
    id: id,
    content: val,
    completed: false,
  };

  return obj;
};

export default generateObjectWithId;
