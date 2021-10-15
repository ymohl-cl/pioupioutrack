import { GetResult, Storage } from'@capacitor/storage';

export default class SStorage {
    constructor() {
        // check the access storage
    }
    async write(key: string, value: any): Promise<void> {
        await Storage.set({
            key: key,
            value: JSON.stringify(value),
        })
    }
    async read(key: string): Promise<any> {
        let json: any = null;
        return await Storage.get({key: key}).then((data: GetResult): any => {
            if (data.value != null) {
                json = JSON.parse(data.value);
            }
            return json
        })
    }
}