export function GalleryComponent() {
  return (
    <div className="columns-row columns-3 md:columns-4 lg:columns-5 xl:columns-6 border-4 gap-3 bg-gray-300 rounded-xl m-1">
      <img className="border-4" id='img' />
      <div id='x'></div>
      <div>
        <img className="border-4" id='img2' />
        <button className="btn btn-secondary rounded">Twitter</button>
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