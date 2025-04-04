import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Presentation = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js`}>
                <Viewer fileUrl="./presentation.pdf" />
            </Worker>
        </div>
    );
};

export default Presentation;
