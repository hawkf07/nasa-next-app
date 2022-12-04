declare namespace NasaApi {
    export interface Datum {
        center: string | undefined;
        title: string | undefined;
        keywords: string[] | undefined;
        nasa_id: string | undefined;
        date_created: Date | undefined | string;
        media_type: string | undefined;
        description: string | undefined;
        description_508: string | undefined;
        secondary_creator: string | undefined;
        location: string | undefined;
        album: string[] | undefined;
        photographer: string | undefined;
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
type Collection = NasaApi.Collection;

export type { Collection, NasaApi };
