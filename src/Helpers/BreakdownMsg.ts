export const getReadableIssues = (props: any) => {
  const keys = Object.keys(props);
  const readableIssues = keys
    .filter((key) => props[key])
    .map((key) => key.replace(/([A-Z])/g, " $1").toLowerCase())
    .join(", ");

  const lastIndex = readableIssues.lastIndexOf(", ");

  if (lastIndex !== -1) {
    const stringWithAnd =
      readableIssues.substring(0, lastIndex) +
      " and" +
      readableIssues.substring(lastIndex + 1);
    return stringWithAnd;
  }

  return readableIssues;
};
