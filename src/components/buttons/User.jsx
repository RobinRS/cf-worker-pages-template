
import { useState, useEffect } from 'react'
import { crsf } from '../../helper/fetcher';

function User () {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const [dropdown, setDropDownOpen] = useState(false);

  const fetchCRSF = async () => {
    if (token === null) {
      const res = await crsf();
      if (res.error == null) {
        setToken(res.data.csrfToken);
      }
    }
  }

  const clearLocalStorage = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('willSignIn');
    console.log('Clear')
    setData(null);
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch('/api/user');
        if (!resp.ok) {
          throw new Error(`Error with Code ${resp.status}`)
        }
        let data = await resp.json();
        setData(data);
        localStorage.setItem('user', JSON.stringify(data))
      } catch (e) {
        console.log("Error")
        setError(e)
      }
    }
    if (localStorage.getItem('user') != null) {
      setData(JSON.parse(localStorage.getItem('user')))
    } else {
      console.log(localStorage.getItem('willSignIn'));
      if (JSON.parse(localStorage.getItem('willSignIn'))) {
        fetchUser();
      }
    }
  }, [])


  const signOutForm = <>
    <form action='/api/auth/signout' method='POST' className='w-full block' id="signout">
      <input type="hidden" name="csrfToken" value={token} />
    </form>
    <button className='rounded-md bg-black w-full text-white' onMouseEnter={fetchCRSF} onClick={() => {
      clearLocalStorage();
      document.getElementById('signout').submit();
    }}>Sign Out</button>
  </>

  const signInForm = <>
    <form action='/api/auth/signin/github' method='POST' id="signin">
      <input type="hidden" name="csrfToken" value={token} />
    </form>
    <button onMouseEnter={fetchCRSF} onClick={() => {
      localStorage.setItem('willSignIn', JSON.stringify(true))
      document.getElementById('signin').submit();
    }}>Sign In</button>
  </>

  const profile =
    <div className='flex items-center relative px-4' onClick={() => { setDropDownOpen(!dropdown) }}>
      <img src={data?.session?.user?.image} height={20} width={20} className='rounded-full w-8 h-8 mr-2' />
      <div className='flex flex-col'>
        <p className='font-bold p-0 m-0'>{data?.session?.user?.name}</p>
        <p className='font-thin -mt-1 text-xxs'>{data?.session?.user?.email}</p>
      </div>
      {dropdown && <div className='absolute top-10 min-w-[180px] bg-base-200 p-1 border border-blue-gray-50 rounded-md shadow-lg shadow-blue-gray-500/10'>
        <ul>
          <li>{data !== null && signOutForm}</li>
        </ul>
      </div>}

    </div>

  return (
    <>
      {data !== null && profile}
      {(error == null && data == null) && signInForm}
    </>
  )
}

export default User
