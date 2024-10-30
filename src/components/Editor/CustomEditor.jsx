import React from 'react';
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles, CreateLink,
    headingsPlugin, listsPlugin, ListsToggle, MDXEditor, quotePlugin, thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import './CustomEditor.css'

const CustomEditor = () => {
    return (
        <>
            <MDXEditor
                className="dark-theme dark-editor"
                markdown="# Hello world"
                plugins={[
                    headingsPlugin(),
                    toolbarPlugin({ toolbarContents: () => (<><BlockTypeSelect /><UndoRedo /><BoldItalicUnderlineToggles /><ListsToggle /><CreateLink /></>) }),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    listsPlugin(),
                ]}
            />
        </>
    );
};

export default CustomEditor;
