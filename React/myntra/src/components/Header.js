// Header Component
export default function Header() {
  return (
    <div className="heading">
      <img
        src="https://images.indianexpress.com/2021/01/myntra.png?w=640"
        width="100px"
        height="80px"
      />

      <div className="options">
        <button>Men</button>
        <button>Women</button>
        <button>Kids</button>
        <button>Home and Living</button>
        <button>Beauty</button>
        <button>Studio</button>
      </div> 

      <input placeholder="Search for products and more" />

      <div className="profile">
        <button>Profile</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>
    </div> 
  ); 
} 