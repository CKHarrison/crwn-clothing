import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        //filter items to only show 4 items in the preview
        //then map over them
        // This may impact performance since these methods will have to re-run everytime the component gets re-rendered
        items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}/>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;