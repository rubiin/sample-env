export const splitLine = (line: string) => {
  const res = line.split('=')

  if (res.length === 1)
    return res[0]
  else
    return `${res[0]}=`
}

