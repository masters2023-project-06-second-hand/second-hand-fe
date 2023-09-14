export default function extractQueryString(url: string) {
  const params = new URLSearchParams(new URL(url).search);
  const desiredParams = ['state', 'code'];
  const newParams = new URLSearchParams();

  desiredParams.forEach((param) => {
    const value = params.get(param);
    if (value !== null) {
      newParams.append(param, value);
    }
  });

  return newParams.toString();
}
