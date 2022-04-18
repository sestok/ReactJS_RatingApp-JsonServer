import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutProject() {
  return (
    <Card>
      <div className="about">
        <h2>What's this Project?</h2>
        <p>
          I created this project from a Tutorial to learn more about React State
          Management
        </p>
        <p>In addition, I'm learning more about features in React6</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutProject
