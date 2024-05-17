import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router';

export default function Select() {

    const router = useRouter()
    const [selectValue, setSelectValue] = useState(categories[0]);
    const [categoryIndex, setCategoryIndex] = useState(9);
    const [selectionWarning, setSelectionWarning] = useState(false);

    const handleClick = () => {
        if(categories.map((category) => category.label).includes(selectValue)) {
          localStorage.setItem('category', JSON.stringify(categoryIndex));
          router.push(`/components/Quiz`);
        } else {
          console.log('Please select a category');
          setSelectionWarning(true);
        }
    }

    const handleChange = (event, value) => {
      if(value === null) {
        console.log(`Value is null`)
        return;
      } else {
        console.log('The selected value is: ', value.label);
        setCategoryIndex(categories.indexOf(value) + 9);
        setSelectValue(value.label);
      }

    }

  return (
    <dov className="bg-[#171a3c] w-[31.3%] h-56 flex flex-col gap-5 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categories}
            sx={{ width: 500 }}
            style={{backgroundColor: '#f3f3f3', color: 'white', borderRadius: '5px'}}
            renderInput={(params) => <TextField {...params} placeholder="Select a category" />}
            onChange={handleChange}
        />
        <button onClick={handleClick} className='mt-5 bg-gradient-to-br hover:bg-gradient-to-tl hover:transition-all hover:duration-500 hover:cursor-pointer from-[#733de1] to-[#228fe0] rounded-full px-24 py-3 font-semibold'> Proceed </button>
        {selectionWarning && <p className='text-[14px] text-[red]'> Please select a valid category </p>}
    </dov>
  );
}

const categories = [
  { label: 'General Knowledge' },
  { label: 'Entertainment: Books' },
  { label: 'Entertainment: Film' },
  { label: 'Entertainment: Music'},
  { label: 'Entertainment: Musicals & Theatres' },
  { label: 'Entertainment: Television' },
  { label: 'Entertainment: Video Games' },
  { label: 'Entertainment: Board Games' },
  { label: 'Science & Nature' },
  { label: 'Science: Computers' },
  { label: 'Science: Mathematics' },
  { label: 'Mythology' },
  { label: 'Sports' },
  { label: 'Geography' },
  { label: 'History' },
  { label: 'Politics' },
  { label: 'Art' },
  { label: 'Celebrities' },
  { label: 'Animals' },
  { label: 'Vehicles' },
  { label: 'Entertainment: Comics' },
  { label: 'Science: Gadgets' },
];
