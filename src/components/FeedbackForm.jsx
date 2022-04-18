import { useState } from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 15) {
            setMessage('Please write at least 15 characters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>Do you like tha app?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write your opinion..." value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
            </div>
            
            {message && <div className='message'>{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm