export const removeFieldByIndexCallback = <T>(
  indexToRemove: number
): ((current: T[]) => T[]) => {
  return (current) => {
    if (current.length === 1) {
      return [];
    }
    return current.filter((_, i) => i !== indexToRemove);
  };
};

export const updateFieldByIndexCallback = <T>(
  indexToUpdate: number,
  newValue: T
): ((current: T[]) => T[]) => {
  return (current) => {
    const next = [...current];
    next[indexToUpdate] = newValue;
    return next;
  };
};
