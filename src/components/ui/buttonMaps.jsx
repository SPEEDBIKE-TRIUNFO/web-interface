function ButtonUser({ title }) {
    return (
        <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleAddLine}>
            {title}
        </button>

    )
}

function Button({ title, extraClasses }) {
    const commonClasses = `
      focus:outline-none 
      text-white 
      font-medium 
      rounded-lg 
      text-sm 
      px-5 
      py-2.5 
      me-2 
      mb-2
      focus:ring-4
    `;
  
    return (
      <button className={`${commonClasses} ${extraClasses}`}>
        {title}
      </button>
    );
  }
  
  function Delete({ title }) {
    const redButtonClasses = `
      bg-red-700 
      hover:bg-red-800 
      focus:ring-red-300 
      dark:bg-red-600 
      dark:hover:bg-red-700 
      dark:focus:ring-red-900
    `;
  
    return (
      <Button title={title} extraClasses={redButtonClasses} />
    );
  }

  function Add({ title }) {
    const greenButtonClasses = `
    bg-green-700 
    hover:bg-green-800 
    focus:ring-green-300 
    dark:bg-green-600 
    dark:hover:bg-green-700 
    dark:focus:ring-green-800
  `;
    return (
      <Button title={title} extraClasses={greenButtonClasses} />
    );
  }


ButtonUser.Delete = Delete
ButtonUser.Add = Add


export default ButtonUser;