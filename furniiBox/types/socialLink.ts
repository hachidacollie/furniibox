// SocialLink //

export enum SocialLinkType {
    Linktree = "Linktree",
    Twitter = "Twitter",
    Bluesky = "Bluesky",
    FurAffinity = "FurAffinity",
    Facebook = "Facebook",
    Instagram = "Instagram",
    YouTube = "YouTube",
    Pixiv = "Pixiv",
    Itaku = "Itaku",
}

export interface ISocialLink {
    type: SocialLinkType;
    url: string;
}

export interface ISocialLinkSotringScore {
    type: SocialLinkType;
    score: number;
}

// SoreLink //

export enum StoreLinkType {
    ReadAWrite = "ReadAWrite",
    Patreon = "Patreon",
    Sellfy = "Sellfy",
}

export interface IStoreLink {
    type: StoreLinkType;
    url: string;
}

export interface IStoreLinkSotringScore {
    type: StoreLinkType;
    score: number;
}