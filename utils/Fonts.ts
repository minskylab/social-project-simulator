import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Karla:400,700&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const karla = new FontFaceObserver('Karla');

    karla.load().then(() => {
        document.documentElement.classList.add('karla')
    })
};

export default Fonts