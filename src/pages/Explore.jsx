import { Link } from "react-router-dom"
import Slider from "../components/Slider"
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

export default function Explore() {
  return (
    <div className="pageContainer">
      <div className="Explore">
        <header>
          <h2 className="pageHeader">Explore</h2>
        </header>
        <main>
          <Slider/>
          <h3 className="exploreCategoryHeading">
            Categories
          </h3>
          <div className="exploreCategories">
            <Link to='category/rent'>
            <p className="exploreCategoryName">Places for rent</p>
              <img 
                src={rentCategoryImage}
                alt="rent"
                className="exploreCategoryImg"
              />
              
            </Link>
            <Link to='category/sale'>
            <p className="exploreCategoryName">Places for sale</p>
              <img 
                src={sellCategoryImage}
                alt="sale"
                className="exploreCategoryImg"
              />
              
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

