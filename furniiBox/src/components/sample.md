const artists: IArtist[] = [
  {
    name: "Luna Starweaver",
    imageProfileUrl: "https://i.pinimg.com/736x/2f/91/8d/2f918dfb7282430bf3e381c689aa3987.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Fantasy],
    socalLinks: [
      { type: SocialLinkType.Twitter, url: "https://x.com/lunastarweaver" },
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/lunastarweaver" },
      { type: SocialLinkType.Linktree, url: "https://linktr.ee/lunastarweaver" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/lunastarweaver" },
      { type: StoreLinkType.Sellfy, url: "https://lunastarweaver.store/" }
    ]
  },
  {
    name: "Zephyr Brushstroke",
    imageProfileUrl: "https://i.pinimg.com/736x/32/a3/79/32a379e3097228ac774c6dd0200cd390.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.Animation, ArtistTagType.D2, ArtistTagType.OC, ArtistTagType.Bara],
    socalLinks: [
      { type: SocialLinkType.Linktree, url: "https://linktr.ee/zephyrbrush" },
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/zephyrbrush" },
      { type: SocialLinkType.Twitter, url: "https://x.com/zephyrbrush" }
    ],
    storeLinks: [
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=zephyrbrush" }
    ]
  },
  {
    name: "Echo Dreamscape",
    imageProfileUrl: "https://i.pinimg.com/736x/63/31/59/6331597fdd3085b0b7f3ff71a7bf5938.jpg",
    tags: [ArtistTagType.Animation, ArtistTagType.D2, ArtistTagType.Fantasy],
    socalLinks: [
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/echodream" },
      { type: SocialLinkType.Twitter, url: "https://x.com/echodreamscape" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@echodreamscape" }
    ],
    storeLinks: [
      { type: StoreLinkType.Sellfy, url: "https://echodream.store/" },
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/echodream" }
    ]
  },
  {
    name: "Nova Pawprints",
    imageProfileUrl: "https://i.pinimg.com/736x/da/c6/dd/dac6ddc3014df3df7dac9bb822f72633.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Twink],
    socalLinks: [
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/novapawprints" },
      { type: SocialLinkType.Pixiv, url: "https://www.pixiv.net/en/users/novapawprints" }
    ],
    storeLinks: [
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=novapawprints" }
    ]
  },
  {
    name: "Sage Whisperwind",
    imageProfileUrl: "https://i.pinimg.com/736x/a0/30/e6/a030e6637d7b12b7998bb1733073ffec.jpg",
    tags: [ArtistTagType.Animation, ArtistTagType.D2, ArtistTagType.Fanart],
    socalLinks: [
      { type: SocialLinkType.Pixiv, url: "https://www.pixiv.net/en/users/sagewhisper" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@sagewhisperwind" },
      { type: SocialLinkType.Twitter, url: "https://x.com/sagewhisper" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/sagewhisper" }
    ]
  },
  {
    name: "Aurora Inkpaw",
    imageProfileUrl: "https://i.pinimg.com/736x/b6/a9/fd/b6a9fd2b5d1d41e74cdcaea9170df7f8.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Comic],
    socalLinks: [
      { type: SocialLinkType.Bluesky, url: "https://bsky.app/profile/auroraink" },
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/aurorainkpaw" },
      { type: SocialLinkType.Facebook, url: "https://www.facebook.com/aurorainkpaw" }
    ],
    storeLinks: [
      { type: StoreLinkType.Sellfy, url: "https://auroraink.store/" }
    ]
  },
  {
    name: "Raven Moonshadow",
    imageProfileUrl: "https://i.pinimg.com/736x/b6/21/3a/b6213a74e4d3842e3811797474608d1e.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.Animation, ArtistTagType.D2, ArtistTagType.Fantasy, ArtistTagType.Bara],
    socalLinks: [
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/ravenmoonshadow" },
      { type: SocialLinkType.Itaku, url: "https://itaku.ee/profile/ravenmoonshadow" },
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/ravenmoonshadow" }
    ],
    storeLinks: [
      { type: StoreLinkType.Sellfy, url: "https://ravenmoonshadow.store/" },
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/ravenmoonshadow" }
    ]
  },
  {
    name: "Willow Frostfur",
    imageProfileUrl: "https://i.pinimg.com/736x/ec/2b/38/ec2b3856078978c23879404bfcec68a5.jpg",
    tags: [ArtistTagType.Animation, ArtistTagType.Illustration, ArtistTagType.D3],
    socalLinks: [
      { type: SocialLinkType.Twitter, url: "https://x.com/willowfrostfur" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@willowfrostfur" }
    ],
    storeLinks: [
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=willowfrost" }
    ]
  },
  {
    name: "Atlas Silverbrush",
    imageProfileUrl: "https://i.pinimg.com/736x/e4/70/1e/e4701e7ad49a62f21b3621a9a29446bd.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Bodybuilder],
    socalLinks: [
      { type: SocialLinkType.Facebook, url: "https://www.facebook.com/atlassilverbrush" },
      { type: SocialLinkType.Twitter, url: "https://x.com/atlassilver" },
      { type: SocialLinkType.Linktree, url: "https://linktr.ee/atlassilver" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/atlassilver" },
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=atlassilver" }
    ]
  },
  {
    name: "Iris Dawnweaver",
    imageProfileUrl: "https://i.pinimg.com/736x/23/5c/af/235caf23845edb308869f5c4fc8b2f06.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.OC],
    socalLinks: [
      { type: SocialLinkType.Linktree, url: "https://linktr.ee/irisdawn" },
      { type: SocialLinkType.Pixiv, url: "https://www.pixiv.net/en/users/irisdawn" },
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/irisdawnweaver" }
    ],
    storeLinks: [
      { type: StoreLinkType.Sellfy, url: "https://irisdawn.store/" }
    ]
  },
  {
    name: "Phoenix Stardust",
    imageProfileUrl: "https://i.pinimg.com/736x/07/1b/6f/071b6fa473c644be456dd5fa0d25585e.jpg",
    tags: [ArtistTagType.Animation, ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Fantasy, ArtistTagType.Hyper],
    socalLinks: [
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/phoenixstardust" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@phoenixstardust" },
      { type: SocialLinkType.Twitter, url: "https://x.com/phoenixstardust" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/phoenixstardust" },
      { type: StoreLinkType.Sellfy, url: "https://phoenixstardust.store/" }
    ]
  },
  {
    name: "Crystal Nightshade",
    imageProfileUrl: "https://i.pinimg.com/736x/15/b1/f3/15b1f3ea7a62e42b75a4c0b58d3b5b2c.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Twink],
    socalLinks: [
      { type: SocialLinkType.Twitter, url: "https://x.com/crystalnightshade" },
      { type: SocialLinkType.Itaku, url: "https://itaku.ee/profile/crystalnightshade" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@crystalnightshade" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/crystalnightshade" }
    ]
  },
  {
    name: "Ember Swiftpaw",
    imageProfileUrl: "https://i.pinimg.com/736x/8d/e4/98/8de498f1b84046c9c9067f279c5e41b0.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Comic],
    socalLinks: [
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/emberswiftpaw" },
      { type: SocialLinkType.Instagram, url: "https://www.instagram.com/emberswiftpaw" },
      { type: SocialLinkType.Bluesky, url: "https://bsky.app/profile/emberswiftpaw" }
    ],
    storeLinks: [
      { type: StoreLinkType.Sellfy, url: "https://emberswiftpaw.store/" },
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=emberswift" }
    ]
  },
  {
    name: "Mystic Moonwhisper",
    imageProfileUrl: "https://i.pinimg.com/736x/4a/c5/2b/4ac52b5e7a0747d2e27534038f9b3e89.jpg",
    tags: [ArtistTagType.Illustration, ArtistTagType.D2, ArtistTagType.Fantasy],
    socalLinks: [
      { type: SocialLinkType.Linktree, url: "https://linktr.ee/mysticmoonwhisper" },
      { type: SocialLinkType.Facebook, url: "https://www.facebook.com/mysticmoonwhisper" },
      { type: SocialLinkType.Pixiv, url: "https://www.pixiv.net/en/users/mysticmoon" }
    ],
    storeLinks: [
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/mysticmoon" },
      { type: StoreLinkType.Sellfy, url: "https://mysticmoon.store/" }
    ]
  },
  {
    name: "Shadow Silvertail",
    imageProfileUrl: "https://i.pinimg.com/736x/6d/f1/a1/6df1a1c20b3e9f9c1b1b1b1b1b1b1b1b.jpg",
    tags: [ArtistTagType.Animation, ArtistTagType.D2, ArtistTagType.OC],
    socalLinks: [
      { type: SocialLinkType.Twitter, url: "https://x.com/shadowsilvertail" },
      { type: SocialLinkType.YouTube, url: "https://www.youtube.com/@shadowsilvertail" },
      { type: SocialLinkType.FurAffinity, url: "https://www.furaffinity.net/user/shadowsilvertail" }
    ],
    storeLinks: [
      { type: StoreLinkType.ReadAWrite, url: "https://www.readawrite.com/?action=user_page&user_id_publisher=shadowsilver" },
      { type: StoreLinkType.Patreon, url: "https://www.patreon.com/shadowsilver" }
    ]
  }
];