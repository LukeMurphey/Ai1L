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
