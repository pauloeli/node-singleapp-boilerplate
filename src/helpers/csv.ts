import * as os from "os";

export class Csv {

    public static convert(items: Array<any>, delimiter: string = ',') {
        const keys = Object.keys(items[0]);
        let csv = keys.join(delimiter) + os.EOL;

        items.forEach((item: any) => {
            keys.forEach(function (key, i) {
                if (item[key]) {
                    csv += item[key]
                }
                if (i != keys.length) {
                    csv += delimiter;
                }
            });
            csv += os.EOL;
        });

        return csv;
    }

}
