import React, { useCallback, useImperativeHandle, forwardRef } from 'react'; // <-- Import hooks
import { useEditor, EditorContent, Editor } from '@tiptap/react';
// ... (all other imports remain the same)
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import {
    FaUndo, FaRedo, FaBold, FaItalic, FaUnderline, FaCode, FaLink, FaImage, FaHeadphones, FaVideo,
    FaListUl, FaListOl, FaAlignLeft, FaAlignCenter, FaAlignRight, FaLightbulb
} from 'react-icons/fa';

// --- MenuBar and other helper components remain exactly the same ---
const Separator = () => <div className="w-[1px] h-5 bg-gray-300 mx-2"></div>;
const ToolbarButton = ({ onClick, children, isActive = false, title }: { onClick?: () => void, children: React.ReactNode, isActive?: boolean, title: string }) => ( <button onClick={onClick} title={title} className={`p-2 rounded transition-colors ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`}> {children} </button> );
const MenuBar = ({ editor, onOpenAudioModal }: { editor: Editor | null; onOpenAudioModal: () => void }) => {
  // Hooks must be called unconditionally
  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-1 border-b p-2 bg-white">
      <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()}><FaUndo /></ToolbarButton>
      <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()}><FaRedo /></ToolbarButton>
      <Separator />
      <select
        onChange={(e) => {
          const level = e.target.value;
          if (level === 'p') {
            editor.chain().focus().setParagraph().run();
          } else {
            editor.chain().focus().toggleHeading({ level: parseInt(level, 10) as 1 | 2 }).run();
          }
        }}
        className="p-1 border-none outline-none focus:ring-0 text-sm"
        value={
          editor.isActive('heading', { level: 1 })
            ? '1'
            : editor.isActive('heading', { level: 2 })
            ? '2'
            : 'p'
        }
      >
        <option value="p">Style</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
      </select>
      <Separator />
      <ToolbarButton title="Bold" onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}><FaBold /></ToolbarButton>
      <ToolbarButton title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}><FaItalic /></ToolbarButton>
      <ToolbarButton title="Underline" onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')}><FaUnderline /></ToolbarButton>
      <ToolbarButton title="Code" onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive('code')}><FaCode /></ToolbarButton>
      <ToolbarButton title="Link" onClick={setLink} isActive={editor.isActive('link')}><FaLink /></ToolbarButton>
      <Separator />
      <ToolbarButton title="Image" onClick={addImage}><FaImage /></ToolbarButton>
      <ToolbarButton title="Audio" onClick={onOpenAudioModal} isActive={false}><FaHeadphones /></ToolbarButton>
      <ToolbarButton title="Video"><FaVideo /></ToolbarButton>
      <Separator />
      <ToolbarButton title="Bulleted List" onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}><FaListUl /></ToolbarButton>
      <ToolbarButton title="Numbered List" onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')}><FaListOl /></ToolbarButton>
      <ToolbarButton title="Align Left" onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })}><FaAlignLeft /></ToolbarButton>
      <ToolbarButton title="Align Center" onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })}><FaAlignCenter /></ToolbarButton>
      <ToolbarButton title="Align Right" onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })}><FaAlignRight /></ToolbarButton>
      <Separator />
      <ToolbarButton title="Insight"><FaLightbulb /></ToolbarButton>
    </div>
  );
};


// --- TiptapEditor Main Component ---

// STEP 1: Define the props and the shape of the handle we will expose
interface TiptapEditorProps {
  content: string;
  onChange: (newContent: string) => void;
  onOpenAudioModal: () => void;
}

export interface TiptapEditorHandle {
  insertAudio: (title: string) => void;
}

// STEP 2: Wrap the component with forwardRef
const TiptapEditor = forwardRef<TiptapEditorHandle, TiptapEditorProps>(
  ({ content, onChange, onOpenAudioModal }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit, Underline, Image,
        Link.configure({ openOnClick: false }),
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ],
      content: content,
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
      editorProps: {
          attributes: {
              class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl p-4 min-h-[500px] focus:outline-none w-full',
          },
      }
    });

    // STEP 3: Use useImperativeHandle to expose the insertAudio function
    useImperativeHandle(ref, () => ({
      insertAudio: (title: string) => {
        if (editor) {
          const audioEmbedHtml = `<div style="background-color: #f3f4f6; border-left: 4px solid #4ade80; padding: 1rem; margin: 1rem 0;"><strong>Audio:</strong> ${title}</div>`;
          // Use Tiptap's command to insert content at the current cursor position
          editor.chain().focus().insertContent(audioEmbedHtml).run();
        }
      },
    }));

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <MenuBar editor={editor} onOpenAudioModal={onOpenAudioModal} />
        <EditorContent editor={editor} />
        <style>{`.prose { max-width: 100%; }`}</style>
      </div>
    );
  }
);

export default TiptapEditor;