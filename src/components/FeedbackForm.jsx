import { useState } from 'react'
import Card from "./shared/Card"

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
                <button type="submit">Submit</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm