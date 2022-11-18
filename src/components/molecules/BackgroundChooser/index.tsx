import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const BackgroundChooser = () => {
  const [src, setSrc] = useState('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    if (!acceptedFiles[0].type.includes('image')) return;
    const imageSrc = URL.createObjectURL(acceptedFiles[0]);
    setSrc(imageSrc);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full">
      <span className="text-xs">Background</span>

      {src === '' ? (
        <div
          {...getRootProps()}
          className="mt-1 cursor-pointer rounded-lg border border-primary p-1 text-primary duration-150 hover:bg-primary hover:text-primary-content"
        >
          <input {...getInputProps()} className="hidden" />
          {isDragActive ? (
            <div className="flex flex-col items-center justify-center">
              <i className="bi bi-file-image"></i>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <i className="bi bi-upload"></i>
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-10 w-full overflow-hidden rounded-lg">
          <button
            className="absolute block h-full w-full bg-error/0 duration-150 hover:bg-error/80"
            onClick={() => setSrc('')}
          >
            <i className="bi bi-trash"></i>
          </button>
          <img src={src} alt="" className="block h-full w-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default BackgroundChooser;
