import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
`;

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState: React.SetStateAction<EditorState>) => {
    setEditorState(newEditorState);
  };

  return (
    <Container>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar"
        wrapperClassName="wrapper"
        editorClassName="editor"
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
          },
        }}
      />
    </Container>
  );
};

export default TextEditor;
