import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps{
content:string
}

const FileSyntaxHighlighter = ({content}:IProps) => {
  return (

    <SyntaxHighlighter language="javascript" 
    style={atomOneDark}
    customStyle={{
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
        fontSize:'1.3rem'
    }}
    showLineNumbers
    >
    {String(content)}
    </SyntaxHighlighter>
    
  )
}

export default FileSyntaxHighlighter


