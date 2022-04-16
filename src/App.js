import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Wanna delete it?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        } 
    }

    return (
    <>
    <Header />
    <FeedbackStats feedback={feedback}/>
       <div className='container'>
        <FeedbackList 
        feedback={feedback} 
        handleDelete={deleteFeedback}/>
    </div>
    </>
    )
}

export default App