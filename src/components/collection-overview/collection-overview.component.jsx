import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview.component.jsx';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);