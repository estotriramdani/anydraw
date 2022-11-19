import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { BG_CANVAS_ID, canvasSize } from '../../../constants';
import { getCanvasCtx, getCanvasEl } from '../../../utils';

const BackgroundChooser = () => {
  const [src, setSrc] = useState('');
  const [img, setImg] = useState<any>();
  const [position, setPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    if (!acceptedFiles[0].type.includes('image')) {
      toast('Image only', {
        icon: '❗',
      });
      return;
    }
    toast('Uploaded!', {
      icon: '✔',
    });
    const imageSrc = URL.createObjectURL(acceptedFiles[0]);
    setSrc(imageSrc);
    const image = new Image();
    image.src = imageSrc;
    setImg(image);
    const ctx = getCanvasCtx({ id: BG_CANVAS_ID });
    if (!ctx) return;
    image.onload = () => {
      const { width } = image;
      const widthPercentage = canvasSize.width / width;
      const finalWidth = canvasSize.width;
      const finalHeight = image.height * widthPercentage;
      let yCoordinate = 0;
      if (finalHeight !== canvasSize.height) {
        const diff = canvasSize.height - finalHeight;
        yCoordinate = Math.abs(diff) / 2;
        if (diff < 0) {
          yCoordinate *= -1;
        }
      }
      ctx.fillStyle = '#fff';
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.drawImage(image, 0, yCoordinate, finalWidth, finalHeight);
      setImg(image);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleHorizontalMove = (post: number) => {
    setPosition(post);
    const ctx = getCanvasCtx({ id: BG_CANVAS_ID });
    if (!ctx) return;
    console.log('image loaded');
    const { width } = img;
    const widthPercentage = canvasSize.width / width;
    const finalWidth = canvasSize.width;
    const finalHeight = img.height * widthPercentage;
    let yCoordinate = 0;
    if (finalHeight !== canvasSize.height) {
      const diff = canvasSize.height - finalHeight;
      yCoordinate = Math.abs(diff) / 2;
      if (diff < 0) {
        yCoordinate *= -1;
      }
    }
    ctx.fillStyle = '#fff';
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.drawImage(img, position, yCoordinate, finalWidth, finalHeight);
    setImg(img);
  };

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
