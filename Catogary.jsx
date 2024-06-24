import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ComboBox = () => {
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    },
    textField: {
      background: 'black',
      color: 'white',
      borderColor: 'red',
      border: '2px solid red',
    },
    listbox: {
      border: '2px solid red',
      color: 'white',
      background: 'black',
    },
  };

  const handleChange = (event, value) => {
    if (value && value.link) {
      window.open(value.link, '_blank');
    }
  };

  const getOptionWithLink = (label) => {
    switch (label) {
      case 'The Godfather':
        return { label, link: 'https://archive.org/details/The.Godfather.1972.1080p.BluRay.DDP5.1.x264-PTer' };
      case 'Fight Club':
        return { label, link: 'https://archive.org/details/fight-club-1999-archive-uncompressed' };
      case 'Inception':
        return { label, link: 'https://archive.org/details/inception_522' };
      default:
        return { label };
    }
  };

  const options = top100Films.map((film) => getOptionWithLink(film.label));

  return (
    <div style={{ backgroundColor: 'black', paddingLeft: '100px', paddingTop: '50px', color: 'white', height: '100vh' }}>
      <h1 style={{ fontFamily: "sans-serif" }}>
        <center>
          Top 100 Movies in accordance with IMDB
        </center>
      </h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 1300 }}
        renderInput={(params) =>
          <TextField {...params} label="Movie" sx={styles.textField} InputLabelProps={{ style: { color: 'white' } }} inputProps={{ ...params.inputProps, style: { color: 'white' } }} />}
        ListboxProps={{ style: styles.listbox }}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) =>
          <li {...props}>
            {option.label}
            {option.link && (
              <span style={{ color: 'white', marginLeft: '10px' }}>
                .
              </span>
            )}
          </li>}
      />
    </div>
  );
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
];

export default ComboBox;
