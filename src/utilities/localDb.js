const addToDb = id => {
    const exists = getDb();
    let order = {};
    if (!exists) {
      order[id] = 1;
    }
    else {
      order = JSON.parse(exists);
      if (order[id]) {
        const newCount = order[id] + 1;
        order[id] = newCount;
      }
      else {
        order[id] = 1;
      }
    }
    updateDb(order);
  }
  
  const getDb = () => localStorage.getItem('order');
  
  const updateDb = cart => {
    localStorage.setItem('order', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const order = JSON.parse(exists);
      delete order[id];
      updateDb(order);
    }
  }
  
  const getOrder = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearOrder = () => {
    localStorage.removeItem('order');
  }
  
  export { addToDb, removeFromDb, clearOrder, getOrder }