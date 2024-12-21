export const fetcher = async (url, setData, setError) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Error with Code ${resp.status}`)
    }
    let data = await resp.json();
    setData(data);
  } catch (e) {
    setError(e)
  }
}

export const call = async (url) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Error with Code ${resp.status}`)
    }
    let data = await resp.json();
    return { error: null, data: data };
  } catch (e) {
    return { error: e, data: null }
  }
}

export const crsf = async () => {
  try {
    const resp = await fetch('/api/auth/csrf');
    if (!resp.ok) {
      throw new Error(`Error with Code ${resp.status}`)
    }
    let data = await resp.json();
    return { error: null, data: data };
  } catch (e) {
    return { error: e, data: null }
  }
}