import React, {useState, useEffect} from 'react'
import Nav from '../Nav';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BuddyUp from "../components/images/BuddyUp.png";
import AddCommentIcon from '@mui/icons-material/AddComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ReturnUserHome = () => {

  const friendsList = [
    {
      name: 'Jonez',
      date: '08/01/23',
      color: '#12FF8D'
    },
    {
      name: 'Leela',
      date: '08/12/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Jayla',
      date: '09/16/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    },
    {
      name: 'Smith',
      date: '08/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
    },
    {
      name: 'Skade',
      date: '08/19/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Aaron',
      date: '09/01/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    },
    {
      name: 'Lucas',
      date: '10/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
    },
    {
      name: 'Eddie',
      date: '08/02/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Mikee',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    },
    {
      name: 'Billy',
      date: '10/23/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
    },
    {
      name: 'Jacky',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Alysa',
      date: '12/02/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    }
  ];

  const happinessPhrases = [
    "Endless smiles illuminate every moment.",
    "Laughter dances in warm sunlight.",
    "Joyful hearts sing in harmony.",
    "Serenity blooms from within.",
    "Blissful moments linger sweetly.",
    "Radiant happiness colors everyday life.",
    "Kindness sparks joyous connections.",
    "Gratitude turns moments into treasures.",
    "Love's embrace, pure happiness discovered.",
    "Tranquil moments, pure euphoria experienced.",
    "Heartfelt laughter echoes through time.",
    "Contentment paints life's canvas beautifully.",
    "Sunshine-kissed days, happiness blossoms.",
    "Inner peace, a constant serenade.",
    "Friendship's warmth, everlasting joy shared.",
    "Giggles echo, happiness resonates freely.",
    "Dreams realized, euphoria unfolds gracefully.",
    "Warm embraces, happiness embraced tightly.",
    "Positive vibes, happiness radiates outward.",
    "Melodies of joy, heartbeats synchronized.",
    "Serendipity smiles upon life's journey.",
    "Optimism's glow, a perpetual sunrise.",
    "Dancing in rain, pure elation.",
    "A grateful heart, perpetual happiness.",
    "Harmonious souls, happiness harmonized effortlessly.",
    "Shared laughter, a treasure trove.",
    "Love's laughter, a timeless melody.",
    "Grateful hearts, joy multiplies exponentially.",
    "Sunshine within, happiness shines brightly.",
    "Tender moments, happiness whispers softly.",
    "Pure joy flows effortlessly within.",
    "Blooms of happiness, life's garden.",
    "Gratitude's dance, perpetual celebration.",
    "Heartfelt smiles, pure soul connection.",
    "Serenity found in simple pleasures.",
    "Love's symphony, a euphoric composition.",
    "Moments cherished, happiness remembered.",
    "Contented hearts, life's truest wealth.",
    "Sunshine in hearts, warmth perpetual.",
    "Shared laughter, bonds unbreakable.",
    "Radiant joy, an inner sunrise.",
    "Optimistic hearts, perpetual spring.",
    "Laughter's dance, happiness' language.",
    "Friendship's glow, eternal happiness.",
    "Inner peace, life's sweetest melody.",
    "Joyful echoes, heartbeats synchronized beautifully.",
    "Grateful souls, happiness multiplied.",
    "Sun-kissed moments, pure bliss.",
    "Smiles exchanged, joy amplified.",
    "Euphoria in simplicity, happiness."
  ];
  

  const [randomImage, setRandomImages] = useState([]);
  const [friendImages, setFriendImages] = useState([]);
  const [likedPosts, setLikedPosts] = useState(
    friendsList.map(() => false) // Initialize with all posts as not liked
  );
  const [commentPopupIndex, setCommentPopupIndex] = useState(null);
  const [comments, setComments] = useState(friendsList.map(() => ''));

  useEffect(() => {
    const fetchFriendImages = async () => {
      const imagePromises = friendsList.map((friend) => fetch(`https://source.unsplash.com/random/?person/100x100&${friend.name}`)
        .then(response => response.url));
      const images = await Promise.all(imagePromises);
      setFriendImages(images);
    };

    fetchFriendImages();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Fetch random image URLs for each friend
    const fetchImageUrls = async () => {
      const urls = await Promise.all(
        friendsList.map(async (friend) => {
          const response = await fetch(`https://source.unsplash.com/random/?group/280x190&${friend.name}`);
          if (response.ok) {
            return response.url;
          }
          return '';
        })
      );
      setRandomImages(urls);
    };

    fetchImageUrls();
    // eslint-disable-next-line
  }, []);

  const handleLikeClick = (index) => {
    // Toggle like status for the clicked post
    const updatedLikedPosts = [...likedPosts];
    updatedLikedPosts[index] = !updatedLikedPosts[index];
    setLikedPosts(updatedLikedPosts);
  };

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * happinessPhrases.length);
    return happinessPhrases[randomIndex];
  };

  const handleAddCommentClick = (index) => {
    setCommentPopupIndex(index);
  };

  const handleCommentChange = (event, index) => {
    const updatedComments = [...comments];
    updatedComments[index] = event.target.value;
    setComments(updatedComments);
  };

  const handleCommentSubmit = (index) => {
    setCommentPopupIndex(null);
  };

  return (
    <>
    <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div  id="outterDiv "style={{height:'600px', width: '350px',
                  overflow: 'hidden',
                  overflowY: 'scroll'}} >

        <div style={{height: '100%', width: '100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
              {friendsList.map((friend, index) => (
              <div id="post" style={{ display: 'flex', flexDirection: 'column', margin:'10px', borderRadius: '10px', backgroundColor: 'rgba(35, 100, 227, 0.08)'}}>
                  <div key={index} 
                            style={{ 
                                    borderRadius: '20px',
                                    display: 'flex',
                                    backgroundColor: 'rgba(35, 100, 227, 0.08)',
                                    borderBottom: '1px solid #000',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding:'10px',
                                    margin: '10px',
                                    fontSize: '18px',
                                    fontWeight: '500'
                                    }}>
                    <img src={friendImages[index]} alt="img" style={{ borderRadius: '50%', height: '30px', width: '30px' }} />
                    <span>{friend.name}</span>
                    <span>{friend.date}</span>
                  </div>
                  <div>  
                  <img id="postImg" style={{width:'100%', height: '190px'}} src={randomImage[index]} alt='post imaging'/>
                  <div id='friendPostContent'
                  style={{ border: '1px solid #000',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            backgroundColor: 'white',
                            alignItems: 'center',
                            gap: '20px',
                            padding:'10px',
                            margin: '10px',
                            fontSize: '18px',
                            fontWeight: '500',
                            borderRadius: '20px',
                            }}> 
                    {getRandomPhrase()}</div>
                  </div>
                  <div style={{flexDirection: 'row'}}>
                    {likedPosts[index] ? (
                      <FavoriteIcon
                        fontSize="medium"
                        style={{
                          marginLeft: '10px',
                          marginBottom: '10px',
                          color: 'red',
                        }}
                        onClick={() => handleLikeClick(index)}
                      />
                      ) : (
                      <FavoriteBorderIcon
                        fontSize="medium"
                        style={{
                          marginLeft: '10px',
                          marginBottom: '10px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleLikeClick(index)}
                      />
                      )}
                    <AddCommentIcon onClick={() => handleAddCommentClick(index)} fontSize="medium" style={{ marginLeft: '10px', marginBottom: '10px'}}/>
                  </div>
                   
                    {commentPopupIndex === index && (
                      <div style={{ flexDirection: 'row'}}>
                        <textarea
                          placeholder="Add a comment..."
                          value={comments[index]}
                          style={{width: '100%'}}
                          onChange={(event) => handleCommentChange(event, index)}
                        />
                        <button onClick={() => handleCommentSubmit(index)}>Submit</button>
                      </div>
                    )}  
                    <div id='friendPostContent' style={{ border: '1px solid #000', flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'white', alignItems: 'center', gap: '20px', padding:'10px', margin: '10px', fontSize: '18px', fontWeight: '500', borderRadius: '20px' }}>
                      {comments[index]}
                    </div>        
                  </div>
                ))}
          </div>
        </div>
      </div>

    <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>
     
        <Nav />
      </div>
    </>
    
  )
}

export default ReturnUserHome