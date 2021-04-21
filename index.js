try {
  const data = JSON.parse(process.argv[2]);
  console.log(data);
} catch {
  console.log('Unable to parse');
}