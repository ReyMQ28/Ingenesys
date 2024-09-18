

const Mensaje = ({ texto }) => {
    return (
      <li className="flex items-center p-4 bg-pink-100 rounded shadow-md hover:bg-pink-50 cursor-pointer">
        <span className="mr-2 text-red-500">💖</span>
        <span className="text-sm sm:text-base text-purple-400">{texto}</span>
      </li>
    );
  };

export default Mensaje