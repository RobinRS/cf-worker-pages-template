import User from "../buttons/User";

// eslint-disable-next-line react/prop-types
function Sidebar ({ children }) {

  const list = [
    {
      title: "Login",
      list: [
        { text: 'login', href: '/login' },
      ]
    }
  ]

  return <>
    <div className='flex h-screen'>
      <div className='bg-base-200 min-w-[280px] flex flex-col text-white'>
        <div className='flex items-center justify-center w-full mt-4'>
          <p className='block antialiased font-sans text-base text-lg font-bold'>CF Pages & Worker Template</p>
        </div>
        <hr className="mb-3 mt-4 bg-base-200 opacity-20" />
        <div className='flex-grow'>
          <User />
          <ul>
            <li className='px-4 pt-4'>
              <label className="input input-bordered flex items-center gap-2 input-accent">
                <input type="text" className="grow" placeholder="Wishing well..." />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </li>
            <li>
              <ul className="menu bg-base-200 rounded-box">
                {list.map((e) => {
                  return (<li key={e.title}>
                    <h2 className="menu-title">{e.title}</h2>
                    <ul>
                      {e.list.map((i) => {
                        return (<li key={i.text}><a href={i.href}>{i.text}</a></li>)
                      })
                      }
                    </ul>
                  </li>)
                })}
              </ul>
            </li>

          </ul>
        </div>
        <div className='flex items-center justify-center w-full pb-4'>
          <p> © {new Date().getFullYear()} - Schleser</p>
        </div>
      </div>
      {children}
    </div>
  </>



}

export default Sidebar;