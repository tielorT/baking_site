const recipes = [
    {
        title: 'Apple Muffins',
        description: 'moist and delicious apple muffins made from scratch',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/muffin-g072dd8c97_640-modified.png',
        popular: true,
        highlight: false
    },
    {
        title: 'Chocolate Muffins',
        description: 'perfect chocolately muffins that anyone can enjoy. Made with hershey chocolate',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/cupcakes-g36467a4ec_640-modified.png',
        popular: true,
        highlight: false
    },
    {
        title: 'Chocolate Chip Cookies',
        description: 'chunky chococlate chips and love is the main ingredients',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/chocolate-ga451ef9d1_640-modified.png',
        popular: true,
        highlight: false
    },
    {
        title: 'Black Apple Pie',
        description: 'Yummy apple pie with black raspberry and apple filling',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/apple-pie-g1b25d71aa_1280.jpg',
        popular: false,
        highlight: false
    },
    {
        title: 'Cinnamon Rolls',
        description: 'Home-made cinnamon rolls that will keep you running back',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/pastries-gcd20cc9ae_640.jpg',
        popular: false,
        highlight: false
    },
    {
        title: 'Cream-filled croissant',
        description: 'delicious croissant desert that the whole family can enjoy',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/croissants-gfa378983b_640.jpg',
        popular: false,
        highlight: true
    },
    {
        title: 'Chocolate Marshmallow fudge',
        description: 'Best combination since chocolate and peanut butter',
        img: 'https://bakingsocial4273df1a5abc40a991541933dcbc6a9273740-dev.s3.amazonaws.com/fudge-g580379c19_640.jpg',
        popular: false,
        highlight: true
    }
]

export default function handler(req, res) {

    res.status(200).json(recipes)
  }