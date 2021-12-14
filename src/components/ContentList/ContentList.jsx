import React from 'react';
import Youtube from '../Youtube/Youtube';
import styles from './ContentList.module.css';

const ContentList = ({youtubeList}) => (
    <ul className={styles.contentList}>
        {youtubeList.map(youtube => (
            <Youtube key={youtube.id} youtube={youtube}/>
        ))}
    </ul> 
);

export default ContentList;