export const toggleScroll = () => {
  const overlays = document.querySelectorAll('.overlay');

  if (overlays.length > 0) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

export const convertImgToBase64 = (inputFile) => {
  if (inputFile === undefined) return '';
  const file = new FileReader();

  return new Promise((resolve, reject) => {
    file.onerror = () => {
      file.abort();
      reject(new DOMException('Problem parsing input file.'));
    };

    file.onload = () => {
      resolve(file.result);
    };
    file.readAsDataURL(inputFile);
  });
};

export const formatFileUrl = (path) => `${process.env.REACT_APP_BACKEND_URL}/${path}`;
