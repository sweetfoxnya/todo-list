import {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import {useName} from '../hooks/useName'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

`;

const NameInput = styled.input`
  font-size: 25.5px;
  border-color: #9395D3;
  border-radius: 10px 10px 10px 10px;
`;

const NameButton = styled.button`
  
  border-radius: 10px 10px 10px 10px;
  background: #9395D3;
  width: 360px;
  height: 35px;
  flex-shrink: 0;
  color: #FFF;
  
`;

export const Input = () => {

    const inputRef = useRef();
    const containerRef = useRef();

    const {name, saveName} = useName()
    const [value, setValue] = useState('');

    useEffect(() => {
        if (name !== undefined) {
            setValue(name);
        }
    }, [name]);

    // Variant 3 - Excellent
    const onInputChange = (event) => {
        let newValue = event.nativeEvent.target.value;
        console.log(newValue);

        setValue(newValue);
    }

    const onSaveNameButtonClick = () => {
        saveName(value);
    }

    return (
        <Container ref={containerRef}>
            <NameInput ref={inputRef} value={value} onChange={onInputChange} />
            <NameButton onClick={onSaveNameButtonClick}>Add</NameButton>
        </Container>
    );
}