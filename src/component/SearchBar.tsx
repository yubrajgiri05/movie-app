import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [inputValue, onSearch]);

  return (
    <div className="round">
      <input
        type="text"
        placeholder="Search for movies..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="round py-2 px-4 bg-gray-800 text-black placeholder-gray-400 outline-none"
      />
    </div>
  );
}
