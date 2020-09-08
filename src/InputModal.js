import React, { useState } from 'react'
import Modal from 'react-modal'
import MarkNumber from './MarkNumber'
import Bars from './Bars'

Modal.setAppElement('#root')
const InputModal = ({ view, closeModal, arrayAsInput, btnStyle, backToNormal }) => {

    const modify = {
        margin: '0',
        marginRight: '10px'
    }

    const btnStyleModified = {
        ...btnStyle, 
        ...modify
    }

    const [number, setNumber] = useState(5)
    const [inputArray, setInputArray] = useState([])

    const submitHandler = e => {
        e.preventDefault()
        if (number < 5 || number > 100) 
            alert('Input Number should be between 5 and 100')
        
        else if (inputArray.length === 100) {
            alert('No More Elements can be added')
        }
        else {
            inputArray.push(parseInt(number))
            setInputArray(inputArray)
            setNumber('')
        }
    }

    const confirmArray = () => {
        if (inputArray.length < 5 || inputArray.length > 100) 
            return alert('Array Length should be between 5 and 100')

        arrayAsInput(inputArray)
    }
    
    return (
        <Modal 
            isOpen={view}
            style={{
                overlay: { background: 'rgba(0,0,0,0.4)' }
            }}
        >    
            <form onSubmit={submitHandler}>
                <input 
                    type='number'
                    style={inputStyle}
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <button style={addBtnStyle}>Add Number</button>
            </form>
            <Bars 
                containerClass={'bar_container2'}
                displayArray={inputArray}
                background={null}
                range={inputArray.length}
                inputArrayOn={true}
                comparision={40}
            />
            <MarkNumber customStyle={{ display: 'flex' }} />
            <button style={btnStyleModified} onClick={() => closeModal()}>Cancel</button>
            <button style={btnStyleModified} onClick={() => confirmArray()}>Confirm Array</button>
            <button style={btnStyleModified} 
                onClick={
                    () => { 
                        setInputArray([]);
                        backToNormal()
                    }
                }
            >Clear Array</button>
            <small style={{ color: '#555' }}>Number Of Elements: {inputArray.length}</small>
        </Modal>
    )
}

const inputStyle = {
    width: '85%',
    padding: '5px'
}

const addBtnStyle = {
    width: 'calc(15% - 15px)',
    padding: '5px 0',
    border: 'none'
}

export default InputModal
