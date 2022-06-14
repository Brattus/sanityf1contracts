import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
      <div className="py-20"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc1iFgosI1PcD4igd9CcTL_YRZrJfGVD-BO4DzxmLYOWw-sCg/viewform?usp=sf_link" target="_blank">Any mistakes or questions? Please post them here</a></div>
      </Container>
    </footer>
  )
}
