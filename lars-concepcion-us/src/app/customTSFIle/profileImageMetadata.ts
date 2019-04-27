import { NumberSymbol } from "@angular/common";

export class ProfileImageMetadata {
    profilePhoto : {
        id : String;
        filename : String;
        md5 : String;
        chunkSize : Number;
        length : Number;
        schemaType : String;
        rotation : Number;
        zoom : Number;
        uploadDate : String;
    };
    coverPhoto : {
        id : String;
        filename : String;
        md5 : String;
        chunkSize : Number;
        length : Number;
        schemaType : String;
        rotation : Number;
        zoom : Number;
        uploadDate : String;
    };
    logo : {
        id : String;
        filename : String;
        md5 : String;
        chunkSize : Number;
        length : Number;
        schemaType : String;
        rotation : Number;
        zoom : Number;
        uploadDate : String;
    };
}