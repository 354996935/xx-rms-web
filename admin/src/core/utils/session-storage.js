export const getSessionStorage = ([...args]) => {
  const storage = {}
  args.forEach(arg => {
    storage[arg] = window.sessionStorage.getItem(arg) || null
  })
  return storage
}

export const setSessionStorage = data => {
  Object.keys(data).forEach(prop => {
    const el = data[prop]
    window.sessionStorage.setItem(prop, el)
  })
}

export const removeSessionStorage = ([...args]) => {
  args.forEach(arg => {
    window.sessionStorage.removeItem(arg)
  })
}
