class Storage {
    set(key, value) {
      const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, serializedValue);
    }
  
    get(key) {
      const storedValue = localStorage.getItem(key);
      try {
        return JSON.parse(storedValue);
      } catch {
        if (typeof storedValue === 'undefined' || storedValue === null || storedValue === 'null') throw new Error('No value found');
        return storedValue;
      }
    }    
      
    remove(key) {
      localStorage.removeItem(key);
    }
  
    clear() {
      localStorage.clear();
    }
  }
  
  const storage = new Storage();
  export default storage;
  