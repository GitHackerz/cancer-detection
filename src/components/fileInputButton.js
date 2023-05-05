const FileInputButton = ({onChange}) => {
    return (<label htmlFor="file-input"
                   className="relative inline-block bg-transparent border-white border-2 py-3 px-6 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <span>Browse files</span>
        <input id="file-input" type="file" className="sr-only" onChange={onChange}/>
    </label>);
};

export default FileInputButton;
