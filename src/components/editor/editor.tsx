import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { Dispatch, SetStateAction } from 'react';

export type TextEditorProps = {
  getText?: () => string;
  setText?: (text: string) => void;
  excludedToolbarItems?: string[];
  variables?: string[];
  height?: string;
  placeholder?: string;
  disableLists?: boolean;
  updateTemplate?: boolean;
  firstRender?: boolean;
  setFirstRender?: Dispatch<SetStateAction<boolean>>;
  editable?: boolean;
};


const editorConfig = {
  //   theme: ExampleTheme,
  onError(error: Error) {
    throw error;
  },
  namespace: "",
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};


export const Editor = (props: TextEditorProps) => {
  return (
    <div className="rounded-md border-input border">
      <LexicalComposer initialConfig={{ ...editorConfig }}>
        <div className="editor-container hover:border-emphasis focus-within:ring-brand-default rounded-md p-0 focus-within:ring-2">

          <div
            className={"editor-inner scroll-bar relative"}
            style={{ height: props.height }}
          >
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  readOnly={false}
                  style={{ height: props.height }}
                  className="editor-input py-2 px-3 overflow-auto"
                />
              }
              placeholder={
                props?.placeholder ? (
                  <div className="py-2 px-3 text-sm absolute top-0 pointer-events-none">{props.placeholder}</div>
                ) : null
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </div>
        </div>
      </LexicalComposer>
    </div>
  )
}