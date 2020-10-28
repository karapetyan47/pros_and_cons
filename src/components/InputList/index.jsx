import React from 'react';
import Input from './components/Input';

import './styles.css';

const InputList = ({ items, addItem, removeItem, changeItem }) => {
  const inputRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      {items.map((item, idx) => (
        <div key={item.id} className="item-wrapper">
          <div className="item-index">{idx + 1}.</div>
          <Input
            value={item.value}
            addItem={addItem}
            isLastItem={items.length - 1 === idx}
            removeItem={removeItem}
            changeItem={changeItem}
            index={idx}
            setIndex={setIndex}
            id={item.id}
            inputRef={idx === index ? inputRef : null}
          />
        </div>
      ))}
    </>
  );
};

export default InputList;
