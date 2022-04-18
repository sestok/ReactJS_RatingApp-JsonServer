import { useState } from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>Do you like tha app?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write your opinion..." value={text} />
                <Button type='submit'>Submit</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm