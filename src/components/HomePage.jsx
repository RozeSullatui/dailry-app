import React from 'react'
import { ChildModal, NestedModal } from "./AddModal";
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
        <NestedModal />
      </div>
      <div>
        <ChildModal />
      </div>
      <div>
        <CategoryComponent />
      </div>
    </div>
  )
}

export default HomePage