import { act } from "@testing-library/react";
import fs from "fs";
import downloads from "./downloads.json";

test("make sure the downloads are all available", async () => {
    const filesMissing = [];

    downloads.map(download => {
        fs.accessSync(`public/files/${download.file}`, fs.constants.F_OK, (err) => {
            if(err) {
                console.log(err, download.file);
                filesMissing.push(download.file);
            }
        });
    });



    await act(async () => {
        expect(filesMissing).toHaveLength(0);
    });
});

test("make sure the PPTXs are available for the presentations", async () => {
    const filesMissing = [];

    downloads.map(download => {
        if(download.title.startsWith("Slides: ") && !download.file_pptx) {
            filesMissing.push(download.short);
        }
    });

    await act(async () => {
        expect(filesMissing).toHaveLength(0);
    });
});

test("make sure the PPTXs exist", async () => {
    const filesMissing = [];

    downloads.map(download => {
        if(download.file_pptx) {
            fs.accessSync(`public/files/${download.file_pptx}`, fs.constants.F_OK, (err) => {
                if(err) {
                    console.log(err, download.short);
                    filesMissing.push(download.short);
                }
            });
        }
    });

    await act(async () => {
        expect(filesMissing).toHaveLength(0);
    });
});

test("make sure the PPTXs have the right extension", async () => {
    const filesMissing = [];

    downloads.map(download => {
        if(download.file_pptx && !download.file_pptx.endsWith('.pptx')) {
            filesMissing.push(download.short);
        }
    });

    await act(async () => {
        expect(filesMissing).toHaveLength(0);
    });
});

test("make sure the PPTXs have the right file name (the part before the extension is correct)", async () => {
    const filesMissing = [];
    
    downloads.map(download => {
        if(download.file_pptx ) {
            const pptx_wo_extension = download.file_pptx.substring(0, download.file_pptx.length - 5);
            const pdf_wo_extension = download.file.substring(0, download.file.length - 4);

            if(pptx_wo_extension !== pdf_wo_extension) {
                filesMissing.push(download.short);
            }
        }
    });

    await act(async () => {
        expect(filesMissing).toHaveLength(0);
    });
});

test("make sure the shortlinks are not duplicated", async () => {
    const duplicates = [];

    downloads.map(download => {
        const sameShortlink = downloads.filter(download2 => download2.short === download.short);

        if(sameShortlink.length > 1) {
            duplicates.push(download.short);
        }
    });

    await act(async () => {
        expect(duplicates).toHaveLength(0);
    });
});

test("make sure the files are not duplicated", async () => {
    const duplicates = [];

    downloads.map(download => {
        const sameFile = downloads.filter(download2 => download2.file === download.file);

        if(sameFile.length > 1) {
            duplicates.push(download.file);
        }
    });

    await act(async () => {
        expect(duplicates).toHaveLength(0);
    });
});
