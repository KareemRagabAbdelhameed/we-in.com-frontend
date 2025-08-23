import React, { useState } from 'react';
import { VscChromeClose, VscCloudUpload, VscRecord } from 'react-icons/vsc';

interface EmbedAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (title: string) => void;
}

const EmbedAudioModal: React.FC<EmbedAudioModalProps> = ({ isOpen, onClose, onInsert }) => {
  const [audioTitle, setAudioTitle] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleInsert = () => {
    // In a real app, you'd pass the audio file/URL here
    onInsert(audioTitle || 'Embedded Audio');
    onClose();
  };

  return (
    <div className="absolute top-0 right-0 w-full max-w-sm bg-white shadow-2xl border-l border-gray-200 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Embed Audio</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <VscChromeClose size={20} />
        </button>
      </div>

      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-600 mb-4">
          Upload or record an audio file to embed within your insight.
        </p>

        {/* Upload Option */}
        <div>
          <h3 className="text-xs uppercase font-bold text-gray-500 mb-2">Upload Audio File</h3>
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-400 transition">
            <VscCloudUpload size={24} className="mb-2" />
            <span>Click to upload a file</span>
          </button>
        </div>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Record Option */}
        <div>
          <h3 className="text-xs uppercase font-bold text-gray-500 mb-3">Record New Audio</h3>
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <button className="text-green-600 hover:text-green-700">
                <VscRecord size={24} />
            </button>
            <div className="flex-grow h-2 bg-gray-200 rounded-full"></div>
            <span className="text-sm font-mono text-gray-600">0:00</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Click the microphone to start recording.</p>
        </div>

        {/* Audio Title */}
        <div className="mt-8">
            <label htmlFor="audioTitle" className="text-sm font-medium text-gray-600 mb-2 block">Audio Title (Optional)</label>
            <input
                type="text"
                id="audioTitle"
                value={audioTitle}
                onChange={(e) => setAudioTitle(e.target.value)}
                placeholder="e.g., My morning thoughts"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
        <button onClick={onClose} className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition">
          Cancel
        </button>
        <button onClick={handleInsert} className="py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
          Insert
        </button>
      </div>
    </div>
  );
};

export default EmbedAudioModal;