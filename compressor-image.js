const { compress } = require('compress-images/promise');
    const INPUT_path_to_your_images = 'image-not-compressor/как_просматривать/**/*.{jpg,JPG,jpeg,JPEG,png}';
    const OUTPUT_path = 'image/where-stream/';

    const processImages = async () => {
        const result = await compress({
            source: INPUT_path_to_your_images,
            destination: OUTPUT_path,
            enginesSetup: {
                jpg: { engine: 'mozjpeg', command: ['-quality', '20']},
                png: { engine: 'pngquant', command: ['--quality=20-50', '-o']},
            }
        });

        const { statistics, errors } = result;
        // statistics - all processed images list
        // errors - all errros happened list
    };

    processImages();