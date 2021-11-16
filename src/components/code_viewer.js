import React from 'react';
import MonacoEditor from './monaco_editor';
import FileExplorer from './file_explorer';

function Code_Viewer () {
    return (

        <div class="columns">
            <div class="column">
                <FileExplorer />
            </div>
            <div class="column is-four-fifths">
                <MonacoEditor />
            </div>
        </div>
    );
}


export default Code_Viewer;