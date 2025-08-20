import React, { useState, useRef } from 'react'; // <-- Import useRef
import TiptapEditor, { type TiptapEditorHandle } from './TiptapEditor'; // <-- Import the handle type
import EmbedAudioModal from './EmbedAudioModal';

const initialContent = `
    <h2>Listening Beyond Words</h2>
    <p>True wisdom often lies not in what is said, but in what is left unsaid...</p>
    {/* ... rest of your initial content ... */}
`;

const ContentCreatorPage: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>(initialContent);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState<boolean>(false);
  
  // STEP 1: Create a ref to hold a reference to the editor component
  const editorRef = useRef<TiptapEditorHandle>(null);

  // STEP 2: Update this function to use the ref
  const handleInsertAudio = (title: string) => {
    // Instead of updating state, we call the method on the editor component directly
    if (editorRef.current) {
      editorRef.current.insertAudio(title);
    }
    // We can also close the modal after inserting
    setIsAudioModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* STEP 3: Attach the ref to the TiptapEditor component */}
            <TiptapEditor
              ref={editorRef}
              content={editorContent}
              onChange={(newContent) => setEditorContent(newContent)}
              onOpenAudioModal={() => setIsAudioModalOpen(true)}
            />
          </div>
          <div className="relative">
            <EmbedAudioModal
                isOpen={isAudioModalOpen}
                onClose={() => setIsAudioModalOpen(false)}
                onInsert={handleInsertAudio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorPage;