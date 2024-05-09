'use client'

import { useState } from 'react';
import axios from 'axios';
import {Input} from "@nextui-org/input";
import { SearchIcon } from './searchIcon';


interface SearchResult {
  id: number;
  title: string;
}

const SearchComponent =  () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [errorDb, setErrorDb] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await axios.get<SearchResult[]>(`/api/search?query=${query}`);
        setResults(response.data);
        setErrorDb('false')
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        setErrorDb('true')
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        value={query} onChange={handleChange}
        startContent={
            <SearchIcon  />
          }
      />
        </form>
        {!errorDb ? (
            <ul>
                {results.map((result) => (
                <li key={result.id}>{result.title}</li>
                ))}
            </ul>
         ):(
            <ul>
                <li >No results</li>
            </ul>
        )}

      </div>
    );
  };
  


export default SearchComponent;