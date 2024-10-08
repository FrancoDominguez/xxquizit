function TextInput({ title }) {
  return (
    <div className="sm:col-span-2 sm:col-start-1">
      <label
        htmlFor="city"
        className="block text-sm font-medium leading-6 text-white"
      >
        {title}
      </label>
      <div className="mt-2">
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default TextInput;
