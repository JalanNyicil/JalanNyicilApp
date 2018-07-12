const oauth = require('oauth');
// require('dotenv').config();

myOauth = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0',
    null,
    'HMAC-SHA1',
)
module.exports = {
    getAllTwott : (req,res)=>{
        myOauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.USER_TOKEN,
            process.env.USER_SECRET,
            function(err, data, response){
                if (err) {
                    res.status(400).json({
                        error : err
                    })
                }else{
                    res.status(200).json(JSON.parse(data));
                }
            }
        )
    },
    searchTwott : (req,res)=>{
        let search = req.query.q;
        myOauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
            process.env.USER_TOKEN,
            process.env.USER_SECRET,
            function(err, result, response){
                if (err){
                    res.status(400).json({
                        error : err
                    })
                }else{
                    res.status(200).json(JSON.parse(result))
                }
            }
        )
    },
    postTwott : (req,res)=>{
        let statusPost = req.body.status;
        myOauth.post(
            'https://api.twitter.com/1.1/statuses/update.json',
            process.env.USER_TOKEN,
            process.env.USER_SECRET,
            {status: statusPost},
            function(err, tweet, response){
                if(err) {
                    res.status(400).json({
                        error : err
                    })
                }else{
                    res.status(200).json({message:'twott success', twott: JSON.parse(tweet)});
                }
            }
        )
    },
    getTimeLine : (req,res)=>{
        let username= req.query.username
        myOauth.get(
            `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}`,
            process.env.USER_TOKEN,
            process.env.USER_SECRET,
            function(err, result, response){
                if (err){
                    res.status(400).json({
                        error : err
                    })
                }else{
                    res.status(200).json(JSON.parse(result))
                }
            }
        )
    },
    retweet : (req,res)=>{
        let id = req.body.id
        myOauth.post(
            `https://api.twitter.com/1.1/statuses/retweet/${id}.json`,
            process.env.USER_TOKEN,
            process.env.USER_SECRET,
            {id: id},
            function(err, result, response){
                if (err){
                    res.status(400).json({error:err})
                }else{
                    res.status(200).json(JSON.parse(result))
                }
            }
        )
    }
}
