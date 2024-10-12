const ConvertDateTime = (time: Date) => {
  let day = time.getDate().toString();
  let month = time.getMonth().toString();
  const year = time.getFullYear();
  if (time.getMonth() < 10)
    month = "0" + time.getMonth().toString();
  if (time.getDate() < 10)
    day = "0" + time.getDate().toString();
  return year + "-" + month + "-" + day;
}
export default ConvertDateTime;