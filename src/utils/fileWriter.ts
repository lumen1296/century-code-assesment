
import fs from 'fs';

export async function fileWriter(folderFile: string, fileName: string, data: any): Promise<void> {
    fs.mkdirSync(folderFile, { recursive: true });
    if(data){
        fs.writeFileSync(fileName, JSON.stringify(data));
    }
   
}