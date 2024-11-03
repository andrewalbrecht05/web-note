import React from 'react';
import './NotePreview.css'

const NotePreview = ({title, date, text, handlePress}) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-GB');
    };

    return (
        <div className="note-card" onClick={handlePress}>
            <p className="note-list-title">{title}</p>
            <p className="note-list-date_created">{formatDate(date)}</p>
            <p className="note-list-text">
                {text.length < 30 ? text : text.slice(0, 30) + '...'}
            </p>
        </div>
    );
};

export default NotePreview;
