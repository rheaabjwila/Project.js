let collectionNFT = [];

function mintNFT(_size, _price, _texture, _flavor) {
    const cookies = {
        size: _size,
        price: _price,
        texture: _texture,
        flavor: _flavor
    }
    collectionNFT.push(cookies);
}

function listNFTs() {
    for(let i = 0; i < collectionNFT.length; i++) {
        console.log(collectionNFT[i]);
    }
}

function getTotalSupply () {
    console.log("TOTAL NFT: " + collectionNFT.length);
}

mintNFT("REGULAR", "70.00", "SOFT", "RED VELVET COOKIES");
mintNFT("PALM SIZE", "90.00", "CHEWY", "CHOCOLATE CHIPS W/ DARK CHOCO FILLING");
mintNFT("REGULAR", "80.00", "SOFT", "DOUBLE CHOCOLATE CHIPS COOKIE");
mintNFT("PALM SIZE", "90.00", "SOFT & CHEWY", "OREO CREAMCHEESE COOKIE");

listNFTs();

getTotalSupply();
