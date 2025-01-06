import { ISocialLink, IStoreLink } from "./socialLink";

export interface IArtist {
    name: string;
    imageProfileUrl: string;
    roleTags: string[];
    tags: ArtistTagType[];
    socalLinks: ISocialLink[];
    storeLinks: IStoreLink[];
}

export enum RoleTagType {
    Commissioner = "Commissioner",
    Artist = "Artist",
    Writer = "Writer",
    ContentCreator = "ContentCreator",
    Fursuiter = "Fursuiter",
    Handler = "Handler",
    Photographer = "Photographer",
}

export enum TagType {
    // Media
    Illustration = "Illustration",
    Animation = "Animation",
    // Media Dimension
    D2 = "2D",
    D3 = "3D",
    // Media refererence
    OC = "OC",
    Fanart = "Fanart",
    FanFiction = "FanFiction",
    Comic = "Comic",
    // BodyType
    Bara = "Bara",
    Twink = "Twink",
    // Krink
    Fantasy = "Fantasy",
    Vore = "Vore",
    Bodybuilder = "Bodybuilder",
    Hyper = "Hyper",
    Pregnancy = "Pregnancy",
    MPreg = "MPreg",
    Birth = "Birth",
}

export enum CommissionerTagType {
    // Media refererence
    OC = TagType.OC,
    Fanart = TagType.Fanart,

    // BodyType
    Bara = TagType.Bara,
    Twink = TagType.Twink,

    // Krink
    Fantasy = TagType.Fantasy,
    Vore = TagType.Vore,
    Bodybuilder = TagType.Bodybuilder,
    Hyper = TagType.Hyper,
    Pregnancy = TagType.Pregnancy,
    MPreg = TagType.MPreg,
    Birth = TagType.Birth,
}

export enum ArtistTagType {
    // Media
    Illustration = TagType.Illustration,
    Animation = TagType.Animation,

    // Media Dimension
    D2 = TagType.D2,
    D3 = TagType.D3,

    // Media refererence
    OC = TagType.OC,
    Fanart = TagType.Fanart,
    Comic = TagType.Comic,

    // BodyType
    Bara = TagType.Bara,
    Twink = TagType.Twink,

    // Krink
    Fantasy = TagType.Fantasy,
    Vore = TagType.Vore,
    Bodybuilder = TagType.Bodybuilder,
    Hyper = TagType.Hyper,
    Pregnancy = TagType.Pregnancy,
    MPreg = TagType.MPreg,
    Birth = TagType.Birth,
}

export enum WriterTagType {
    // Media refererence
    OC = TagType.OC,
    FanFiction = TagType.FanFiction,

    // BodyType
    Bara = TagType.Bara,
    Twink = TagType.Twink,

    // Krink
    Fantasy = TagType.Fantasy,
    Vore = TagType.Vore,
    Bodybuilder = TagType.Bodybuilder,
    Hyper = TagType.Hyper,
    Pregnancy = TagType.Pregnancy,
    MPreg = TagType.MPreg,
    Birth = TagType.Birth,
}

export enum ContentCreatorTagType {
    // Media refererence
    OC = TagType.OC,
    FanFiction = TagType.FanFiction,

    // BodyType
    Bara = TagType.Bara,
    Twink = TagType.Twink,

    // Krink
    Fantasy = TagType.Fantasy,
    Vore = TagType.Vore,
    Bodybuilder = TagType.Bodybuilder,
    Hyper = TagType.Hyper,
    Pregnancy = TagType.Pregnancy,
    MPreg = TagType.MPreg,
    Birth = TagType.Birth,
}

export const ArtistTagTypeColorSchemeMap = new Map<ArtistTagType, React.CSSProperties>([
    [ArtistTagType.Illustration, { backgroundColor: "#FF6B6B" }],  // Warm red for illustration
    [ArtistTagType.Animation, { backgroundColor: "#4ECDC4" }],     // Turquoise for animation
    [ArtistTagType.D2, { backgroundColor: "#45B7D1" }],           // Light blue for 2D
    [ArtistTagType.D3, { backgroundColor: "#96CEB4" }],           // Sage green for 3D
    [ArtistTagType.OC, { backgroundColor: "#FFD93D" }],           // Bright yellow for original content
    [ArtistTagType.Fanart, { backgroundColor: "#FF9F9F" }],       // Soft pink for fanart
    [ArtistTagType.Comic, { backgroundColor: "#6C5CE7" }],        // Purple for comic
    [ArtistTagType.Bara, { backgroundColor: "#A8E6CF" }],         // Mint green for bara
    [ArtistTagType.Twink, { backgroundColor: "#FDCB6E" }],        // Orange yellow for twink
    [ArtistTagType.Fantasy, { backgroundColor: "#81ECEC" }],      // Cyan for fantasy
    [ArtistTagType.Vore, { backgroundColor: "#B794F4" }],         // Purple-ish for vore
    [ArtistTagType.Bodybuilder, { backgroundColor: "#74B9FF" }],  // Sky blue for bodybuilder
    [ArtistTagType.Hyper, { backgroundColor: "#A3CB38" }],        // Lime green for hyper
    [ArtistTagType.Pregnancy, { backgroundColor: "#DDA0DD" }],    // Plum for pregnancy
])