const GOOGLE_API_KEY = "AIzaSyBwpcoi04zxqRKX5ejCalvzT2oRv-Hnt4s";

export const LIVE_CHAT_COUNT = 10;

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const mockData = [
  {
    username: "PixelPenguin",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    timestamp: "3 hours ago",
    comment: "This video saved me so much time. You're a legend!",
    likes: 152,
    replies: [
      {
        username: "DevDude42",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        timestamp: "2 hours ago",
        comment: "Seriously! I was struggling until I found this.",
        likes: 34,
        replies: [
          {
            username: "CodeVibes",
            avatar: "https://randomuser.me/api/portraits/men/61.jpg",
            timestamp: "1 hour ago",
            comment: "Same here, I'm bookmarking this.",
            likes: 12,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    username: "LazyGamerYT",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    timestamp: "6 hours ago",
    comment: "Not the content I expected, but I’m not mad.",
    likes: 45,
    replies: [],
  },
  {
    username: "MusicForDays",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    timestamp: "1 day ago",
    comment: "I come back to this every few months. Timeless.",
    likes: 210,
    replies: [
      {
        username: "EchoRoom",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
        timestamp: "22 hours ago",
        comment: "It really is. Just hits the spot every time.",
        likes: 90,
        replies: [
          {
            username: "VinylSoul",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            timestamp: "20 hours ago",
            comment: "Makes me feel like I'm back in 2010 🥲",
            likes: 55,
            replies: [],
          },
        ],
      },
      {
        username: "CloudSurfer",
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        timestamp: "18 hours ago",
        comment: "That vibe is unmatched!",
        likes: 30,
        replies: [],
      },
    ],
  },
  {
    username: "QuantumBanana",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    timestamp: "4 days ago",
    comment: "Anyone watching this in 2025? 😂 Still a banger!",
    likes: 300,
    replies: [
      {
        username: "JustHere4Memes",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        timestamp: "3 days ago",
        comment: "Bro we in the same boat 🚢",
        likes: 89,
        replies: [
          {
            username: "FutureProof",
            avatar: "https://randomuser.me/api/portraits/men/99.jpg",
            timestamp: "2 days ago",
            comment: "Still relevant, still gold.",
            likes: 40,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    username: "QuantumBanana",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    timestamp: "4 days ago",
    comment: "Anyone watching this in 2025? 😂 Still a banger!",
    likes: 300,
    replies: [
      {
        username: "JustHere4Memes",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        timestamp: "3 days ago",
        comment: "Bro we in the same boat 🚢",
        likes: 89,
        replies: [
          {
            username: "FutureProof",
            avatar: "https://randomuser.me/api/portraits/men/99.jpg",
            timestamp: "2 days ago",
            comment: "Still relevant, still gold.",
            likes: 40,
            replies: [],
          },
        ],
      },
    ],
  },
];
