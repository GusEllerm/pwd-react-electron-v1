import React from 'react'
import Editor from '@monaco-editor/react'

function MonacoEditor () {
  return (
    <Editor
      height="100vh"
      width="100%"
      language="javascript"
      theme="vs-dark"
      defaultValue="// Some Comment"
    />
  )
}

export default MonacoEditor;