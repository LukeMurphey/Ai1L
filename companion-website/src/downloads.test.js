import { act } from "@testing-library/react";
import fs from "fs";
import downloads from "./downloads.json";

test("make sure the downloads are all valid", async () => {
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
