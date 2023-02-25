import React from 'react'
import { NestedModal } from "./AddModal";
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
    </div>
  )
}

export default HomePage