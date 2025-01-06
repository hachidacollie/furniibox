import { HTMLAttributeAnchorTarget } from "react";

export function GalleryComponent() {
  return (

    <div className="h-full">
      <div className="card bg-base-100 hover:shadow-xl transition-shadow duration-300 h-full">
        <figure className="relative overflow-hidden rounded-t-xl aspect-square">
          <img
            src={"bg1.png"}
            alt={"Furry Artist -" + "artist.name"}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          // onError={handleImageError}
          />
        </figure>
        <div className="p-3 flex flex-col">
          <div className="flex items-center justify-center p-2">
            <h3 className="text-lg font-bold text-white truncate max-w-full">{"artist.name"}</h3>
          </div>
          <div className="hidden md:block flex-1">
            <div className="flex w-full flex-wrap gap-2 justify-center">
              {/* {artist.socalLinks.map(socialLink => renderSocialButton(socialLink.type, socialLink.url, SocialButtonSize.Large))} */}
              {/* {artist.storeLinks.map(storeLink => renderStoreButton(storeLink.type, storeLink.url, StoreButtonSize.Large))} */}
            </div>
          </div>
          <div className="block md:hidden flex-1">
            <div className="flex w-full flex-wrap gap-2 justify-center">
              {/* {artist.socalLinks.map(socialLink => renderSocialButton(socialLink.type, socialLink.url, SocialButtonSize.Small))} */}
              {/* {artist.storeLinks.map(storeLink => renderStoreButton(storeLink.type, storeLink.url, StoreButtonSize.Small))} */}
            </div>
          </div>
          <div className="flex flex-wrap gap-[4px] items-center pt-4">
            Tags:
            {/* {renderTags(artist.tags)} */}
          </div>
        </div>
      </div>
    </div>

  )
}

export function GetTwitter() {

  const clickTwitter = () => {
    const URL = 'https://twitter.com';
    window.open(URL, '_blank');
  }
  return (
    <button onClick={clickTwitter}
      className="bg-green-800 hover:bg-green-900 text-center text-white font-bold m-3 p-2 h-14 rounded">
      Twtitter
    </button>
  );
}

export const eventOnClickAddFursuit  = () => {
  window.open('addFursuit.html', '_blank');
}

export const eventOnClickHambergerMenu  = () => {
  
}