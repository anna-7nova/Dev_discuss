'use client'

import { useState } from 'react';
import axios from 'axios';
import {Input} from "@nextui-org/input";
import { SearchIcon } from './searchIcon';
import { Button } from '@nextui-org/react';


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

    const handleItemClick = () => {
        setResults([]);
        setErrorDb('');
      };

    return (
        <div style={{ position: 'relative', display:'flex'}}>
          <form onSubmit={handleSubmit} style={{ position: 'relative', display:'flex', justifyContent : 'space-between' , alignItems:'center'}}>
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
              value={query}
              onChange={handleChange}
            />
            <Button isIconOnly color="default" type='submit' className='ml-5'> <SearchIcon/> </Button>
          </form>
          {results.length > 0   &&  (
            <div  onClick={handleItemClick} className ="result-search" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 999, maxHeight: '200px', overflowY: 'auto', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {results.map((result) => (
                  <li onClick={handleItemClick} key={result.id}>{result.title}</li>
                ))}
              </ul>
            </div>
          )}
          {errorDb  && (
            <div onClick={handleItemClick} className ="result-search" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 999, backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <ul  style={{ listStyleType: 'none', padding: 0 }}>
                <li onClick={handleItemClick} >No results</li>
              </ul>
            </div>
          )}
        </div>
      );
    };
    
  


export default SearchComponent;