import React, { useState } from 'react'
import Modal from 'react-modal'
import MarkNumber from './MarkNumber'

Modal.setAppElement('#root')
const InputModal = ({ view, closeModal, arrayAsInput }) => {

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
            <div className='bar_container2'>
                {
                    inputArray.map((number, index) => (
                        <div 
                            style={{ 'width': `${number}%` }}
                            key={index}
                            className='number-bar'
                        >{inputArray.length <=40 ? number : null}
                        </div>
                    ))
                }
            </div>
            <MarkNumber customStyle={{ display: 'flex' }} />
            <button style={btnStyle} onClick={() => closeModal()}>Cancel</button>
            <button style={btnStyle} onClick={() => confirmArray()}>Confirm Array</button>
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

const btnStyle = {
    marginRight: '10px'
}

export default InputModal
