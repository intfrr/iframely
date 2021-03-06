module.exports = {

    re: /^http:\/\/www\.travelchannel\.com\/video\/[\w-]+/i,

    mixins: [
        "og-title",
        "og-description",
        "og-site",
        "keywords",
        "canonical",

        "og-image",
        "favicon"
    ],

    getLinks: function(meta) {
        return [{
            href: meta.og.video.url,
            type: CONFIG.T.video_mp4,
            rel: CONFIG.R.player,
            "aspect-ratio": 576/414
        }, {
            href: meta.og.video.secure_url,
            type: CONFIG.T.flash,
            rel: [CONFIG.R.player, CONFIG.R.autoplay],
            "aspect-ratio": 576/414
        }];
    },

    tests: [
        "http://www.travelchannel.com/video/welcome-to-ups-airlines",
        {
            page: "http://www.travelchannel.com/video",
            selector: ".video-index a"
        }
    ]
};