export const Input = ({ type, placeholder, name, value, onChange }) => {
    return (
        <div className="has-[:focus]:border-white flex flex-items h-14 rounded-lg border-2 border-gray-700 mb-4 w-full">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className="bg-transparent outline-none  text-lg text-white p-2 pl-6 pr-11 "
            />
        </div>
    )
}