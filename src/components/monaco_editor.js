import React from 'react'
import Editor from '@monaco-editor/react'

function MonacoEditor () {
    return (
        <Editor
            height="100vh"
            width="100%"
            language="json"
            theme="vs-dark"
            value='{"menu": {
                "id": "file",
                "value": "File",
                "popup": {
                  "menuitem": [
                    {"value": "New", "onclick": "CreateNewDoc()"},
                    {"value": "Open", "onclick": "OpenDoc()"},
                    {"value": "Close", "onclick": "CloseDoc()"}
                  ]
                }
              }}' />
    )
}

export default MonacoEditor;