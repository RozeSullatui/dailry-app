import React from 'react'
import CategoryComponent from './CategoryComponent';
import Header from './header';
import ListComponent from './ListComponent';

function HomePage() {
  return (
    <div>
      <Header/>
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