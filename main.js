
var feed = new Instafeed({
    get: 'user',
    accessToken: '046189b106124e54b41fd6a9b6fef5e4',
    'userId': '503936656',
    sortBy: 'most-recent',
    limit: 5
});
feed.run();