declare namespace NasaApi {
    export interface Datum {
        center: string;
        title: string;
        keywords: string[];
        nasa_id: string;
        date_created: Date;
        media_type: string;
        description: string;
        description_508: string;
        secondary_creator: string;
        location: string;
        album: string[];
        photographer: string;
    }

    export interface Link {
        href: string;
        rel: string;
        render: string;
    }

    export interface Item {
        href: string;
        data: Datum[];
        links: Link[];
    }

    export interface Metadata {
        total_hits: number;
    }

    export interface Link2 {
        rel: string;
        prompt: string;
        href: string;
    }

    export interface Collection {
        version: string;
        href: string;
        items: Item[];
        metadata: Metadata;
        links: Link2[];
    }

    export interface RootObject {
        collection: Collection;
    }
}

export type { NasaApi };
