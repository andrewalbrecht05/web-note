import React, { useState } from 'react';
import './Main.css';
import { icons } from '../../constants';
import NotePreview from '../../components/NotePreview/NotePreview';
import CustomEditor from '../../components/Editor/CustomEditor';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState();
    const mockNotes = [
        {
            title: 'My Goals for the Next Year',
            date: '2022-12-31T12:00:00Z',
            text: 'As the year comes to a close, I find myself reflecting on the things I want to achieve in the upcoming year. Here are some goals I have set...',
        },
        {
            title: 'Reflection on the Month of June',
            date: '2022-06-21T08:30:00Z',
            text: 'It\'s hard to believe that June has come and gone. This month has been a whirlwind of activities, lessons, and personal growth...',
        },
        {
            title: 'My Favorite Memories from Childhood',
            date: '2022-04-11T14:15:00Z',
            text: 'I was reminiscing about my favorite memories from childhood. Some of the best times were spent at my grandparents\' house in the countryside...',
        },
        {
            title: 'Reflections on My First Year of College',
            date: '2022-04-08T09:45:00Z',
            text: 'It\'s hard to believe that my first year of college is already over. I\'ve learned so much, both academically and personally...',
        },
        {
            title: 'My Experience with Meditation',
            date: '2022-03-24T16:10:00Z',
            text: 'I\'ve been trying to incorporate meditation into my daily routine, and it has made a huge difference in my stress levels and overall well-being...',
        },
        {
            title: 'Thoughts on the Pandemic',
            date: '2021-02-01T11:20:00Z',
            text: 'It\'s hard to believe that it\'s been over a year since the pandemic began. The world has changed so much, and I have some reflections to share...',
        },
        {
            title: 'My Favorite Recipes',
            date: '2021-01-08T19:00:00Z',
            text: 'I love cooking and trying out new recipes. Here are some of my favorites that I\'ve discovered and perfected over the years...',
        },
    ];

    const mockFolders = [
        { title: 'Personal' },
        { title: 'Work' },
        { title: 'Travel' },
        { title: 'Events' },
        { title: 'Finances' },
        { title: 'Shared' },
    ];

    const mockMoreOptions = [
        { title: 'Favorites', icon: icons.favorite },
        { title: 'Trash', icon: icons.trash },
        { title: 'Archived Notes', icon: icons.archive },
        /*{ title: 'Logout', icon: icons.logout },*/
    ];

    const handleFolderClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <img className="header__logo" src={icons.logo} alt="Logo" />
                <button className="button__new-note">
                    <img src={icons.add} alt="Add" />
                    <p style={{ margin: 0, padding: 0 }}>New note</p>
                </button>
                <div className="folders">
                    <div className="folders__header">
                        <p>Folders</p>
                        <img src={icons.folderAdd} alt="Add folder" />
                    </div>
                    <div className="folders__items">
                        {mockFolders.map((folder, index) => (
                            <div
                                className={`folders__item ${activeIndex === index ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleFolderClick(index)}
                            >
                                <img src={`${activeIndex === index ? icons.folderActive : icons.folder}`}
                                     alt="folder icon" className="folder_icon" />
                                <div className="folder_name">{folder.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="more-options">
                    <p className="options__text">More</p>
                    <div className="options__items">
                        {mockMoreOptions.map((option, index) => (
                            <div
                                className="options__item"
                                key={index}
                            >
                                <img src={option.icon}
                                     alt="option icon" className="folder_icon" />
                                <div className="folder_name">{option.title}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="side_preview">
                <p className="personal__text">Personal</p>
                <div className="notes-list">
                    {mockNotes.map((note, index) => (
                        <NotePreview
                            key={index}
                            title={note.title}
                            date={note.date}
                            text={note.text}
                        />
                    ))}
                </div>
            </div>
            <main>
                {/*<div className="empty_note">
                    <img src={icons.document} alt="" />
                    <p>Select a note to view</p>
                    <p>Choose a note from the list on the left to view its contents, or create a new note to add to your
                        collection.</p>
                </div>*/}
                <img src="" alt="" />
                <div className="selected_note">
                    <div className="selected_note__header">
                        <input className="note-title" value={"My goals for the Next Year"}></input>
                        <div className="icon-container">
                            <img
                                src={icons.options}
                                alt="option icon"
                                className="option_icon"
                            />
                            <div className="popup-menu">
                                <ul>
                                    <li>Add to favourites</li>
                                    <li>Archive</li>
                                    <li>Delete note</li>
                                    <li>Delete folder</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="selected_note__info">
                        <div className="info-container">
                            <div className="info-description">
                                <img src={icons.calendar} alt="calendar" />
                                <p className="info-desc-text">Date</p>
                            </div>
                            <div className="info-data">
                                <p className="info-data-text">21/06/2022</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="info-container">
                            <div className="info-description">
                                <img src={icons.folder} alt="calendar" />
                                <p className="info-desc-text">Folder</p>
                            </div>
                            <div className="info-data">
                                <p className="info-data-text">Personal</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="editor">
                    <CustomEditor/>
                </div>

            </main>
        </div>
    );
};

export default Main;