import React from 'react';
import './Wiki.css'; 

const Wiki = ({data}) => {
    return (
        <div className="wiki-container">
            <h1 className="wiki-header">{data.title}</h1>
            {data.content.map((item, index) => {
                switch (item.type) {
                    case 'subtitle':
                        return <h2 key={index} className="wiki-subtitle">{item.text}</h2>
                    case 'paragraph':
                        return <p key={index} className="wiki-text">{item.text}</p>
                    case 'image':
                        return <img key={index} src={item.src} alt={item.alt} className="wiki-image"/>
                    case 'list':
                        return (
                            <ul key={index} className="wiki-list">
                                {item.items.map((listItem, listIndex) => 
                                    <li key={listIndex} className="wiki-list-item">{listItem}</li>
                                )}
                            </ul>
                        )
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default Wiki;
