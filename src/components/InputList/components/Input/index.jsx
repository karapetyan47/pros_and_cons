import React from 'react';

import './styles.css';

const Input = ({
  value: initialValue,
  id,
  addItem,
  isLastItem,
  removeItem,
  changeItem,
  inputRef,
  setIndex,
  index,
}) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (initialValue === '' && value.length > 0 && isLastItem) {
      addItem();
    }
  }, [value, addItem, initialValue, isLastItem]);

  const handleChange = (e) => {
    if (e.target.value === '') {
      setIndex(index);
      removeItem(id);
    }
    setValue(e.target.value);
  };

  const changeItemValue = () => {
    if (initialValue !== value) {
      changeItem({ id, value });
    }
  };

  return (
    <input
      ref={inputRef}
      className="input"
      value={value}
      onChange={handleChange}
      onBlur={changeItemValue}
      onKeyPress={({ key }) => {
        if (key === 'Enter' && value.length) {
          changeItemValue();
          setIndex(index + 1);
        }
      }}
      onFocus={() => {
        setIndex(index);
      }}
    />
  );
};

export default Input;
