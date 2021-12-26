export const generateId = () => {
  return '_' + Date.now().toString(36).substring(2, 11);
};
