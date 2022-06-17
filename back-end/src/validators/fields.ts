export const isEmptyOrNull = (field: string, error: Error) => {
  if (!field) {
    throw error;
  }
};
