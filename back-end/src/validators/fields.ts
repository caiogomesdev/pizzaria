export const isEmptyOrNull = (field: string, error: Error) => {
  if (!field?.trim()) {
    throw error;
  }
};
