const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for :", id);

  return {
    id: id,
    data: `some data for id : ${id}`,
    timeStamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache Hit for id", id);
    return dataCache.get(id);
  }

  console.log("Cache miss for id", id);
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};

console.log(getData(123));
console.log(getData(123));
console.log("cache data:", dataCache);
