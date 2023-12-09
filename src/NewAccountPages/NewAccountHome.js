import './NewAccountHome.css';
import React, { useState, useEffect } from 'react';
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import ErrorIcon from '@mui/icons-material/Error';
import AddIcon from '@mui/icons-material/Add';

const NewAccount = () => {

  const [isBeeping, setIsBeeping] = useState(false);
  const [posts, setPosts] = useState([]); // Store posts as objects containing imageUrl and comment
  const [showH1, setShowH1] = useState(true);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [comment, setComment] = useState('');
  

  useEffect(() => {
    const beepInterval = setInterval(() => {
      setIsBeeping((prev) => !prev);
    }, 500);

    return () => clearInterval(beepInterval);
  }, []);

  const handleClick = async () => {
    setShowCommentPopup(true);

    // Make API request to Unsplash for a random image
    try {
      const response = await fetch('https://source.unsplash.com/random/300x300/?person');
      if (response.ok) {
        setPosts((prevPosts) => [...prevPosts, { imageUrl: response.url, comment }]);
        setShowH1(false); // Hide the h1 element when at least one post is made
      } else {
        console.error('Failed to fetch random image');
      }
    } catch (error) {
      console.error('Error fetching random image', error);
    }
  };

  const handleCommentSubmit = () => {
    // Save the comment and hide the popup
    setPosts((prevPosts) => {
      const lastPost = prevPosts[prevPosts.length - 1];
      lastPost.comment = comment;
      return [...prevPosts];
    });
    setComment('');
    setShowCommentPopup(false);
  };

  const showAlert = () => {
    alert('Home: posts of you and your friends\nFriends: list of all your friends\n'
    + 'Search: make study plans\nAccount: change password & logout')
  };
  const iconStyle = {
    color: '#FFD700',
    position: 'relative',
    left: '300px',
    top: '-60px',
    transition: 'border-color 0.3s ease',
    borderColor: isBeeping ? 'transparent' : 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '50%', 
    cursor: 'pointer', 
  };

  const addStyle= {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#2264e2',
    borderRadius: '15px',
    boxShadow: '0px 4px 4px #00000040',
    display: 'flex',
    gap: '10px',
    height: '40px',
    justifyContent: 'center',
    position: 'relative',
    left: '0px',
    top: '-25px',
    width: 'auto',
    border: 'none',
    fontWeight: '400',
    padding: '10px'
  }

  const commentPopupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '330px',
  };

  const textareaStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#2264e2',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  };

  const postsContainerStyle = {
    maxHeight: 'calc(100vh - 30rem)',
    overflowY: 'auto',
    width: '330px',
    marginTop: '20px', // Add some top margin for better spacing
  };

  return (
    <>
      <div>
        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <button style={addStyle} onClick={handleClick}>
          Post <AddIcon />
        </button>
        
        <ErrorIcon style={iconStyle} onClick={showAlert} />
        
        {showH1 && (
          <div id="screenDiv" style={{ top: '-20px' }}>
            <h1 id="textWrapper">Make a post! Show how you're living!</h1>
          </div>
        )}

        <div style={postsContainerStyle}>
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '10px', backgroundColor: '#2264e25c' }}>
            <img src={post.imageUrl} alt={`Post ${index}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
            {post.comment && <p>{post.comment}</p>}
          </div>
        ))}
        </div>

        {showCommentPopup && (
          <div style={commentPopupStyle} className="comment-popup">
            <textarea
              style={textareaStyle}
              placeholder="Leave a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button style={buttonStyle} onClick={handleCommentSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
      
      <div id='firstNav' data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" style={{
        position: 'absolute',
        bottom: '0px'
      }}>
        <Navigation />
      </div>
    </>
  )
}

export default NewAccount