import React from 'react'
import CategoryComponent from './CategoryComponent';
import ListComponent from './ListComponent';

function HomePage() {
  return (
    <div>
      <div>HomePage</div>
      <div>
        <ListComponent/>
      </div>
      <div>
        <CategoryComponent />
      </div>
    </div>
  )
}

export default HomePage