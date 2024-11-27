import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // Debounce input value
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, 500); // 500ms delay for debouncing

    return () => clearTimeout(timer); // Cleanup timer on component unmount
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
